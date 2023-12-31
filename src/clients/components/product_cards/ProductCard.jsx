/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import monetization_icon from "../../../assets/img/monetization.png";
import subscriber_icon from "../../../assets/img/users-icon.png";
import categories_icon from "../../../assets/img/categories.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import language_icon from "../../../assets/img/lang.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import "./product_card.css";
import {
  CheckCircle,
  Facebook,
  FavoriteBorder,
  Instagram,
  Telegram,
  Timer,
  Twitter,
  Visibility,
  YouTube,
} from "@mui/icons-material";
const ProductCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const responsive = {
    superLargeDesktop: {
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
  const view_calculate = (number) => {
    if (number >= 10000000000000) {
      return (number / 1000000000000).toFixed(2) + "tr";
    } else if (number >= 10000000000) {
      return (number / 1000000000).toFixed(2) + "b";
    } else if (number >= 10000000) {
      return (number / 1000000).toFixed(2) + "m";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + "k";
    } else {
      return number.toString();
    }
  };
  return (
    <>
      <div className="product_card_items">
        {/*PRODUCT CATEGORY SECTIONS START HERE*/}
        <Box pb={2} display={"flex"}>
          {props.product_categry === 1 ? (
            <>
              <Avatar sx={{ backgroundColor: "red" }}>
                <YouTube htmlColor="white" />
              </Avatar>
              <Typography
                variant="p"
                mt={1}
                pl={1}
                fontSize={14}
                color={"gray"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                Youtube Channel
              </Typography>
            </>
          ) : props.product_categry === 2 ? (
            <>
              <Avatar sx={{ backgroundColor: "dodgerblue" }}>
                <Facebook htmlColor="white" />
              </Avatar>
              <Typography
                variant="p"
                mt={1}
                pl={1}
                fontSize={14}
                color={"gray"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                facebook page
              </Typography>
            </>
          ) : props.product_categry === 3 ? (
            <>
              <Avatar sx={{ backgroundColor: "#f0f" }}>
                <Instagram htmlColor="white" />
              </Avatar>
              <Typography
                variant="p"
                mt={1}
                pl={1}
                fontSize={14}
                color={"gray"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                instagram profile
              </Typography>
            </>
          ) : props.product_categry === 4 ? (
            <>
              <Avatar sx={{ backgroundColor: "dodgerblue" }}>
                <Twitter htmlColor="white" />
              </Avatar>
              <Typography
                variant="p"
                mt={1}
                pl={1}
                fontSize={14}
                color={"gray"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                twitter profile
              </Typography>
            </>
          ) : props.product_categry === 5 ? (
            <>
              <Avatar sx={{ backgroundColor: "dodgerblue" }}>
                <Telegram htmlColor="white" />
              </Avatar>
              <Typography
                variant="p"
                mt={1}
                pl={1}
                fontSize={14}
                color={"gray"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                telegram channel
              </Typography>
            </>
          ) : (
            "unknown"
          )}
        </Box>
        {/*PRODUCT CAROUSEL SECTIONS START HERE*/}
        <Carousel
          responsive={responsive}
          draggable={false}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          dotListClass="seller_gig_item_slider_dots"
          transitionDuration={8000}
        >
          {props.thumbnail_arr.map((imageData, index) => (
            // eslint-disable-next-line react/jsx-key
            <Box
              sx={{
                height: "200px",
              }}
            >
              <LazyLoadImage
                style={{
                  width: "300px",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "4px",
                }}
                key={index}
                src={imageData.img}
                alt={`Image ${index + 1}`}
              />
            </Box>
          ))}
        </Carousel>

        {/*PRODUCT PRICE SECTIONS START HERE*/}
        <Box
          sx={{
            padding: "5px",
            backgroundColor: "#f8f9fa",
            display: "inline-block",
            borderTopRightRadius: "5px",
            width: "40%",
            textAlign: "center",
            position: "relative",
            top: "-35px",
          }}
        >
          <Typography
            fontSize={16}
            color="white"
            fontWeight={"600"}
            padding="1px"
            backgroundColor="black"
            borderRadius="5px"
          >
            {props.price}
          </Typography>
        </Box>
        {/*PRODUCT VIEW AND LIKE SECTIONS START HERE*/}
        <Stack
          direction={"row"}
          sx={{
            position: "relative",
            float: "right",
            backgroundColor: "#eee",
            padding: "5px",
            borderRadius: "30px",
          }}
          spacing={2}
        >
          <Box display={"flex"}>
            <Visibility
              sx={{ fontSize: "16px", marginRight: "4px" }}
              htmlColor="GrayText"
            />
            <Typography sx={{ fontSize: "12px", textTransform: "capitalize" }}>
              {view_calculate(props.product_views)}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Timer
              sx={{ fontSize: "16px", marginRight: "4px" }}
              htmlColor="GrayText"
            />
            <Typography sx={{ fontSize: "12px", textTransform: "capitalize" }}>
              3 month
            </Typography>
          </Box>
        </Stack>
        {/*PRODUCT DESCRIPTION SECTIONS START HERE*/}
        <Box sx={{ margin: 0, padding: 0 }}>
          <Typography>
            <NavLink
              style={{
                color: "#222",
                textTransform: "capitalize",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
              to={"/seller_profile"}
            >
              {props.title} <mark> {props.listing_id}</mark>
            </NavLink>
          </Typography>
          <Typography
            pt={1}
            textTransform={"capitalize"}
            fontSize={"14px"}
            color={"gray"}
          >
            {props.description}
          </Typography>
        </Box>
        {/*PRODUCT INFO SECTIONS START HERE*/}
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: 2,
            width: "100%",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box
            sx={{
              padding: "2px",
              display: "flex",
            }}
          >
            <Avatar
              src={monetization_icon}
              sx={{
                borderRadius: "0",
                width: "30px",
                height: "30px",
              }}
            />
            <Typography
              pl={1}
              textTransform={"capitalize"}
              fontWeight={"500"}
              color={"grayText"}
              fontSize={"12px"}
            >
              monetization
              <br />
              <b>
                <CheckCircle htmlColor="green" fontSize="" />
                Yes
              </b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "2px",
              display: "flex",
            }}
          >
            <Avatar
              src={subscriber_icon}
              sx={{
                borderRadius: "0",
                width: "30px",
                height: "30px",
              }}
            />
            <Typography
              pl={1}
              textTransform={"capitalize"}
              fontWeight={"500"}
              color={"grayText"}
              fontSize={"12px"}
            >
              subscriber
              <br />
              <b>23.32k</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "2px",
              display: "flex",
            }}
          >
            <Avatar
              src={language_icon}
              sx={{
                borderRadius: "0",
                width: "30px",
                height: "30px",
              }}
            />
            <Typography
              pl={1}
              textTransform={"capitalize"}
              fontWeight={"500"}
              color={"grayText"}
              fontSize={"12px"}
            >
              language
              <br />
              <b>Hindi</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "2px",
              display: "flex",
            }}
          >
            <Avatar
              src={categories_icon}
              sx={{
                borderRadius: "0",
                width: "30px",
                height: "30px",
              }}
            />
            <Typography
              pl={1}
              textTransform={"capitalize"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"grayText"}
            >
              category
              <br />
              <b>animation</b>
            </Typography>
          </Box>
        </Stack>
        {/*PRODUCT BUTTONS SECTIONS START HERE*/}
        <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
          <IconButton>
            <FavoriteBorder htmlColor="red" sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Button
            centerRipple
            fullWidth
            sx={{
              borderRadius: "0",
              borderTopLeftRadius: "30px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
              },
            }}
            size="small"
            variant="outlined"
          >
            order now
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default ProductCard;
