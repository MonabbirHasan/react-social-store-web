/* eslint-disable no-unused-vars */
import SellerDashboard from "./admin/sellerDashboard/pages/dashboard/DashboardSidebar";
import AdminDashboard from "./admin/adminDashboard/pages/dashboard/DashboardSidebar";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  Home,
  Blogs,
  About,
  Contact,
  Courses,
  Service,
  Webshop,
  Products,
  SmmPanel,
  SignUp,
  SignIn,
  SellerProfileView,
  ServiceRequest,
  ProductDetails,
  ChatRoom,
} from "./clients/pages/index";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import page_not_found_img from "./assets/img/page_not_found.svg";
function App() {
  /***********************************
   * PAGE NOT FOUND PAGE STYLE HERE
   ***********************************/
  const styleSheet = {
    app_style: {
      backgroundImage: page_not_found_img,
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
    },
    app_img_style: {
      width: "100%",
      height: "100vh",
    },
    app_btn: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      margin: "auto",
      display: "inline-block",
      borderRadius: "0",
      background: "orange",
      border: "none",
      textTransform: "capitalize",
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "white",
    },
  };
  /***********************************
   * PAGE NOT FOUND 404 PAGE SHOW
   ***********************************/
  const PageNotFound = () => {
    return (
      <div style={styleSheet.app_style}>
        <LazyLoadImage
          style={styleSheet.app_img_style}
          src={page_not_found_img}
        />
        <Button style={styleSheet.app_btn}>
          <NavLink
            to={"/"}
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            back to home
          </NavLink>
        </Button>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/smm_panel" element={<SmmPanel />} />
        <Route path="/web_shop" element={<Webshop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:slug" element={<ProductDetails />} />
        <Route path="/seller_profile" element={<SellerProfileView />} />
        <Route path="/chat_room" element={<ChatRoom />} />
        <Route path="/service_request" element={<ServiceRequest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
        {/*ADMIN DASHBOARD ROUTE START HERE*/}
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/seller_dashboard" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
