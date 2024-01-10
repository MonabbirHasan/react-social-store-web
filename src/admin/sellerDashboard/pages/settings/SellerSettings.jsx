/* eslint-disable react/prop-types */
import {
  Add,
  NotificationsTwoTone,
  Payments,
  Person,
  Security,
} from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";
import "./SellerSettings.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "../../../../assets/css/responsive.css";
import { Container } from "react-bootstrap";
import Accounts from "./Accounts";
import SecurityPage from "./Security";
import Notification from "./Notification";
const SellerSettings = (props) => {
  const OpenPyamentVerify = () => {
    props.OpenPaymentVerifyPages();
  };
  return (
    <>
      {/* <DashboardHeader /> */}
      <div className="user_settings_page">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Person />
                      <span style={{ paddingLeft: "5px" }}>Account</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Security />
                      <span style={{ paddingLeft: "5px" }}>Security</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <NotificationsTwoTone />
                      <span style={{ paddingLeft: "5px" }}>Notification</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four">
                      <Payments />
                      <span style={{ paddingLeft: "5px" }}>
                        Payment & Financials
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              {/*****************************
               * TAB CONTENT START HERE
               ******************************/}
              <Col sm={9}>
                {/*******************************************
                 * USER ACCOUNTS TABS START HERE
                 *******************************************/}
                <Tab.Content>
                  <Tab.Pane
                    style={{
                      padding: "20px",
                      background: "#fafafa",
                      boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      border: "3px solid #fff",
                    }}
                    eventKey="first"
                  >
                    <Accounts />
                  </Tab.Pane>
                  {/*******************************************
                   * USER SECURITY TABS START HERE
                   *******************************************/}
                  <Tab.Pane
                    style={{
                      padding: "20px",
                      background: "#fafafa",
                      boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      border: "3px solid #fff",
                    }}
                    eventKey="second"
                  >
                    <SecurityPage />
                    {/************************************************
                     * CONNECTED DEVICE SECTION END HERE
                     ************************************************/}
                  </Tab.Pane>
                  {/*******************************************
                   * USER NOTIFICATION TABS START HERE
                   *******************************************/}
                  <Tab.Pane
                    style={{
                      padding: "20px",
                      background: "#fafafa",
                      boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      border: "3px solid #fff",
                    }}
                    eventKey="third"
                  >
                    <Notification />
                  </Tab.Pane>
                  {/*******************************************
                   * USER PAYMENT METHOD TABS START HERE
                   *******************************************/}
                  <Tab.Pane
                    style={{
                      padding: "20px",
                      background: "#fafafa",
                      boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      border: "3px solid #fff",
                    }}
                    eventKey="four"
                  >
                    <Typography fontSize={"2rem"} fontWeight={"600"}>
                      Payment & Financials
                    </Typography>
                    <Divider component={"p"} />
                    <Typography py={3} fontSize={"1.3rem"} fontWeight={"600"}>
                      Payment Methods
                    </Typography>
                    <Button
                      onClick={OpenPyamentVerify}
                      variant="contained"
                      startIcon={<Add />}
                      size="large"
                    >
                      add payment method
                    </Button>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
};

export default SellerSettings;
