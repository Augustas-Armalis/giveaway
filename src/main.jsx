import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import HomePage from './index.jsx';
import Terms from './assets/pages/Terms.jsx';
import Privacy from './assets/pages/Privacy.jsx';
import Newsletter from './assets/pages/Newsletter.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import Giveaway1 from './assets/pages/giveaways/Giveaway1.jsx';
import Giveaway2 from './assets/pages/giveaways/Giveaway2.jsx';
import Giveaway3 from './assets/pages/giveaways/Giveaway3.jsx';
import HereIsWhere from './assets/pages/HereIsWhere.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/giveaways/giveaway1" element={<Giveaway1 />} />
          <Route path="/giveaways/giveaway2" element={<Giveaway2 />} />
          <Route path="/giveaways/giveaway3" element={<Giveaway3 />} />
          <Route path="/hereiswhere" element={<HereIsWhere />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);