import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { Footer, Header } from "./components";

function App() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);
  }, [location]);
 
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
