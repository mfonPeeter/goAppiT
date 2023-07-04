import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

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
    </>
  );
};

export default RootLayout;
