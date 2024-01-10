import { Card, Container, Tab, Tabs, Modal, Form } from "react-bootstrap";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./earnings.css";
import "../../../../assets/css/responsive.css";
const Earnings = () => {
  const [ShowFdoucmentModal, setShowFdoucmentModal] = useState(false);
  const handleCloseFdoucmentModal = () => setShowFdoucmentModal(false);
  const handleShowFdoucmentModal = () => setShowFdoucmentModal(true);
  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const startYear = 2019;
  const endYear = 2027;
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return (
    <div>
      <Container>
        <Typography py={3} fontSize={"2rem"}>
          Earnings
        </Typography>
        <Box>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {/*******************************
             * EARNING OVERVIEW START HERE
             ********************************/}
            <Tab eventKey="home" title="Overview">
              <Card style={{ width: "30rem", padding: "30px" }}>
                <Card.Body>
                  <Card.Title>
                    <Typography fontWeight={"bold"}>Available funds</Typography>
                    <Typography color="gray">
                      Balance available for use
                    </Typography>
                  </Card.Title>
                  <Card.Text>
                    <Typography fontSize={"2rem"} fontWeight={"600"}>
                      $0.00
                    </Typography>
                    <Typography>Withdrawn to date: $12.00</Typography>
                  </Card.Text>
                  <Box>
                    <Button variant="contained" color="info">
                      Withdrawn
                    </Button>
                    <Typography pt={3}>
                      <NavLink>Manage payout methods</NavLink>
                    </Typography>
                  </Box>
                </Card.Body>
              </Card>
            </Tab>
            {/*******************************
             * FINANCIAL DOCUMENT START HERE
             ********************************/}
            <Tab eventKey="profile" title="Financial documents">
              <Card style={{ width: "30rem", padding: "20px" }}>
                <Card.Body>
                  <Card.Title>
                    <Typography fontWeight={"600"}>
                      Statement of earnings
                    </Typography>
                  </Card.Title>
                  <Card.Text>
                    Choose a date range and download a statement summarizing
                    your yearly earnings.
                  </Card.Text>
                  <Button onClick={handleShowFdoucmentModal} variant="outlined">
                    Choose date range
                  </Button>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Box>
      </Container>
      {/*****************************************
       * FINANCIAL DOCUMEN MODALS HERE
       ****************************************/}
      <Modal
        size="md"
        show={ShowFdoucmentModal}
        onHide={handleCloseFdoucmentModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Get your statement of earnings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography>
            Select a month and year—your statement will cover a 12-month period.
            Check your billing info to make sure your statement shows the
            correct details.
          </Typography>
          <Stack direction={"row"} spacing={1} pt={3}>
            <Box style={{ width: "100%" }}>
              <Form.Label>12-month period from</Form.Label>
              <Form.Select
                style={{ width: "100%" }}
                aria-label="Default select example"
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </Form.Select>
            </Box>
            <Box style={{ width: "100%" }}>
              <Form.Label>year</Form.Label>
              <Form.Select
                style={{ width: "100%" }}
                aria-label="Default select example"
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Box>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#eee",
              color: "gray",
              marginRight: "10px",
            }}
            variant="secondary"
            onClick={handleCloseFdoucmentModal}
          >
            Close
          </Button>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            onClick={handleCloseFdoucmentModal}
          >
            Download Statement
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Earnings;
