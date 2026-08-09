import { Outlet } from "react-router";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollToTop from "../components/common/ScrollToTop";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default MainLayout;