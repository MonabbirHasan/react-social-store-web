/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  IconButton,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import { CheckCircleOutlineRounded, SearchRounded } from "@mui/icons-material";
import smartphone_social_media from "../../../assets/img/smartphone-social-media.png";
import writing_translation from "../../../assets/img/writing-translation.svg";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import online_marketing from "../../../assets/img/online-marketing.svg";
import graphics_design from "../../../assets/img/graphics-design.svg";
import ClientReview from "../../components/ClientsSay/ClientReview";
import PaymentSupportImg from "../../../assets/img/payment_3d1.png";
import programmingimg from "../../../assets/img/programming.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../components/Page_title/PageTitle";
import Header from "../../components/common/header/Header";
import secureimg from "../../../assets/img/secure.jpg";
import Teams from "../../components/Teams/Teams";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import "./home.css";
import Footer from "../../components/common/footer/Footer";
const Home = () => {
  /************************************************
   * REACT MULTISLIDER JSON DATA CODE HERE
   * **********************************************/
  const SliderData = [
    {
      id: 1,
      title: "Build Your Brand",
      subtitle: "Logo Design",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png",
    },
    {
      id: 2,
      title: "reach more customers",
      subtitle: "social media",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png",
    },
    {
      id: 3,
      title: "Design your website",
      subtitle: "Tech stack",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png",
    },
    {
      id: 4,
      title: "unlock growth online",
      subtitle: "SEO",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png",
    },
    {
      id: 5,
      title: "Ignite Your Online Presence",
      subtitle: "facebook",
      img: "https://img.freepik.com/free-vector/flat-mobile-with-facebook-notifications_23-2147826329.jpg?w=740&t=st=1699935635~exp=1699936235~hmac=1e818abfa3a0df1f9b76434426fa377788a484d9631c3a8c3c055c04d9a2e8f1",
    },
    {
      id: 6,
      title: "Mastering the Art of Online Growth",
      subtitle: "Youtube",
      img: "https://img.freepik.com/free-vector/youtube-player-device-with-flat-design_23-2147844065.jpg?w=740&t=st=1699935815~exp=1699936415~hmac=6d1c4f75c6d89ec73b10953a2e466207377d0d9260ad2fd0aa28923c24bb9628",
    },
    {
      id: 7,
      title: "Skyrocket Your Presence",
      subtitle: "instagram",
      img: "https://img.freepik.com/free-vector/colorful-icons-set-design_79603-1268.jpg?w=740&t=st=1699935846~exp=1699936446~hmac=174d107cae2db65d6b4d176fe36eee8596c8f39c9a2d44e18a255d0a290003cb",
    },
  ];
  /************************************************
   * REACT MULTISLIDER RESPONSIVE CODE HERE
   * **********************************************/
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />
      <section className="homepage">
        <div className="banner" style={{ zIndex: "1", position: "relative" }}>
          <p
            className="banner_ver_text"
            style={{
              float: "right",
              writingMode: "vertical-lr",
              padding: "20px 0",
            }}
          >
            welcome to our fuccking marketplace
          </p>
          <div className="banner-left">
            <div className="banner_headline">
              <h1>Find the right Social service, right away</h1>
              <p>
                welcome to account omnifluxs.com we are here to help you to grow
                your business, we are most trusted account seller
              </p>
            </div>
            <div className="banner_button_box">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search for any service..."
                  aria-label="Search for any service..."
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "#19A463" }}
                >
                  <IconButton>
                    <SearchRounded htmlColor="white" />
                  </IconButton>
                </InputGroup.Text>
              </InputGroup>
              <div className="banner_left_btn_box">
                <Box>
                  <Button variant="dark">YouTube</Button>
                  <Button variant="dark">Facebook</Button>
                  <Button variant="dark">Instagram</Button>
                  <Button variant="dark">Website Design</Button>
                  <Button variant="dark">LogoDesign</Button>
                  <Button variant="dark">Al Services</Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_content">
        <Container>
          {/*******************************************
           * HOME PAGE SERVICE SECTION START HERE
           ********************************************/}
          <PageTitle title={"Popular services"} />
          <section className="services_section mt-5">
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
              {SliderData.map((items) => (
                <div className="multi_slider_servie" key={items.id}>
                  <div
                    style={{
                      position: "absolute",
                      padding: "10px",
                    }}
                  >
                    <NavLink>
                      <Typography
                        textTransform={"capitalize"}
                        fontSize={"16px"}
                        color={"white"}
                        className="title"
                      >
                        {items.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        textTransform={"capitalize"}
                        fontSize={"1.2rem"}
                        color={"white"}
                        className="subtitle"
                      >
                        {items.subtitle}
                      </Typography>
                    </NavLink>
                  </div>
                  <LazyLoadImage src={items.img} />
                </div>
              ))}
            </Carousel>
          </section>
          {/**************************************
           * BEST PARTS SECTION START HERE
           ***************************************/}
          <section className="The_best_part">
            <div className="best_part_left col-md-7">
              <Typography
                variant="h4"
                fontSize={28}
                padding={1}
                paddingBottom={3}
                textTransform={"capitalize"}
              >
                The best part? Everything.
              </Typography>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography
                  padding={0}
                  fontSize={20}
                  textTransform={"capitalize"}
                >
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Stick to your budget
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Get quality work done quickly
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Pay when youre happy
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Count on 24/7 support
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </Typography>
              </Box>
            </div>
            <div className="best_part_right col-md-5">
              <video
                autoPlay={true}
                src="https://v1.cdnpk.net/videvo_files/video/free/video0541/large_watermarked/_import_6316e797b59450.34484310_FPpreview.mp4"
              ></video>
            </div>
          </section>
          {/****************************************
           *ALL SERVICE SECTION START HERE
           *****************************************/}
          <section className="home_page_all_services mt-5">
            <PageTitle title={"You need it, we've got it"} />
            <div className="service_grid">
              <div className="service_item">
                <LazyLoadImage src={graphics_design} />
                <Typography mt={3}>Graphics & Design</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={online_marketing} />
                <Typography mt={3}>Digital Marketing</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={writing_translation} />
                <Typography mt={3}>Writing & Translation</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/color/48/programming--v1.png"}
                />
                <Typography mt={3}>Programming & Tech</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/cute-clipart/64/facebook-new.png"
                  }
                />
                <Typography mt={3}>facebook</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/clouds/100/youtube-play.png"}
                />
                <Typography mt={3}>youtube</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/bubbles/50/instagram-new--v2.png"
                  }
                />
                <Typography mt={3}>instagram</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/cute-clipart/64/twitter.png"}
                />
                <Typography mt={3}>twitter</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-filled-outline-design-circle/64/external-Website-Design-digital-service-filled-outline-design-circle.png"
                  }
                />
                <Typography mt={3}>website design</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-avoca-kerismaker/64/external-Mobile-apps-business-avoca-kerismaker.png"
                  }
                />
                <Typography mt={3}>mobile apps</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={programmingimg} />
                <Typography mt={3}>youtube monetization</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-handshake-achievements-flaticons-flat-flat-icons-2.png"
                  }
                />
                <Typography mt={3}>business</Typography>
              </div>
            </div>
          </section>
          {/**************************************
           *SOLUTION SECTION START HERE
           ***************************************/}
          <section className="solution_section">
            <div className="row">
              <div className="solution_left col-md-7">
                <Typography variant="h4" color={"white"} fontSize={28} px={2}>
                  Omnifluxs -{" "}
                  <span style={{ fontSize: "14px" }}>Business Solution</span>
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  pt={5}
                  pb={1}
                  px={1}
                  fontWeight={"800"}
                  fontSize={"2rem"}
                  textTransform={"capitalize"}
                >
                  Advanced solutions and professional talent for businesses
                </Typography>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>OmniFluxs Paid Plan</span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    Access top freelancers and professional business tools for
                    any project
                  </Typography>
                </Box>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>OmniFluxs Earning</span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    Make Your Profile start Earning
                  </Typography>
                </Box>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>
                      OmniFluxs Lifetime Support
                    </span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    we ensure you that we are always here to help you
                  </Typography>
                </Box>
              </div>
              <div className="solution_right col-md-5">
                <LazyLoadImage src={smartphone_social_media} />
              </div>
            </div>
          </section>
          {/***************************************
           *BUY SOMTHING SECTION START HERE
           ****************************************/}
          <section className="buy_somthing_section mt-5">
            <div className="row">
              <div className="buy_somthing_left col-md-8">
                <Typography variant="h4" color={"white"} fontSize={28} px={2}>
                  Omnifluxs -{" "}
                  <span style={{ fontSize: "14px" }}>Service Solution</span>
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  pt={5}
                  pb={1}
                  px={1}
                  fontWeight={"800"}
                  fontSize={"2rem"}
                  textTransform={"capitalize"}
                >
                  Buy an incredible Service
                </Typography>
                <i>
                  <Typography
                    pl={1}
                    color="white"
                    fontWeight={"400"}
                    fontSize={"1.5rem"}
                    textTransform={"capitalize"}
                  >
                    in a minutes
                  </Typography>
                </i>
                <MuiButton
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "black" },
                    ml: 1,
                    mt: 3,
                  }}
                >
                  get start
                </MuiButton>
              </div>
              <div className="buy_somthing_right col-md-4">
                <LazyLoadImage
                  src={
                    "https://img.freepik.com/premium-vector/subscribe-youtube-channel-banner-with-blurry-glass-3d-background_92086-335.jpg?size=626&ext=jpg&uid=R72400773&ga=GA1.1.2086792324.1699935592&semt=sph"
                  }
                />
              </div>
            </div>
          </section>
          {/***************************************
           *CLIENT REVIEW SECTION START HERE
           ****************************************/}
          <section className="client_review">
            <ClientReview />
          </section>
          {/***************************************
           *PAYMENT SUPPORT SECTION START HERE
           ****************************************/}
          <section className="PaymentSupport">
            <div className="payment_wrapper">
              <Row>
                <Col lg={8}>
                  <h3>We ensure almost all payment method are supported</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </Col>
                <Col lg={4}>
                  <LazyLoadImage
                    alt={"our payment supports"}
                    src={PaymentSupportImg}
                  />
                </Col>
              </Row>
            </div>
          </section>
          {/***************************************
           *TEAMS SECTION START HERE
           ****************************************/}
          <section className="teams">
            <Teams />
          </section>
          {/***************************************
           *SECURITY SECTION START HERE
           ****************************************/}
          <section className="secure">
            <div className="secure_wrapper">
              <Row>
                <Col lg={4}>
                  <LazyLoadImage alt={"our security"} src={secureimg} />
                </Col>
                <Col lg={8}>
                  <h3>our secure transection system for you</h3>
                  <p>
                    long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like)
                  </p>
                  <p>
                    long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like)
                  </p>
                </Col>
              </Row>
            </div>
          </section>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
