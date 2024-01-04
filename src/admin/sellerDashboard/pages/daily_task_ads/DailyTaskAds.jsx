/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { ArrowCircleLeft, Lock } from "@mui/icons-material";
import { Badge, Col, Container, Row } from "react-bootstrap";
import "./dailytaskads.css";
const DailyTaskAds = (props) => {
  const initData = Array.from({ length: 102 }, (_, i) => ({
    _id: (i + 1).toString(),
    content: (i + 1).toString(),
    desc: "watch this video ads and earn money ",
    name: "task" + " " + (i + 1),
    status: true,
  }));

  const HandleOpenDailyTaskView = () => {
    props.OpenDailyTaskView();
  };
  const HandleBackProfilePage = () => {
    props.openProfile();
  };
  return (
    <>
      <div className="watch_ads_page">
        <Container>
          <Stack
            direction={"row"}
            sx={{
              padding: "20px",
              backgroundColor: "#eee",
              color: "#111",
              marginBottom: "10px",
              border: "3px solid #ffffff",
              boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
              borderRadius: "10px",
            }}
          >
            <Box>
              <IconButton onClick={HandleBackProfilePage}>
                <ArrowCircleLeft style={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography fontSize={30} textTransform={"capitalize"}>
                complete your task today!
              </Typography>
              <Typography fontSize={20} textTransform={"capitalize"}>
                your monday task is panding
              </Typography>
            </Box>
          </Stack>
          {/************************************
           * TASK ADS SECTION START HERE
           *************************************/}
          <div className="watch_ad_grid_wrapper">
            <Row lg={6}>
              {initData.map((items) => {
                return (
                  <Col key={items.id}>
                    <div className="grid_item">
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Badge
                          style={{
                            background: "white",
                            color: "black",
                            marginTop: "-10px",
                            display: "block",
                            marginLeft: "-10px",
                            borderRadius: "0",
                            width: "60px",
                            borderBottomRightRadius: "100%",
                          }}
                          bg=""
                        >
                          <Lock />
                        </Badge>
                        <Badge
                          style={{
                            display: "block",
                            width: "100px",
                            fontSize: "16px",
                            color: "black",
                            letterSpacing: "1px",
                            marginRight: "5px",
                            borderRadius: "4px",
                            backgroundColor: "white",
                            padding: "10px",
                            fontWeight: "revert",
                          }}
                          bg=""
                        >
                          {items.name}
                        </Badge>
                      </Stack>
                      <Typography
                        fontSize={"14px"}
                        padding={1}
                        pt={2}
                        color={"#fff"}
                      >
                        {items.desc}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={HandleOpenDailyTaskView}
                      >
                        Watch
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          {/************************************
           * TASK ADS SECTION END HERE
           *************************************/}
        </Container>
      </div>
    </>
  );
};

export default DailyTaskAds;
