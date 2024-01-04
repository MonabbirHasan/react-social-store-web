/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ForumRounded, LinkSharp } from "@mui/icons-material";
import Header from "../../components/common/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./product_details.css";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const [TabsValue, setTabsValue] = useState("one");
  const handleChangeTabs = (event, newValue) => {
    setTabsValue(newValue);
  };
  return (
    <>
      <Header />
      <div className="product_details">
        <Container fluid>
          <div className="product_details_page_wrapper">
            <Box className="">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={900}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                  <div key={items}>
                    <LazyLoadImage
                      style={{
                        width: "95vw",
                        height: "auto",
                        marginRight: "-3px",
                      }}
                      src="https://www.imec-int.com/_next/image?url=%2Fsites%2Fdefault%2Ffiles%2Fimported%2Fartificial-intelligence_1.jpg&w=3840&q=75"
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
            {/*********************************
             * PRODUCT DETAIS TABS START HERE
             **********************************/}
            <div className="detail_tabs">
              <Tabs
                value={TabsValue}
                onChange={handleChangeTabs}
                aria-label="wrapped label tabs example"
              >
                <Tab value={"one"} label="About" />
                <Tab value={"tow"} label="Gallery" />
              </Tabs>
            </div>
            {/**************************************
             * PRODUCT DETAIS TABS PANEL START HERE
             ***************************************/}
            <div className="detail_tabs_panel">
              {TabsValue === "one" ? (
                <section>
                  <Row>
                    <Col lg={8} md={12} sm={12}>
                      <div className="product_details_left">
                        <Typography
                          fontWeight={"600"}
                          color="gray"
                          textTransform={"capitalize"}
                          pt={2}
                        >
                          About the channel
                        </Typography>
                        <Typography color={"GrayText"} fontSize={"14px"} pt={1}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Saepe consequatur aspernatur iusto ab harum,
                          dolorum ipsum sit impedit quod fugiat commodi
                          accusantium atque exercitationem consectetur maiores
                          libero unde soluta laborum quo eveniet sed odio
                          perferendis repellat! Dolor ab inventore porro cum
                          natus, ad voluptatum. Beatae dolorum, iure fuga odio
                          saepe porro, eaque ullam doloribus dolore eius
                          voluptatem illo voluptatibus unde quasi, maxime nulla
                          quidem aperiam officia totam explicabo alias!
                          Voluptate earum, mollitia ad magni voluptatem odio
                          voluptates ex et corporis velit quas qui repellendus
                          labore doloremque, voluptatum natus sequi iure?
                          Repudiandae magnam ducimus eaque! Quos distinctio
                          eligendi pariatur veritatis ipsa, beatae maxime
                          aliquid est tempora cum, doloremque nisi? Deserunt,
                          cumque? Quam perspiciatis, expedita esse, praesentium
                          ea optio id officia animi neque quaerat magnam fugiat
                          beatae quos. Explicabo ipsa ea nisi odio labore
                          deleniti dolore aperiam, porro nesciunt necessitatibus
                          eum quos quis, natus laudantium nam quaerat debitis
                          maiores inventore ullam cupiditate dignissimos
                          facilis. Eius nemo incidunt asperiores nostrum odit
                          reprehenderit, cupiditate facilis iusto a cumque
                          architecto ad velit omnis natus autem quis quo,
                          placeat facere quam totam, ipsa ea tempore rerum! Hic
                          veritatis omnis aspernatur laudantium consequuntur.
                          Quam nulla numquam provident saepe, optio rem ut
                          officia aliquam dolore fugit veniam necessitatibus
                          quis maxime vel ratione qui, blanditiis fuga
                          asperiores eum in ea. Laboriosam, dicta mollitia
                          impedit, quo aliquam fugit deleniti esse maxime
                          dolorum distinctio praesentium animi? Suscipit velit
                          aliquam, voluptates, eligendi delectus temporibus
                          atque quod natus voluptate sit iusto dolore hic
                          molestiae cumque obcaecati. Corrupti aliquam nostrum
                          atque eligendi impedit, inventore ut laborum
                          dignissimos molestiae facere deserunt magnam eaque eum
                          quas optio maxime ab ipsum explicabo distinctio
                          accusamus maiores in omnis praesentium! Asperiores
                          quisquam reprehenderit voluptatem sunt necessitatibus?
                          Quibusdam asperiores vero repellendus nisi fugit!
                          Praesentium explicabo facilis eligendi officia modi
                          expedita voluptatibus dolorum, minus numquam dolores
                          soluta. Cupiditate debitis eius impedit, sint vitae
                          explicabo assumenda? Quidem quod dolorum sed illum,
                          enim ipsum hic blanditiis fuga earum itaque minima
                          voluptatibus minus saepe explicabo aliquid, voluptatem
                          impedit. Eos, magni asperiores quaerat natus pariatur
                          necessitatibus ullam magnam quo nam obcaecati
                          perferendis neque dolorum cum? Odit provident vel illo
                          obcaecati dolore libero ullam omnis atque? Accusantium
                          eveniet voluptatibus alias, perferendis facilis aut
                          deleniti architecto consequatur id, doloribus
                          recusandae porro totam beatae temporibus. Autem unde
                          doloribus libero nisi eligendi nulla exercitationem
                          assumenda ab modi eos, dolorum quam sequi magni itaque
                          numquam vitae nihil. Quisquam deserunt earum
                          temporibus suscipit dolores officiis fugit, labore
                          aspernatur distinctio inventore vitae asperiores
                          obcaecati error id nisi nobis. Dolorem, eum
                          accusantium temporibus sunt optio minima ratione
                          placeat doloremque, aut fuga impedit rem eveniet sed
                          aliquid doloribus, obcaecati ducimus alias expedita
                          rerum. Necessitatibus repellendus, voluptatem, ducimus
                          vero culpa tempore facere mollitia quos rerum
                          praesentium modi ullam labore minus, sint fuga
                          explicabo quo sed totam cum quam cupiditate possimus
                          beatae libero numquam! Possimus nam dolore ipsum
                          tempora, ab voluptates dolorum doloribus, porro, eos
                          expedita impedit ea eius quisquam harum corporis ipsa
                          voluptatibus ipsam cum temporibus voluptas. Corrupti
                          quaerat, cupiditate nihil minus consequuntur id illo
                          eum vero corporis, nemo doloremque. Consequatur
                          ratione veniam expedita dolorum.
                        </Typography>
                      </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                      <div className="product_details_right">
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>Status</Typography>
                          <Typography>Available</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>channel link</Typography>
                          <Typography>https://youtube.com</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>community guidences</Typography>
                          <Typography>yes</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>copywright</Typography>
                          <Typography>no</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>category</Typography>
                          <Typography>movies</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>wrring</Typography>
                          <Typography>no</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>monetized</Typography>
                          <Typography>yes</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>monthly income</Typography>
                          <Typography>$5423</Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>Channel</Typography>
                          <Typography>
                            <IconButton>
                              <LinkSharp />
                            </IconButton>
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          sx={{
                            border: "2px solid #fff",
                            borderTop: "0",
                            p: 1,
                            borderRadius: "5px",
                            my: 1,
                          }}
                        >
                          <Typography>price</Typography>
                          <Typography>$323</Typography>
                        </Stack>
                        {/*********************************
                         * PRODUCT CHATS BUTTON START HERE
                         **********************************/}
                        <Stack
                          my={3}
                          direction={"row"}
                          alignItems={"end"}
                          justifyContent={"end"}
                        >
                          <Fab
                            variant="extended"
                            size="large"
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "orange",
                                color: "white",
                              },
                            }}
                          >
                            <ForumRounded
                              fontSize="large"
                              sx={{ mr: 1 }}
                              htmlColor="white"
                            />
                            <Typography>Create A deal</Typography>
                          </Fab>
                        </Stack>
                      </div>
                    </Col>
                  </Row>
                </section>
              ) : TabsValue === "tow" ? (
                <section>
                  <Row lg={6}>
                    {Array.from({ length: 12 }, (x) => x + x).map((items) => (
                      <Col key={items}>
                        <Button
                          sx={{
                            padding: "10px",
                            background: "#fff",
                            margin: "10px 0",
                            borderRadius: "5px",
                          }}
                        >
                          <LazyLoadImage
                            style={{ width: "100%", height: "auto" }}
                            src="https://dfoxmedia.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/10/07111342/1675462737875.png"
                          />
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </section>
              ) : (
                "page not found!"
              )}
            </div>
            {/*********************************
             * PRODUCT DETAIS TABS END HERE
             **********************************/}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
