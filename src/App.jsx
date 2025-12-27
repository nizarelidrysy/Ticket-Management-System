import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Support from './pages/Support';

import ScrollToTop from './components/ScrollToTop';
import Stadiums from './pages/Stadiums';
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import { Privacy, Cookies } from './pages/Legal';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stadiums" element={<Stadiums />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/match/:id" element={<MatchDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
