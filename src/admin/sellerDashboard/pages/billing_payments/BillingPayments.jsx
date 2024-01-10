/* eslint-disable react/prop-types */
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import { Add, Payment } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./billing_payments.css";
// import AddFunds from "./AddFunds";
import { AddFunds, WithdrawalFunds } from "./index";
import "../../../../assets/css/responsive.css";
const BillingPayments = (props) => {
  const HandleOpenEarningsPage = () => {
    props.openEarnings();
  };
  return (
    <div className="billing_payment">
      <Container>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          textTransform={"capitalize"}
          color={'gray'}
        >
          Billing and payments
        </Typography>
        <section className="billing_payment_info">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {/****************************
             * BILLING HISTORY SECTIONS
             *****************************/}
            <Tab eventKey="home" title="Add Funds">
              <AddFunds />
            </Tab>
            {/********************************
             * BILLING INFORMATIONS SECTIONS
             *********************************/}
            <Tab eventKey="profile" title="Witdrawal">
              <WithdrawalFunds />
            </Tab>
            {/********************************
             * AVAILABLE BALANCE SECTIONS
             *********************************/}
            <Tab eventKey="contact" title="Available balances">
              <Row lg={2} sm={1} md={1}>
                <Col>
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title>
                        <Typography>Available balances</Typography>
                      </Card.Title>
                      <Card.Text>
                        <Box py={2}>
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography fontWeight={"600"} color={"GrayText"}>
                              Earnings
                            </Typography>
                            <Typography fontWeight={"500"} color={"dodgerblue"}>
                              <NavLink onClick={HandleOpenEarningsPage}>
                                Your Earnings Page
                              </NavLink>
                            </Typography>
                          </Stack>
                          <Typography fontSize={"2rem"} fontWeight={"600"}>
                            $0.00
                          </Typography>
                          <Typography>
                            Available for withdrawal or purchases.
                          </Typography>
                        </Box>
                        <Divider component={"p"} sx={{ py: 1 }} />
                        <Box py={2}>
                          <Typography fontWeight={"600"} color={"GrayText"}>
                            From canceled orders
                          </Typography>
                          <Typography fontSize={"2rem"} fontWeight={"600"}>
                            $0.00
                          </Typography>
                          <Typography>
                            Available for withdrawal or purchases.
                          </Typography>
                        </Box>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title>
                        <Typography></Typography>
                      </Card.Title>
                      <Card.Text>
                        <Box py={1}>
                          <Typography fontWeight={"600"} color={"GrayText"}>
                            Earnings
                          </Typography>
                          <Typography fontSize={"2rem"} fontWeight={"600"}>
                            $0.00
                          </Typography>
                          <Typography>
                            Available for withdrawal or purchases.
                          </Typography>
                        </Box>
                        <Divider component={"p"} sx={{ py: 1 }} />
                        <Box py={1}>
                          <Typography fontWeight={"600"} color={"GrayText"}>
                            From canceled orders
                          </Typography>
                          <Typography fontSize={"2rem"} fontWeight={"600"}>
                            $0.00
                          </Typography>
                          <Typography>
                            Available for withdrawal or purchases.
                          </Typography>
                        </Box>
                      </Card.Text>
                      <Button variant="contained" color="info">
                        Earn Fiverr Credits
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
            {/********************************
             * PAYMENTS METHODS SECTIONS
             *********************************/}
            {/* <Tab eventKey="balances" title="Payment methods">
              <Typography fontWeight={"600"} fontSize={"22px"}>
                Payment methods
              </Typography>
              <Typography>
                Easily manage your payments methods through our secure system.
              </Typography>
              <Box py={4}>
                <Card style={{ width: "40rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <Stack direction={"row"} spacing={2}>
                        <Box>
                          <Typography>
                            <Payment />
                            Credit card
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>
                            <img
                              width="30"
                              height="30"
                              src="https://img.icons8.com/color/48/paypal.png"
                              alt="paypal"
                            />
                            Credit card
                          </Typography>
                        </Box>
                      </Stack>
                      <Divider component={"p"} />
                    </Card.Title>
                    <Card.Text>
                      <Stack py={3} direction={"row"} spacing={1}>
                        <Button startIcon={<Add />} variant="outlined">
                          Add a payment method
                        </Button>
                      </Stack>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Box>
            </Tab> */}
          </Tabs>
        </section>
      </Container>
    </div>
  );
};

export default BillingPayments;
