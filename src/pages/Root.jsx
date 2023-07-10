import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer";

const RootLayout = () => {
  const [stickyNav, setStickyNav] = useState(false);

  const stickyNavHandler = () => {
    if (window.scrollY >= 610) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavHandler);

  return (
    <>
      <Navbar stickyNav={stickyNav} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
