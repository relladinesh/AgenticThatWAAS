export default function Template(props: any) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3 capitalize">
          {props.data?.name || 'New Template'}
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          {props.data?.about || 'This is a freshly generated template. Replace this boilerplate with your premium Awwwards-quality design.'}
        </p>
        <div className="inline-flex bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
          Ready for Development
        </div>
      </div>
    </div>
  );
}
