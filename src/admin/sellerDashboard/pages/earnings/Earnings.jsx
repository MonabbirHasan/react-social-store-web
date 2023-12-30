import { Card, Container, Tab, Tabs } from "react-bootstrap";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./earnings.css";
const Earnings = () => {
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
                  <Button variant="outlined">Choose date range</Button>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Earnings;
