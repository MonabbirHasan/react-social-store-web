/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const WithdrawalFunds = () => {
  const [value, setValue] = useState("");
  const [Currency, setCurrency] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value === value ? "" : event.target.value);
  };
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
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
    <div className="withdrawal_funds">
      <Container>
        <div className="withdrawal_funds_wrapper">
          <Row>
            {/*WITHDRAW PYAMENT METHODS START HERE*/}
            <Col lg={8}>
              <Row lg={3}>
                {payment_methods.map((items, index) => (
                  <Col key={items}>
                    <Box
                      style={{
                        background: "#f8f9fa",
                        padding: "10px",
                        boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                        border: "3px solid #fff",
                        margin: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <Avatar
                        src={items.img}
                        sx={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "80px",
                        }}
                      />
                      <Stack
                        direction={"row"}
                        width={"100%"}
                        justifyContent={"space-between"}
                      >
                        <FormControl component="fieldset">
                          <RadioGroup value={value} onChange={handleChange}>
                            <FormControlLabel
                              value={items.name + index}
                              control={<Radio />}
                              label={
                                <Typography
                                  fontSize={"18px"}
                                  textTransform={"capitalize"}
                                  color={"gray"}
                                  fontWeight={"600"}
                                >
                                  {items.name}
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Col>
            {/*WITHDRAW PYAMENT FORM START HERE*/}
            <Col lg={4}>
              <Box
                style={{
                  background: "#f8f9fa",
                  padding: "10px",
                  boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                  border: "3px solid #fff",
                  margin: "5px",
                  borderRadius: "10px",
                }}
              >
                <FormControl fullWidth sx={{ py: 1 }}>
                  <FormLabel htmlFor="amount">Amount</FormLabel>
                  <TextField variant="filled" size="small" />
                </FormControl>
                <FormControl fullWidth sx={{ my: 1 }}>
                  <FormLabel>Currency</FormLabel>
                  <Select
                    value={Currency}
                    onChange={handleChangeCurrency}
                    variant="filled"
                    size="small"
                  >
                    <MenuItem value={1}>$ - US Dollar</MenuItem>
                    <MenuItem value={2}>€ - Euro</MenuItem>
                    <MenuItem value={3}>£ - British Pound</MenuItem>
                    <MenuItem value={4}>¥ - Japanese Yen</MenuItem>
                    <MenuItem value={5}>A$ - Australian Dollar</MenuItem>
                    <MenuItem value={6}>C$ - Canadian Dollar</MenuItem>
                    <MenuItem value={7}>CHF - Swiss Franc</MenuItem>
                    <MenuItem value={8}>¥ - Chinese Yuan</MenuItem>
                    <MenuItem value={9}>₹ - Indian Rupee</MenuItem>
                    <MenuItem value={10}>₽ - Russian Ruble</MenuItem>
                  </Select>
                </FormControl>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  justifyContent={"space-between"}
                  pt={2}
                  textTransform={"capitalize"}
                >
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    Witdraw fee
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    32$
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  justifyContent={"space-between"}
                  pt={2}
                  textTransform={"capitalize"}
                >
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    to Witdraw
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    322$
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  justifyContent={"space-between"}
                  pt={2}
                  textTransform={"capitalize"}
                >
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    payment method
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={"grayText"}
                  >
                    paypal
                  </Typography>
                </Stack>
                <FormControl fullWidth sx={{ mt: 3 }}>
                  <Button variant="outlined">Wthdraw Now</Button>
                </FormControl>
              </Box>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WithdrawalFunds;
