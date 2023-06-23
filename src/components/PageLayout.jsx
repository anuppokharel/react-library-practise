import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Login from "../pages/Login";

const PageLayout = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : <Header />}
      {location.pathname === "/" ? <Login /> : null}
      <Outlet />
      <ToastContainer
        hideProgressBar="true"
        position="bottom-left"
        autoClose={2500}
        pauseOnHover
        theme="light"
      />
      {location.pathname === "/" ? null : <Footer />}
    </>
  );
};

export default PageLayout;
