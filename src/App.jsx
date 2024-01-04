/* eslint-disable no-unused-vars */
import SellerDashboard from "./admin/sellerDashboard/pages/dashboard/DashboardSidebar";
import AdminDashboard from "./admin/adminDashboard/pages/dashboard/DashboardSidebar";
// import SellerProfile from "./clients/pages/seller_profile/SellerProfile";
// import Signup from "./clients/authentication/signup/Signup";
// import SmmPanel from "./clients/pages/smm_panel/SmmPanel";
// import Products from "./clients/pages/products/Products";
// import WebShop from "./clients/pages/web_shop/WebShop";
// import Service from "./clients/pages/service/Service";
// import Courses from "./clients/pages/courses/Courses";
// import Contact from "./clients/pages/contact/Contact";
// import About from "./clients/pages/about/About";
// import Blogs from "./clients/pages/blogs/Blogs";
// import Home from "./clients/pages/home/Home";
import { Routes, Route } from "react-router-dom";
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
  ProductDetails
} from "./clients/pages/index";
function App() {
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
        <Route path="/service_request" element={<ServiceRequest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        {/*ADMIN DASHBOARD ROUTE START HERE*/}
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/seller_dashboard" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
