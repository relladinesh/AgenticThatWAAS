import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Showcase from './pages/Showcase';
import TemplateViewer from './pages/TemplateViewer';
import WebGenerator from './pages/WebGenerator';
import B2BHub from './pages/B2BHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/b2b" element={<B2BHub />} />
        <Route path="/b2b/templates" element={<Showcase />} />
        <Route path="/b2b/webgene" element={<WebGenerator />} />
        <Route path="/templates/:category/:business/:template" element={<TemplateViewer />} />
        <Route path="/templates/:category/:business/:template/:slug" element={<TemplateViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
