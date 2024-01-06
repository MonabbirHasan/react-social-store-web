/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ForumRounded, LinkSharp } from "@mui/icons-material";
import Header from "../../components/common/header/Header";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./product_details.css";
import FileSaver, { saveAs } from "file-saver";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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

const ProductDetails = () => {
  const [value, setValue] = useState("");
  const [ImgSrc, setImgSrc] = useState("");
  const [ByerEmail, setBuyerEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value === value ? "" : event.target.value);
  };
  /*******************************************
   * SHOW IMAGE LIGHTBOX MODAL CONTROLL HERE
   *******************************************/
  const [ShowImageLightBoxModal, setShowImageLightBoxModal] = useState(false);
  const handleCloseImageLightBoxModal = () => setShowImageLightBoxModal(false);
  const handleShowImageLightBoxModal = (srcUrl) => {
    setShowImageLightBoxModal(true);
    setImgSrc(srcUrl);
  };
  /*******************************************
   * SHOW CREATE DEALS MODAL CONTROLL HERE
   *******************************************/
  const [ShowDealsModal, setShowDealsModal] = useState(false);
  const handleCloseDealsModal = () => setShowDealsModal(false);
  const handleShowDealsModal = () => setShowDealsModal(true);
  /*******************************************
   * CHANNEL DETAILS TABS CONTROLL HERE
   *******************************************/
  const [TabsValue, setTabsValue] = useState(1);
  const handleChangeTabs = (event, newValue) => {
    setTabsValue(newValue);
  };
  /******************************
   *IMAGE LIGHTBOX CONTROLL HERE
   ******************************/
  const GalleryImg = [
    {
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/615c5c8e2875c.jpg",
    },
    {
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/615c5c8e2875c.jpg",
    },
    {
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/615c5c8e2875c.jpg",
    },
    {
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/615c5c8e2875c.jpg",
    },
    {
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2021-10/615c5c8e2875c.jpg",
    },
  ];
  /************************************
   * DOWNLOAD GALLERY IMAGE
   ************************************/
  const DownloadImage = async (downloadSrc) => {
    try {
      await FileSaver.saveAs(downloadSrc, "gallery.png");
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };
  /**************************
   * PAYMENT METHOD OBJECT
   **************************/
  const payment_methods = [
    {
      name: "bank_transfer",
      img: "https://accs-market.com/images/payments/bank_transfer.png",
    },
    {
      name: "payoneer",
      img: "https://accs-market.com/images/payments/payoneer.jpeg",
    },
    {
      name: "stripe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      name: "google-pay",
      img: "https://accs-market.com/images/payments/google-pay.png",
    },
    {
      name: "paypal",
      img: "https://accs-market.com/images/payments/paypal.png",
    },
    {
      name: "bkash",
      img: "https://cdn.dribbble.com/userupload/9943216/file/original-72c6f4a3d5d35b03ee35a423e1f93263.jpg?resize=400x0",
    },
    {
      name: "nagad",
      img: "https://media.licdn.com/dms/image/D5612AQEpXOhd5XXcRQ/article-cover_image-shrink_600_2000/0/1687973681207?e=2147483647&v=beta&t=bq94nLOyxpR7SxITzwG1Ya9uWBErTyKPTCWkVAjdHJg",
    },
    {
      name: "paytm",
      img: "https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg",
    },
    {
      name: "bitcoin",
      img: "https://accs-market.com/images/payments/bitcoin.png",
    },
    {
      name: "web money",
      img: "https://1000logos.net/wp-content/uploads/2023/03/WebMoney-logo.png",
    },
    {
      name: "other",
      img: "https://accs-market.com/images/payments/other.jpg",
    },
    {
      name: "Skrill",
      img: "https://i.brecorder.com/primary/2022/05/629549f637bc4.jpg",
    },
  ];
  /****************************
   * VERIFY BUYER EMAIL FIELD
   ****************************/
  const VarifyEmail = (e) => {
    setBuyerEmail(e.target.value);
    // Basic email format validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(e.target.value));
  };
  return (
    <>
      <Header />
      <div className="product_details">
        <Container fluid>
          <div className="product_details_page_wrapper">
            <Box className="channel_Carousel">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={900}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                  <div key={items}>
                    <LazyLoadImage
                      style={{
                        width: "95vw",
                        height: "auto",
                        marginRight: "-18px",
                      }}
                      src="https://www.imec-int.com/_next/image?url=%2Fsites%2Fdefault%2Ffiles%2Fimported%2Fartificial-intelligence_1.jpg&w=3840&q=75"
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
            {/*********************************
             * PRODUCT DETAIS TABS START HERE
             **********************************/}
            <div className="detail_tabs">
              <Tabs
                value={TabsValue}
                onChange={handleChangeTabs}
                aria-label="wrapped label tabs example"
              >
                <Tab value={1} label="About" />
                <Tab value={2} label="Gallery" />
              </Tabs>
            </div>
            {/**************************************
             * PRODUCT DETAIS TABS PANEL START HERE
             ***************************************/}
            <div className="detail_tabs_panel">
              {TabsValue === 1 ? (
                <section className="about_tabs">
                  <Row>
                    <Col lg={8} md={12} sm={12}>
                      <div className="product_details_left">
                        <Box>
                          <Typography variant="h6">
                            Monetized YouTube Channel for Sale - @rakesh
                          </Typography>
                          <Typography variant="p">
                            Sure, heres a sample description you might use:
                            Title: Monetized YouTube Channel for Sale - @rakesh
                            Are you ready to step into a thriving YouTube
                            community? Look no further! @rakesh is a gem waiting
                            for a passionate new owner. With a solid foundation,
                            engaging content, and an established audience, this
                            channel is ripe for someone seeking a turnkey
                            solution to enter the world of content creation.
                          </Typography>
                          <Typography
                            variant="h6"
                            fontSize={"14"}
                            fontWeight={"500"}
                            pt={1}
                          >
                            About Channel:
                          </Typography>
                          <ul>
                            <li>
                              Niche: [Describe the niche/topic of the channel]
                            </li>
                            <li>
                              Subscribers: [Number of subscribers] Watch Time:
                            </li>
                            <li>
                              [Total watch time] Monetization Status: Already
                            </li>
                            <li>
                              monetized, with potential for revenue growth
                              Content
                            </li>
                            <li>
                              Quality: High-quality videos with [mention any
                              special
                            </li>
                            <li>
                              attributes - unique style, great editing, etc.]
                            </li>
                          </ul>
                          <Typography
                            variant="h6"
                            fontSize={"14"}
                            fontWeight={"500"}
                            pt={1}
                          >
                            Whats Included:
                          </Typography>
                          <ul>
                            <li>Extensive library of [number] videos</li>
                            <li>Engaged and active subscriber base</li>
                            <li>
                              Established brand identity and channel aesthetic
                            </li>
                            <li>Monetization already set up</li>
                          </ul>
                          <Typography
                            variant="h6"
                            fontSize={"14"}
                            fontWeight={"500"}
                            pt={1}
                          >
                            Why Buy this Channel?
                          </Typography>
                          <Typography>
                            Purchasing this channel means stepping into a
                            pre-built community with incredible potential.
                            Whether youre a content creator looking to expand
                            your reach or an entrepreneur seeking an established
                            platform for marketing purposes, [Channel Name]
                            offers immense value
                          </Typography>
                        </Box>
                      </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                      <div className="product_details_right">
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>Status</Typography>
                          <Typography>Available</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>channel link</Typography>
                          <Typography>https://youtube.com</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>community guidences</Typography>
                          <Typography>yes</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>copywright</Typography>
                          <Typography>no</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>category</Typography>
                          <Typography>movies</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>wrring</Typography>
                          <Typography>no</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>monetized</Typography>
                          <Typography>yes</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>monthly income</Typography>
                          <Typography>$5423</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>Channel</Typography>
                          <Typography>
                            <IconButton>
                              <LinkSharp />
                            </IconButton>
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>price</Typography>
                          <Typography>$323</Typography>
                        </Stack>
                        {/*********************************
                         * PRODUCT CHATS BUTTON START HERE
                         **********************************/}
                        <Stack
                          my={3}
                          direction={"row"}
                          alignItems={"end"}
                          justifyContent={"end"}
                        >
                          <Fab
                            variant="extended"
                            size="large"
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "orange",
                                color: "white",
                              },
                            }}
                            onClick={handleShowDealsModal}
                          >
                            <ForumRounded
                              fontSize="large"
                              sx={{ mr: 1 }}
                              htmlColor="white"
                            />
                            <Typography>Create A deal</Typography>
                          </Fab>
                        </Stack>
                      </div>
                    </Col>
                  </Row>
                </section>
              ) : TabsValue === 2 ? (
                <section className="gallery_tabs">
                  <Row lg={6}>
                    {GalleryImg.map((items) => (
                      <Col key={items}>
                        <Button
                          onClick={() =>
                            handleShowImageLightBoxModal(items.img)
                          }
                          variant="contained"
                          sx={{
                            padding: "10px",
                            background: "#ef",
                            margin: "10px 0",
                            borderRadius: "5px",
                          }}
                        >
                          <LazyLoadImage
                            style={{ width: "100%", height: "auto" }}
                            src={items.img}
                          />
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </section>
              ) : (
                "page not found!"
              )}
            </div>
            {/*********************************
             * PRODUCT DETAIS TABS END HERE
             **********************************/}
          </div>
        </Container>
      </div>
      {/*********************************
       * IMAGE LIGHTBOX MODAL START HERE
       **********************************/}
      <Modal
        size="lg"
        show={ShowImageLightBoxModal}
        onHide={handleCloseImageLightBoxModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Channel Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LazyLoadImage
            style={{
              width: "100%",
              height: "auto",
            }}
            src={ImgSrc}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outlined"
            color="error"
            onClick={handleCloseImageLightBoxModal}
          >
            close
          </Button>
          <Divider sx={{ px: 1 }} />
          <Button variant="contained" onClick={() => DownloadImage(ImgSrc)}>
            Download Image
          </Button>
        </Modal.Footer>
      </Modal>
      {/*********************************
       * DEALS MODAL START HERE
       **********************************/}
      <Modal
        centered
        size="lg"
        show={ShowDealsModal}
        onHide={handleCloseDealsModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography
              fontSize={"20px"}
              textTransform={"uppercase"}
              fontWeight={"500"}
              color={"gray"}
            >
              Create a deal
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#eee",
          }}
        >
          <Box>
            <Typography pb={3} fontSize={"14px"} fontWeight={"500"}>
              Select payment methods you can use to pay the seller. The more
              options you choose, the greater the chance that one of them will
              suit the seller and he will agree to the deal.
            </Typography>
            {/**********************************
             * PYAMENT METHODS SELECTION HERE
             ***********************************/}
            <Row lg={4}>
              {payment_methods.map((items, index) => (
                <Col key={items}>
                  <Button
                    style={{
                      background: "#f8f9fa",
                      boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      border: "3px solid #fff",
                      margin: "5px 0",
                      borderRadius: "10px",
                      width: "180px",
                      padding: "5px 10px",
                    }}
                  >
                    <Box>
                      <Avatar
                        src={items.img}
                        sx={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "60px",
                        }}
                      />
                    </Box>
                    <Stack
                      direction={"row"}
                      width={"100%"}
                      justifyContent={"space-between"}
                      style={{
                        position: "absolute",
                      }}
                    >
                      <FormControl
                        sx={{ pl: 1 }}
                        component="fieldset"
                        fullWidth
                      >
                        <RadioGroup value={value} onChange={handleChange}>
                          <FormControlLabel
                            value={items.name + index}
                            control={<Radio />}
                            label={
                              <Typography
                                fontSize={"10px"}
                                textTransform={"capitalize"}
                                color={"gray"}
                                fontWeight={"600"}
                              >
                                {/* {items.name} */}
                              </Typography>
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Stack>
                  </Button>
                </Col>
              ))}
            </Row>
            {/********************************************
             * TERMS AND CONDITIONS AND STEPS START HERE
             *********************************************/}
            <Box style={{ marginTop: "5px" }}>
              <Typography
                style={{ marginTop: "5px", padding: "5px" }}
                variant="p"
                fontWeight={"500"}
              >
                Transaction steps when using the escrow service:
              </Typography>
              <ul style={{ listStyle: "decimal" }}>
                <li>The buyer pays a 4-8% ($3 minimum) service fee.</li>
                <li>The seller designates the escrow agent as manager.</li>
                <li>
                  After 7 days, the seller assigns primary ownership rights to
                  the escrow agent (7 days is the minimum amount of time
                  required in order to assign a new primary owner in the control
                  panel.)
                </li>
                <li>
                  The escrow agent verifies everything, removes the other
                  managers, and notifies the buyer to pay the seller.
                </li>
                <li>The buyer pays the seller.</li>
                <li>
                  After the seller's confirmation, the escrow agent assigns
                  ownership rights to the buyer.
                </li>
              </ul>
              <Typography
                color="red"
                textTransform={"capitalize"}
                fontSize={"14px"}
              >
                In order to guarantee maximum security during the transaction,
                all messages must be sent through the website using the chat
                system where the transaction is completed, so that in case of
                any issues, the arbitration service can verify everything.
              </Typography>
            </Box>
            {/********************************************
             * TERMS AND CONDITIONS AND STEPS END HERE
             *********************************************/}
            <Stack direction={"row"} pt={2}>
              <Typography>
                Email address associated with the account which should be
                designated as the owner
              </Typography>
              <FormControl fullWidth>
                <TextField
                  variant="filled"
                  size="small"
                  value={ByerEmail}
                  label="Enter Your Email!"
                  onChange={VarifyEmail}
                />
                {isValidEmail === true ? (
                  ""
                ) : (
                  <Alert variant="error">Email not valid</Alert>
                )}
              </FormControl>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
              <Box>
                <Typography fontSize={"16px"} color={"green"}>
                  You have a discount on this deal!
                </Typography>
                <Typography fontSize={"16px"}>
                  6% instead of 8% for the escrow service
                </Typography>
              </Box>
              <Button
                onClick={() => navigate("/chat_room", { replace: true })}
                sx={{ mt: 1 }}
                variant="contained"
              >
                create a deals
              </Button>
            </Stack>
          </Box>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          {/* <Button
            variant="outlined"
            color="error"
            onClick={handleCloseDealsModal}
          >
            Cancel
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetails;
