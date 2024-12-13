import { Outlet } from "react-router-dom";
import Header from "./components/nav/header";
import { useRef, useState } from "react";
import Footer from "./components/nav/footer";
import ScrollToTop from "./components/utils";

function Layout() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  return (
  <>
    <ScrollToTop />
    <div id="page" ref={parentRef}>
      {
        showHeader &&
          <Header />
      }
      <Outlet context={{parentRef, setShowFooter, setShowHeader}} />
      {
        showFooter &&
          <Footer />
      }
    </div>
  </>
  );
}

export default Layout;