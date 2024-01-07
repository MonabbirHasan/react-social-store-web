/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { Row, Col, Container, Badge } from "react-bootstrap";
import {
  AdsClick,
  ArrowCircleRight,
  BadgeOutlined,
  CheckCircle,
  MapSharp,
  Person,
  Star,
  StarHalf,
} from "@mui/icons-material";
import "./profiles.css";
import ProductCard from "../../../../clients/components/product_cards/ProductCard";
const Profiles = (props) => {
  const image_obj = [
    {
      img: "https://images.nightcafe.studio/jobs/5DdUMvtbush0toMG9QJZ/5DdUMvtbush0toMG9QJZ--1--oqlr5.jpg?tr=w-1600,c-at_max",
    },
    {
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    },
    {
      img: "https://www.infolopare.com/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_6e0c2e40-d4f7-45ba-938c-6836abdb6af2.jpeg",
    },
    {
      img: "https://www.claytoncountyregister.com/wp-content/uploads/2023/07/mfrack_realistic_photo_of_future_of_AI_programming_07b82711-2341-4b17-a148-42347c9afc9a.jpeg",
    },
  ];
  /*************OPEN PAGE************/
  const OpenDailyTaskPages = () => {
    props.OpenDailyTask();
  };
  const OpenSubscriptionPages = () => {
    props.OpenSubscription();
  };
  return (
    <>
      <div className="seller_profile_page">
        <Container fluid>
          <div className="seller_profile_page_wrapper">
            <Row lg={2} md={2} sm={1}>
              {/*seller_profile_view_left*/}
              <Col lg={3}>
                <div className="seller_profile_page_left">
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
                    <Stack py={2} direction={"row"} spacing={1}>
                      <Button
                        onClick={OpenSubscriptionPages}
                        sx={{
                          color: "green",
                          borderColor: "green",
                          "&:hover": {
                            color: "green",
                            borderColor: "green",
                          },
                        }}
                        variant="outlined"
                        startIcon={<ArrowCircleRight htmlColor="green" />}
                        fullWidth
                        size="small"
                      >
                        buy plan
                      </Button>
                      <Button
                        onClick={OpenDailyTaskPages}
                        sx={{
                          color: "red",
                          borderColor: "red",
                          "&:hover": {
                            color: "red",
                            borderColor: "red",
                          },
                        }}
                        variant="outlined"
                        startIcon={<AdsClick htmlColor="red" />}
                        fullWidth
                        size="small"
                      >
                        watch ad
                      </Button>
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
                <div className="seller_profile_page_right">
                  <Row lg={3}>
                    {Array.from({ length: 6 }, (x) => x + x).map((items) => (
                      <Col key={items}>
                        <div className="seller_gig_item">
                          <ProductCard
                            badges="new"
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

export default Profiles;
