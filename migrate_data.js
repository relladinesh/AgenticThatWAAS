import fs from 'fs';
import path from 'path';
import pkg from 'pg';
const { Client } = pkg;
import Papa from 'papaparse';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure you use the correct password for your local Supabase DB
const client = new Client({
  connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres',
});

async function runMigration() {
  try {
    await client.connect();
    console.log('✅ Connected to Postgres database!');

    // 1. Migrate Users
    const usersPath = path.join(__dirname, 'src', 'data', 'users.json');
    if (fs.existsSync(usersPath)) {
      const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      console.log(`Migrating ${usersData.length} users...`);
      for (const user of usersData) {
        await client.query(
          `INSERT INTO public.users (id, username, password, role, category, business_type) 
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (id) DO NOTHING`,
          [user.id, user.username, user.password, user.role, user.category, user.businessType]
        );
      }
      console.log('✅ Users migrated!');
    }

    // 2. Migrate Business Templates
    const templatesPath = path.join(__dirname, 'data csv', 'business_templates.csv');
    if (fs.existsSync(templatesPath)) {
      const templatesCsv = fs.readFileSync(templatesPath, 'utf8');
      const templatesData = Papa.parse(templatesCsv, { header: true, skipEmptyLines: true }).data;
      console.log(`Migrating ${templatesData.length} templates...`);
      for (const t of templatesData) {
        await client.query(
          `INSERT INTO public.business_templates (id, category, business_type, template_name, template_path, template_code) 
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (id) DO NOTHING`,
          [t.id, t.category, t.business_type, t.template_name, t.template_path, t.template_code]
        );
      }
      console.log('✅ Templates migrated!');
    }

    // 3. Migrate Leads (Optional, uncomment if you want to run it)
    /*
    const leadsPath = path.join(__dirname, 'leads_20260611_134521.csv');
    if (fs.existsSync(leadsPath)) {
      console.log('Migrating leads...');
      const leadsCsv = fs.readFileSync(leadsPath, 'utf8');
      const leadsData = Papa.parse(leadsCsv, { header: true, skipEmptyLines: true }).data;
      for (const l of leadsData) {
        await client.query(
          `INSERT INTO public.leads (lead_id, business_name, category, business_type, city, state, tier, pincode, address, email, website, google_maps_url, has_website, business_status, google_rating, total_reviews, lead_status, priority, notes)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
           ON CONFLICT (lead_id) DO NOTHING`,
          [l['Lead ID'], l['Business Name'], l['Category'], l['Business Type'], l['City'], l['State'], l['Tier'], l['Pincode'], l['Address'], l['Email'], l['Website'], l['Google Maps URL'], l['Has Website'], l['Business Status'], l['Google Rating'] || null, l['Total Reviews'] || null, l['Lead Status'], l['Priority'], l['Notes']]
        );
      }
      console.log('✅ Leads migrated!');
    }
    */

    console.log('🎉 All selected data migrated successfully!');
  } catch (error) {
    console.error('❌ Error during migration:', error);
  } finally {
    await client.end();
  }
}

runMigration();
