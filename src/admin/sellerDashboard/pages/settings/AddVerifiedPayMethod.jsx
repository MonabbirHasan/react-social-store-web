/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AddVerifiedPayMethod = () => {
  const payment_methods = [
    {
      name: "stripe",
      img: "https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png",
    },
    {
      name: "paypal",
      img: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_scale.size_760x427.v1602794215.png",
    },
    {
      name: "bkash",
      img: "https://tds-images.thedailystar.net/sites/default/files/images/2023/04/18/bkash.jpg",
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
      name: "crypto",
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1303387/regular_1708x683_Untitled-e7fde53f1e5631a8728cc9aefc1538e8.png",
    },
    {
      name: "web money",
      img: "https://1000logos.net/wp-content/uploads/2023/03/WebMoney-logo.png",
    },
    {
      name: "easy paisa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBYlpxYl3rbyN-CwYojsQbp9T16t3uW2jJrgz78k4UQ&s",
    },
    {
      name: "Skrill",
      img: "https://play-lh.googleusercontent.com/I8AQgdC1R5Gm_MKz4RskAsAroFY43cLQMe6IEiV0NkqATjaz863rfkjjx2IpeayGhW8",
    },
  ];
  return (
    <div className="add_payment_method">
      <Container>
        <div className="add_payment_method_wrapper">
          <Row>
            <Col lg={6}>
              <div className="payment_method_left_side">
                <Typography fontSize={"1.7rem"} fontWeight={"600"}>
                  Add Verified Payment Method
                  <Divider component={"p"} sx={{ my: 1 }} />
                </Typography>
                <div className="method_item">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <Row lg={3}>
                        {payment_methods.map((items) => (
                          <Col key={items.id}>
                            <Button
                              fullWidth
                              size="small"
                              style={{
                                backgroundColor: "#eee",
                                borderRadius: "10px",
                                margin: "5px 0",
                                boxShadow:
                                  "-2px -2px 5px #eee,2px 2px 5px #eee",
                                border: "2px solid #fff",
                                color: "black",
                                "&hover": {
                                  background: "#eee",
                                },
                                padding: "5px",
                                fontSize: "10px",
                                textTransform: "capitalize",
                              }}
                              variant="contained"
                              key={items.id}
                            >
                              <Stack
                                direction={"row"}
                                my={1}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <FormControlLabel
                                  value={items.name}
                                  control={<Radio />}
                                  label={items.name}
                                />
                                <Avatar
                                  sx={{
                                    width: "50px",
                                    height: "30px",
                                    borderRadius: 0,
                                    mt: 1,
                                  }}
                                  src={items.img}
                                />
                              </Stack>
                            </Button>
                          </Col>
                        ))}
                      </Row>
                    </RadioGroup>
                  </FormControl>
                  <Box py={1}>
                    <Button variant="contained">verify payment method</Button>
                  </Box>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="payment_method_right_side">
                <Avatar src="http://localhost:5173/src/assets/img/logo.png" />
                <Typography
                  textTransform={"capitalize"}
                  fontSize={"20px"}
                  color={"gray"}
                  pt={0}
                >
                  Verified Payment Method Benefits
                  <Divider component={"p"} sx={{ my: 1 }} />
                </Typography>
                <Stack direction={"row"} pt={3} spacing={3}>
                  <LazyLoadImage
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src="https://www.f-cdn.com/assets/main/en/assets/payments/money_shield.svg"
                  />
                  <Box sx={{ py: 2 }}>
                    <Typography fontWeight={"600"} py={0}>
                      Verified badge
                    </Typography>
                    <Typography>
                      Improve your trust on the platform with a payment verified
                      badge.
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} pt={3} spacing={3}>
                  <LazyLoadImage
                    style={{
                      width: "100px",
                      height: "100px",
                      marginLeft: "10px",
                    }}
                    src="https://www.f-cdn.com/assets/main/en/assets/payments/target.svg"
                  />
                  <Box sx={{ py: 2 }}>
                    <Typography fontWeight={"600"} py={0}>
                      Concentrate on success
                    </Typography>
                    <Typography>
                      make payments easier and improve your productivity
                    </Typography>
                  </Box>
                </Stack>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddVerifiedPayMethod;
