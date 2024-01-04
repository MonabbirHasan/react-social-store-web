import { NotificationsTwoTone, Person, Security } from "@mui/icons-material";
import "./SellerSettings.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";
import Accounts from "./Accounts";
import SecurityPage from "./Security";
import Notification from "./Notification";
const SellerSettings = () => {
  return (
    <>
      {/* <DashboardHeader /> */}
      <div className="user_settings_page">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Person />
                      <span>Account</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Security />
                      <span>Security</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <NotificationsTwoTone />
                      <span>Notification</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              {/*****************************
               * TAB CONTENT START HERE
               ******************************/}
              <Col sm={10}>
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
