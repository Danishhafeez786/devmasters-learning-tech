import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollToTop from "../components/common/ScrollToTop";
import AdmissionCampaign from "../components/common/AdmissionCampaign";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />

      <Navbar />
      <AdmissionCampaign />
      <main className="flex-1">
        <Outlet />
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default MainLayout;