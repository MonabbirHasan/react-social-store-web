/* eslint-disable no-unused-vars */
import {
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./referring.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/css/responsive.css";
import {
  CopyAll,
  Facebook,
  LinkedIn,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
const Referring = () => {
  const CopyRefferCode = "https://omnifluxs.com/rakeshgurjar?reffer=324243";
  const notify = (message) => toast(message);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CopyRefferCode);
      notify("Code copied successFully");
    } catch (error) {
      console.error("Error copying text: ", error);
      alert("Failed to copy text to clipboard.");
    }
  };
  /**************************************
   * SHARE REFFER LINK ON SOCILA MEDIA
   **************************************/
  const handleShare = async (imgUrl) => {
    // var shareLink = mainUrl + encodeURIComponent('https://www.omnifluxs.com/pe/YP7XZ4' + id);

    var fbShareLink =
      "" +
      "&picture=" +
      imgUrl +
      "&description=" +
      "Discover the fastest way to sell social media. Join me on omnifluxs, get a income!";

    const twitterpopup = `https://api.whatsapp.com/send/?text=Discover the fastest way to sell social media. Join me on omnifluxs, get a income! https://www.omnifluxs.com/pe/YP7XZ4=custom_url&app_absent=0`;
    const fbpopup = window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + fbShareLink,
      "pop",
      "width=600, height=400, scrollbars=no"
    );
  };
  return (
    <div className="referring_pages">
      <Container>
        <ToastContainer />
        <div className="referring_wrapper">
          {/************************************
           * REFERING PAGE BANNER START HERE
           *************************************/}
          <Row lg={2} md={1} sm={1}>
            <Col
              style={{
                margin: "auto",
              }}
            >
              <Box>
                <Typography fontSize={"40px"} fontWeight={"bold"}>
                  <mark>monabbirhasan</mark>, take the credit for referring
                  friends to omnifluxs
                </Typography>
                <Typography py={2}>
                  Earn up to $.43 in omnifluxs Credits — up to $.80 from each
                  referral.
                </Typography>
                <Typography fontSize={12}>
                  <NavLink>Terms and conditions apply</NavLink>
                </Typography>
              </Box>
            </Col>
            <Col>
              <LazyLoadImage
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/referral_program_perseus/header.65b4f87.png"
              />
            </Col>
          </Row>
          {/************************************
           * REFERING FOR SECTION START HERE
           *************************************/}
          <section className="referring_form">
            <Box>
              <FormLabel style={{ textTransform: "capitalize" }}>
                Invite friends through email
              </FormLabel>
              <InputGroup>
                <Form.Control />
                <InputGroup.Text>
                  <Button>send</Button>
                </InputGroup.Text>
              </InputGroup>
              <small>Separate emails with commas</small>
            </Box>
            <Box sx={{ my: 3 }}>
              <FormLabel>Or share your personal referral link</FormLabel>
              <Stack spacing={1} width={"100%"} direction={"row"}>
                <InputGroup>
                  <Form.Control />
                  <InputGroup.Text>
                    <IconButton>
                      <CopyAll htmlColor="green" />
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>
                <Box>
                  <IconButton
                    onClick={handleShare}
                    size="large"
                    variant="outlined"
                    color="primary"
                    sx={{ border: "1px solid #fff" }}
                  >
                    <Facebook />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    sx={{ border: "1px solid #fff" }}
                    size="large"
                    variant="outlined"
                  >
                    <Twitter htmlColor="dodgerblue" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    sx={{ border: "1px solid #fff" }}
                    size="large"
                    variant="outlined"
                  >
                    <WhatsApp htmlColor="green" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    sx={{ border: "1px solid #fff" }}
                    size="large"
                    variant="outlined"
                  >
                    <LinkedIn htmlColor="dodgerblue" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    sx={{ border: "1px solid #fff" }}
                    size="large"
                    variant="outlined"
                  >
                    <Telegram htmlColor="dodgerblue" />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Referring;
