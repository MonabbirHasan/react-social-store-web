/* eslint-disable no-unused-vars */
import { Box, Button, Divider, Switch, Typography } from "@mui/material";
import React from "react";
import { Badge, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Security = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h4"
          style={{
            textTransform: "capitalize",
            padding: "10px 0",
          }}
        >
          change password
        </Typography>
        <Box>
          <Form.Label htmlFor="basic-url">Current Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </Box>
        <Box>
          <Form.Label htmlFor="basic-url">New Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </Box>
        <Box>
          <Form.Label htmlFor="basic-url">Confirm Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <small>
            8 characters or longer. Combine upper and lowercase letters and
            numbers.
          </small>
          <Button style={{ float: "right" }}>Save Changes</Button>
        </Box>
      </div>
      <Divider
        component={"li"}
        style={{
          listStyle: "none",
          padding: "10px",
          marginBottom: "10px",
        }}
      />
      {/********************************
       * TOW FACTOR AUTHONTICATION
       *********************************/}
      <div>
        <Box>
          <Form.Label htmlFor="basic-url" style={{ padding: "0 10px" }}>
            PHONE VARIFICATION
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              readOnly
              aria-readonly
              placeholder="Your phone is verified with Fiverr. Click Edit to change your phone number"
            />
            <Button>Edite</Button>
          </InputGroup>
        </Box>
        <Box>
          <Form.Label htmlFor="basic-url" style={{ padding: "0 10px" }}>
            <p style={{ margin: "0", padding: "0" }}>
              TWO FACTOR AUTHENTICATION
            </p>
            <span
              style={{
                color: "green",
                fontSize: "10px",
                textTransform: "uppercase",
              }}
            >
              recommended
            </span>
          </Form.Label>
          <div className="px-2">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="To help keep your account secure, we'll ask you to
                                    submit a code when using a new device to log in.
                                    We'll send the code via SMS, email, or Fiverr
                                    notification."
            />
          </div>
          <Divider
            component={"li"}
            style={{ listStyle: "none", padding: "10px 0" }}
          />
        </Box>
        {/************************************************
         * CONNECTED DEVICE SECTION START HERE
         ************************************************/}
        <div className="connected_device py-4">
          <Card>
            <Card.Header as="p">Connected Device</Card.Header>
            <Card.Body>
              <Card.Text>
                {/*ROW COL START HERE */}
                <Row>
                  <Col>
                    <LazyLoadImage src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/session_management/icon-laptop.125e553.svg" />
                  </Col>
                  <Col xs={10}>
                    <Typography
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                      }}
                    >
                      Chrome 113, windows{" "}
                      <Badge bg="success">this device</Badge>
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Last activity 2 hour ago (Bangladesh)
                    </Typography>
                  </Col>
                  <Col>
                    <Switch />
                  </Col>
                </Row>
                {/*ROW COL END HERE */}
              </Card.Text>
              <Card.Text>
                {/*ROW COL START HERE */}
                <Row>
                  <Col>
                    <LazyLoadImage src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/session_management/icon-mobile.063d55e.svg" />
                  </Col>
                  <Col xs={10}>
                    <Typography
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                      }}
                    >
                      SM-M022G, <Badge bg="success">Android App</Badge>
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Last activity 2 hour ago (India)
                    </Typography>
                  </Col>
                  <Col>
                    <Switch />
                  </Col>
                </Row>
                {/*ROW COL END HERE */}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Security;
