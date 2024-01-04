/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, Fab, IconButton, Stack, Typography } from "@mui/material";
import "./subscription.css";
import { Add, ArrowCircleLeft, Check, CheckCircle } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Subscription = (props) => {
  const subscription_plan = [
    {
      id: 1,
      type: "basic",
      price: "$324",
      info1: "20 Ads",
      info2: "Refferal Income",
      info3: "Daily Withdrawal",
      info4: "Live Support",
    },
    {
      id: 2,
      type: "standard",
      price: "$324",
      info1: "20 Ads",
      info2: "Refferal Income",
      info3: "Daily Withdrawal",
      info4: "Live Support",
    },
    {
      id: 3,
      type: "premium",
      price: "$324",
      info1: "20 Ads",
      info2: "Refferal Income",
      info3: "Daily Withdrawal",
      info4: "Live Support",
    },
  ];
  const HandleBackProfile = () => {
    props.openProfile();
  };
  return (
    <div className="subscription_page">
      <Container>
        <div className="subscription_page_head">
          <Stack direction={"row"}>
            <Box>
              <IconButton onClick={HandleBackProfile}>
                <ArrowCircleLeft htmlColor="white" />
              </IconButton>
            </Box>
            <Box>
              <Typography
                fontSize={"26px"}
                textTransform={"capitalize"}
                fontWeight={"600"}
                color={"white"}
              >
                buy subscription
              </Typography>
              <Typography
                fontSize={"16px"}
                textTransform={"capitalize"}
                fontWeight={"500"}
                color={"white"}
              >
                watch ad earn more money
              </Typography>
            </Box>
          </Stack>
        </div>
        <div className="subscription_page_wrapper">
          <Row lg={3} md={1} sm={1}>
            {subscription_plan.map((items, index) => (
              <Col key={items}>
                <div className={"subscription_item item" + index}>
                  <Typography
                    fontSize={"4rem"}
                    color={"#fff"}
                    fontWeight={"700"}
                    textTransform={"capitalize"}
                  >
                    {items.type}
                  </Typography>
                  <LazyLoadImage src="" />
                  <Typography
                    fontSize={"3.3rem"}
                    fontWeight={"900"}
                    color={"silver"}
                    textTransform={"capitalize"}
                  >
                    {items.price}
                  </Typography>
                  <Box>
                    <Typography
                      fontSize={"16px"}
                      color={"#999"}
                      marginLeft={"-20px"}
                      textTransform={"capitalize"}
                      py={1}
                    >
                      {items.type} plan
                    </Typography>
                    <ul className="subscription_plan_details">
                      <li>{items.info1}</li>
                      <li>{items.info2}</li>
                      <li>{items.info3}</li>
                      <li>{items.info4}</li>
                    </ul>
                  </Box>
                  <Stack
                    direction={"row"}
                    alignContent={"center"}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Typography></Typography>
                    <Button fullWidth variant="outlined">
                      active plan
                    </Button>
                  </Stack>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
