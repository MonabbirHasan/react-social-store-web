import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../components/Page_title/PageTitle";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import serviceimg from "../../../assets/img/service.png";
import { serviceData } from "../../../utils/serviceData";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../../../assets/css/responsive.css";
import "./service.css";
const Service = () => {
  return (
    <>
      <Header />
      <div className="service_page">
        <div className="service_banner">
          <LazyLoadImage alt={"contact us"} src={serviceimg} />
        </div>
        <div className="container">
          <div className="service_wrapper">
            <PageTitle title={"Our services"} />
            <div className="service_item_box">
              {serviceData.map((item) => (
                <NavLink key={item.id} to={"/service_request"}>
                  <div className="service_item">
                    <span>
                      <Image width="40" height="40" src={item.icon} />
                    </span>
                    <h3 className="service_title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
