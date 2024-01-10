import {
  Avatar,
  Box,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import ProductCard from "../../components/product_cards/ProductCard";
import { Row, Col, Container, Badge } from "react-bootstrap";
import "./seller_profile.css";
import Header from "../../components/common/header/Header";
import "../../../assets/css/responsive.css";
import {
  BadgeOutlined,
  CheckCircle,
  MapSharp,
  Person,
  Star,
  StarHalf,
} from "@mui/icons-material";
const SellerProfile = () => {
  const image_obj = [
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
  ];
  return (
    <>
      <Header />
      <div className="seller_profile">
        <Container>
          <div className="seller_profile_wrapper">
            <Row lg={2} md={2} sm={1}>
              {/*seller_profile_view_left*/}
              <Col lg={3}>
                <div className="seller_profile_view_left">
                  {/*SELLER PROFILE IMAGE SECTION START HERE*/}
                  <Stack justifyContent={""} direction={"row"}>
                    <Typography />
                    <Badge bg="" className="border border-success text-success">
                      online
                    </Badge>
                  </Stack>
                  {/*SELLER PROFILE NAME SECTION START HERE*/}
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      src="https://miro.medium.com/v2/resize:fit:1024/1*Wcf-PjEpHWLnAeW5swF-Iw.png"
                      sx={{
                        width: "150px",
                        height: "150px",
                        border: "3px solid orange",
                        margin: "auto",
                      }}
                    />
                    <Box sx={{ pt: 2 }}>
                      <Typography>Monabbirhasan</Typography>
                      <Typography>Full-Stack Developer</Typography>
                    </Box>
                    <Stack direction={"row"} display={"inline-block"}>
                      <Box display={"flex"}>
                        <Star fontSize="small" htmlColor="orange" />
                        <Star fontSize="small" htmlColor="orange" />
                        <Star fontSize="small" htmlColor="orange" />
                        <Star fontSize="small" htmlColor="orange" />
                        <StarHalf fontSize="small" htmlColor="orange" />
                        <Typography pl={1}>5 (2 reviews)</Typography>
                      </Box>
                    </Stack>
                    <Divider sx={{ pt: 3 }}>Info</Divider>
                    {/*******************************************
                     * SELLER PROFILE INFO SECTION START HERE
                     ********************************************/}
                    <Stack
                      pt={2}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography textTransform={"capitalize"}>
                        <MapSharp /> From
                      </Typography>
                      <Typography>Bangladesh</Typography>
                    </Stack>
                    <Stack
                      pt={2}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography textTransform={"capitalize"}>
                        <Person /> member sinc
                      </Typography>
                      <Typography>20 jan 2027</Typography>
                    </Stack>
                    <Stack
                      pt={2}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography textTransform={"capitalize"}>
                        <BadgeOutlined /> varified
                      </Typography>
                      <Typography>
                        Yes <CheckCircle fontSize="small" htmlColor="green" />{" "}
                      </Typography>
                    </Stack>
                  </Box>
                </div>
              </Col>
              {/*seller_profile_view_right*/}
              <Col lg={9}>
                <div className="seller_profile_view_right">
                  <Row lg={3}>
                    {Array.from({ length: 6 }, (x) => x + x).map((items) => (
                      <Col key={items}>
                        <div className="seller_gig_item">
                          <ProductCard
                            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                            listing_id="OM32343"
                            price={"$" + 233}
                            thumbnail_arr={image_obj}
                            product_views={100}
                            product_categry={1}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
            <Box
              sx={{
                float: "right",
                padding: "5px",
                backgroundColor: "#eee",
                borderRadius: "30px",
                boxShadow: "-2px -2px 5px #f9f9f9,2px 2px 5px #f9f9f9",
                border: "2px solid #fff",
              }}
            >
              <Pagination count={10} />
            </Box>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SellerProfile;
