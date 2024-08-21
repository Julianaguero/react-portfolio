import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { Footer, Header } from "./components";
import { MotionConfig } from "framer-motion";
import isValidProp from "@emotion/is-prop-valid";

function App() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [location]);

  return (
    <div className="w-full">
      <MotionConfig isValidProp={isValidProp}>
        <Header />
        <Outlet />
        <Footer />
      </MotionConfig>
    </div>
  );
}

export default App;
