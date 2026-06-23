import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TemplateViewer() {
  const { category, business, template, slug } = useParams();

  // The template URL parameter now contains the template code (e.g., 'l-t1')
  // We need to extract the actual file name (e.g., 't1') to import the correct component
  const actualTemplateFile = template ? template.split('-').pop() : 't1';

  const TemplateComponent = lazy(() =>
    import(`../templates/${category}/${business}/${actualTemplateFile}.tsx`)
      .catch((e) => {
        console.error("Failed to load template:", e);
        return { 
          default: () => {
            React.useEffect(() => {
              alert("Template is still building on Vercel! Please wait 1-2 minutes and refresh the page.");
            }, []);
            return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 p-8 text-center flex-col gap-4">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Template Not Ready</h2>
              <p>Path: <code>/templates/{category}/{business}/{template}</code></p>
              <div className="text-sm max-w-md bg-amber-50 text-amber-800 p-4 rounded-xl border border-amber-200 mt-2">
                <p className="font-semibold mb-1">Still Building?</p>
                <p>If you just uploaded this to the Admin Dashboard, Vercel needs 1-2 minutes to compile it into the live website.</p>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
              >
                Refresh Page
              </button>
              
              <div className="mt-8 border-t pt-8">
                <p className="text-sm text-slate-500 mb-4">Or is this an HTML Template?</p>
                <a 
                  href={`/templates/${category}/${business}/${actualTemplateFile}/index.html`}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-medium transition-colors inline-block"
                >
                  View as HTML
                </a>
              </div>
            </div>
            );
          }
        };
      })
  );

  const fallbackData = {
    name: business ? business.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Premium Business Demo",
    tagline: `Premium ${category ? category.replace(/-/g, ' ') : 'business'} solutions designed for excellence.`,
    about: undefined,
    services: undefined,
    courses: undefined,
    specialties: undefined,
    email: "contact@business.com",
    phone: "+1 (555) 019-2834",
    address: "100 Main Street, Demo City, ST 12345",
    designation: category ? category.replace(/-/g, ' ') : "General",
    slug: business || "premium-business",
    specialization: "General Practice",
    experience: "15 Years",
    testimonials: undefined,
    bestSellers: undefined,
    openingHours: "Mon-Fri: 9am - 6pm",
    instructors: undefined,
    successRate: "99%",
    team: undefined
  };

  let templateData = fallbackData;
  if (slug) {
    try {
      const stored = localStorage.getItem(`preview_${slug}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        templateData = {
           ...fallbackData,
           name: parsed.businessName || fallbackData.name,
           designation: parsed.category || fallbackData.designation,
           specialization: parsed.businessType || fallbackData.specialization,
           phone: parsed.phone || fallbackData.phone,
           address: parsed.location || fallbackData.address,
           website: parsed.website || fallbackData.website,
           email: parsed.email || fallbackData.email,
           about: parsed.about || undefined,
           slug: parsed.slug || fallbackData.slug
        };
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-500">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="font-medium">Loading Template...</p>
        </div>
      </div>
    }>
      <div id="template-loaded-marker">
        <TemplateComponent data={templateData} />
      </div>
    </Suspense>
  );
}
