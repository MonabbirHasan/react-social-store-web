/* eslint-disable react/prop-types */
import "./shopcard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Shop, Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ShopCard = ({title, company, price, rating, status }) => {
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
              //  showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              // infinite={true}
              autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {/* {gallery.map((items) => ( */}
              <div>
                <LazyLoadImage
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              </div>
              {/* ))}  */}
            </Carousel>
          </div>
          <h3 className="title">{title}</h3>
          <p className="company_name">{company}</p>
          <div className="shop_card_info">
            <div>
              <p className="price">${price}</p>
              <div className="rating">
                {rating === 1 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 1.5 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 2 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 2.5 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 3 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 3.5 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 4 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarBorder />
                    </span>
                  </>
                ) : rating === 4.5 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                  </>
                ) : rating === 5 ? (
                  <>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                    <span>
                      <Star />
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                    <span>
                      <StarHalf />
                    </span>
                  </>
                )}
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
