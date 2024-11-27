import { Outlet } from "react-router-dom";
import Header from "./components/nav/header";
import { useRef } from "react";
import Footer from "./components/nav/footer";
import ScrollToTop from "./components/utils";

function Layout() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
  <>
    <ScrollToTop />
    <div id="page" ref={parentRef}>
      <Header />
      <Outlet context={{parentRef}} />
      <Footer />
    </div>
  </>
  );
}

export default Layout;