/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Shop } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import Ratings from "./Ratings";
import "./shopcard.css";
const ShopCard = ({ title, company, price, rating, status, gallery }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="shopcard">
      <div className="shop_card_box">
        <div className="shop_card">
          {status == 1 ? (
            <p
              className="text-capitalize text-white badge card_badge"
              style={{ backgroundColor: "#00a33c" }}
            >
              Available
            </p>
          ) : (
            <p
              className="text-capitalize text-white badge card_badge"
              style={{ backgroundColor: "red" }}
            >
              sold out
            </p>
          )}
          <div className="shop_slider">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={8000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={8000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {gallery.map((image, index) => (
                <LazyLoadImage
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: "275px", height: "200px", margin: "5px" }}
                />
              ))}
            </Carousel>
          </div>
          <h3 className="title">{title}</h3>
          <p className="company_name">{company}</p>
          <div className="shop_card_info">
            <div>
              <p className="price">${price}</p>
              <div className="rating">
                {<Ratings rating={rating} />}
                {/* <span>{rating}</span> */}
              </div>
            </div>
            <div>
              <span className="shop_bag">
                <Shop />
              </span>
              <span className="shop_btn">
                <Button variant="contained">Live Preview</Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
