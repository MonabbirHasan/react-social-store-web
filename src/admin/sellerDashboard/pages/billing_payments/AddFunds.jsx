/* eslint-disable no-unused-vars */
import {
  Avatar,
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
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
const AddFunds = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value === value ? "" : event.target.value);
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
  ];
  return (
    <div className="add_funds">
      <div className="add_funds_wrapper">
        <Row>
          {/*ADD FUNDS PAYMENT METHODS START HERE*/}
          <Col lg={3} md={12} sm={12}>
            <div className="payment_methods">
              <Typography
                textTransform={"capitalize"}
                fontSize={"1.3rem"}
                fontWeight={"500"}
                color={"gray"}
              >
                payment methods
              </Typography>
              {payment_methods.map((items, index) => (
                <MenuItem
                  key={items}
                  sx={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "3px solid #fff",
                    my: 1,
                  }}
                >
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Typography textTransform={"capitalize"}>
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
                      {items.name}
                    </Typography>
                    <Avatar
                      sx={{
                        border: "2px solid #fff",
                        borderRadius: "5px",
                        width: "80px",
                      }}
                      src={items.img}
                    />
                  </Stack>
                </MenuItem>
              ))}
            </div>
          </Col>
          {/*ADD FUNDS PAYMENT DETAILS START HERE*/}
          <Col lg={6} md={12} sm={12}>
            <div className="">
              <Typography
                textTransform={"capitalize"}
                fontSize={"1.3rem"}
                fontWeight={"500"}
                color={"gray"}
              >
                add amount
              </Typography>
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel>Currency</FormLabel>
                <Select variant="filled" size="small">
                  <MenuItem>$ - US Dollar</MenuItem>
                  <MenuItem>€ - Euro</MenuItem>
                  <MenuItem>£ - British Pound</MenuItem>
                  <MenuItem>¥ - Japanese Yen</MenuItem>
                  <MenuItem>A$ - Australian Dollar</MenuItem>
                  <MenuItem>C$ - Canadian Dollar</MenuItem>
                  <MenuItem>CHF - Swiss Franc</MenuItem>
                  <MenuItem>¥ - Chinese Yuan</MenuItem>
                  <MenuItem>₹ - Indian Rupee</MenuItem>
                  <MenuItem>₽ - Russian Ruble</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel>Amount</FormLabel>
                <TextField variant="filled" size="small" label="" />
              </FormControl>
              <Stack
                direction={"row"}
                width="100%"
                justifyContent={"space-between"}
                py={1}
              >
                <Typography>Total Due</Typography>
                <Typography>$232</Typography>
              </Stack>
              <Stack
                direction={"row"}
                width="100%"
                justifyContent={"space-between"}
                py={1}
              >
                <Typography>Processing fee</Typography>
                <Typography>$232</Typography>
              </Stack>
              <FormControl>
                <Button variant="contained">deposit</Button>
              </FormControl>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddFunds;
