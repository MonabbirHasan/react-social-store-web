import { Col, Container, FormLabel, Row } from "react-bootstrap";
import "./referring.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  CopyAll,
  Facebook,
  LinkedIn,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
const Referring = () => {
  return (
    <div className="referring_pages">
      <Container>
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
                  friends to Fiverr
                </Typography>
                <Typography py={2}>
                  Earn up to $500 in Fiverr Credits — up to $100 from each
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
              <FormLabel>Invite friends through email</FormLabel>
              <Stack width={"100%"} direction={"row-er"}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Add Email Addresses"
                />
                <Button variant="outlined">send</Button>
              </Stack>
              <small>Separate emails with commas</small>
            </Box>
            <Box sx={{ my: 3 }}>
              <FormLabel>Or share your personal referral link</FormLabel>
              <Stack width={"100%"} direction={"row-er"}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="https://omnifluxs.com/rakeshgurjar?reffer=324243"
                />
                <Button variant="outlined" size="large">
                  <CopyAll />
                </Button>
              </Stack>
              <Stack direction={"row"} spacing={1} py={3}>
                <Button size="large" variant="outlined">
                  <Facebook htmlColor="black" />
                </Button>
                <Button size="large" variant="outlined">
                  <Twitter htmlColor="black" />
                </Button>
                <Button size="large" variant="outlined">
                  <WhatsApp htmlColor="black" />
                </Button>
                <Button size="large" variant="outlined">
                  <LinkedIn htmlColor="black" />
                </Button>
                <Button size="large" variant="outlined">
                  <Telegram htmlColor="black" />
                </Button>
              </Stack>
            </Box>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Referring;
