import './App.css';
import Home from './pages/Home/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NotFound from './pages/404/NotFound';
import Dashboard from './dashboard/Dashboard/Dashboard/Dashboard';
import HeroSection from './dashboard/Admin/HeroSection/HeroSection';
import AkaCoin from './dashboard/Admin/AkaCoin/AkaCoin';
import Guide from './dashboard/Admin/Guide/Guide';
import UpdateWallet from './dashboard/Admin/Wallet/UpdateWallet';
import CreateWallet from './dashboard/Admin/Wallet/CreateWallet';
import Banner from './dashboard/Admin/Banner/Banner';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/akacoin-admin" element={<Dashboard />}>
            <Route path="hero-section" element={<HeroSection />} />
            <Route path="akacoin-section" element={<AkaCoin />} />
            <Route path="guide-section" element={<Guide />} />
            <Route path="update-wallet" element={<UpdateWallet />} />
            <Route path="create-wallet" element={<CreateWallet />} />
            <Route path="banner-section" element={<Banner />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;