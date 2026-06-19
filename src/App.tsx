import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Showcase from './pages/Showcase';
import TemplateViewer from './pages/TemplateViewer';
import B2B from './pages/B2B';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/templates/:category/:business/:template" element={<TemplateViewer />} />
        <Route path="/templates/:category/:business/:template/:slug" element={<TemplateViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
