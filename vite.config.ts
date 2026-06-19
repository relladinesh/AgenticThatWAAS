import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';import { spawn, exec } from 'child_process';

const masterCsvPath = path.resolve(__dirname, 'data/master_csv_of_templates.csv');

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'auto-screenshot-plugin',
      handleHotUpdate({ file, server }) {
        // Only run screenshot if a template file is saved
        const normalizedFile = file.replace(/\\/g, '/');
        if (normalizedFile.includes('/src/templates/') && normalizedFile.endsWith('.tsx')) {
          console.log(`\n🔄 Template change detected: ${path.basename(file)}. Triggering automated screenshot...`);
          
          if ((globalThis as any).screenshotTimeout) {
            clearTimeout((globalThis as any).screenshotTimeout);
          }
          
          (globalThis as any).screenshotTimeout = setTimeout(() => {
            const isWindows = /^win/.test(process.platform);
            const nodeCmd = isWindows ? 'node.exe' : 'node';
            const cp = spawn(nodeCmd, ['generate-screenshots.js', file], { 
              stdio: 'inherit',
              cwd: process.cwd() 
            });
            
            cp.on('close', () => {
              // Tell connected browsers to full reload so the new preview image is fetched
              server.ws.send({ type: 'full-reload' });
              console.log('✅ UI Preview Updated.');
            });
          }, 2000); // Wait 2s for Vite to finish compiling the module
        }
        
        // Auto-detect manual additions to business_templates.csv or leads.csv
        if (normalizedFile.endsWith('.csv') && !normalizedFile.includes('master_csv_of_templates')) {
          const now = Date.now();
          const lastRun = (globalThis as any).lastGenerateRun || 0;
          
          // Debounce by 10 seconds to prevent infinite loops when generate.js overwrites the CSV
          if (now - lastRun > 10000) {
             (globalThis as any).lastGenerateRun = now;
             console.log(`\n🔄 CSV change detected: ${path.basename(file)}. Auto-generating missing template folders...`);
             
             const isWindows = /^win/.test(process.platform);
             const nodeCmd = isWindows ? 'node.exe' : 'node';
             const cp = spawn(nodeCmd, ['generate.js'], { 
                stdio: 'inherit',
                cwd: process.cwd() 
             });
             
             cp.on('close', () => {
               server.ws.send({ type: 'full-reload' });
             });
          }
        }
      }
    },
    {
      name: 'master-csv-writer',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/save-master' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const payload = JSON.parse(body);
                const dir = path.dirname(masterCsvPath);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                
                let isNewFile = !fs.existsSync(masterCsvPath);
                let existingContent = '';
                if (!isNewFile) {
                  existingContent = fs.readFileSync(masterCsvPath, 'utf8');
                } else {
                  existingContent = 'business_name,category,template_code,slug,url,date_generated\n';
                }
                
                const rows = Array.isArray(payload) ? payload : [payload];
                const timestamp = new Date().toISOString();
                
                // Deduplication logic: parse existing URLs
                const existingUrls = new Set();
                const lines = existingContent.split('\n');
                for (const line of lines) {
                  const parts = line.split('","');
                  if (parts.length >= 5) {
                     // The URL is the 5th column
                     let urlPart = parts[4].replace(/"/g, '').trim();
                     existingUrls.add(urlPart.toLowerCase());
                  }
                }
                
                let appendContent = '';
                if (isNewFile) {
                  appendContent = 'business_name,category,template_code,slug,url,date_generated\n';
                }

                for (const data of rows) {
                  const safeUrl = data.url.toLowerCase();
                  if (!existingUrls.has(safeUrl)) {
                    appendContent += `"${data.businessName.toLowerCase()}","${data.category.toLowerCase()}","${data.template.toLowerCase()}","${data.slug.toLowerCase()}","${safeUrl}","${timestamp.toLowerCase()}"\n`;
                    existingUrls.add(safeUrl);
                  }
                }
                
                if (appendContent) {
                  fs.appendFileSync(masterCsvPath, appendContent);
                  
                  // Automatically commit and push to GitHub
                  const gitCmd = `git add "${masterCsvPath}" && git commit -m "Auto-update master CSV with Vercel links" && git push`;
                  
                  exec(gitCmd, { cwd: __dirname }, (error: any, stdout: string, stderr: string) => {
                    if (error) {
                      console.error(`❌ GitHub Push Failed: ${error.message}`);
                    } else {
                      console.log(`✅ Automatically pushed updated CSV to GitHub`);
                    }
                  });
                }
                
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, newRowsAdded: !!appendContent }));
              } catch (e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }));
              }
            });
            return;
          }
          if (req.url === '/api/download-master' && req.method === 'GET') {
             if (fs.existsSync(masterCsvPath)) {
               res.setHeader('Content-Type', 'text/csv');
               res.setHeader('Content-Disposition', 'attachment; filename="master_csv_of_templates.csv"');
               const stream = fs.createReadStream(masterCsvPath);
               stream.pipe(res);
             } else {
               res.statusCode = 404;
               res.end('Not found');
             }
             return;
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: '/showcase'
  }
});
