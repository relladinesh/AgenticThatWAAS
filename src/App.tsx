import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Showcase from './pages/Showcase';
import TemplateViewer from './pages/TemplateViewer';
import WebGenerator from './pages/WebGenerator';
import B2BHub from './pages/B2BHub';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

// Simple protected route component
const ProtectedRoute = ({ children, requireAdmin = false }: { children: JSX.Element, requireAdmin?: boolean }) => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (requireAdmin && user?.role !== 'admin') return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route path="/showcase" element={<ProtectedRoute><Showcase /></ProtectedRoute>} />
            <Route path="/showcase/:category/:business" element={<ProtectedRoute><Showcase /></ProtectedRoute>} />
            <Route path="/b2b" element={<ProtectedRoute><B2BHub /></ProtectedRoute>} />
            <Route path="/b2b/templates" element={<ProtectedRoute><Showcase /></ProtectedRoute>} />
            <Route path="/b2b/webgene" element={<ProtectedRoute><WebGenerator /></ProtectedRoute>} />
          </Route>
          
          {/* Client Routes */}
          <Route path="/templates/:category/:business/:template" element={<ProtectedRoute><TemplateViewer /></ProtectedRoute>} />
          <Route path="/templates/:category/:business/:template/:slug" element={<ProtectedRoute><TemplateViewer /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
