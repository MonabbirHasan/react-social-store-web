/* eslint-disable react/prop-types */
import { Container, Table, Badge as B4Badge, Modal } from "react-bootstrap";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Pagination as MUIPaginations,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";
import "./product_listing.css";
import { Delete, Edit, PushPinOutlined } from "@mui/icons-material";
const Product_listing = (props) => {
  const [LisgingTab, setLisgingTab] = useState(1);
  const HandleTabs = (event, newValue) => {
    setLisgingTab(newValue);
  };
  const styleSheet = {
    listing_table_td: {
      padding: "10px",
    },
    listing_table_th: {
      fontSize: "12px",
      fontWeight: "400",
      color: "GrayText",
    },
  };
  const CreateListing = () => {
    props.Openlisting();
  };

  /*******************************
   * PRODUCT PIN MODALS CONTROLL
   ********************************/
  const [ShowProductPinModal, setShowProductPinModal] = useState(false);
  const handleCloseProductPinModal = () => setShowProductPinModal(false);
  const handleShowProductPinModal = () => setShowProductPinModal(true);
  return (
    <>
      <div className="manage_listings">
        <Container>
          <div className="manage_listings_wrapper">
            <Box sx={{ width: "100%" }}>
              <div className="tabs_menu">
                <Box>
                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"2rem"}
                    fontWeight={"600"}
                    color={"gray"}
                    mb={2}
                  >
                    my Listings
                  </Typography>
                </Box>
                <Tabs
                  value={LisgingTab}
                  onChange={HandleTabs}
                  aria-label="wrapped label tabs example"
                >
                  <Tab
                    value={1}
                    label={
                      <Badge color="primary" badgeContent={3} invisible={false}>
                        ACTIVE
                      </Badge>
                    }
                    wrapped
                  />
                  <Tab
                    value={2}
                    label={
                      <Badge badgeContent={4} invisible={false} color="primary">
                        PENDING APPROVAL
                      </Badge>
                    }
                    wrapped
                  />
                  <Tab
                    value={3}
                    label={
                      <Badge badgeContent={4} invisible={false} color="primary">
                        REQUIRES MODIFICATION
                      </Badge>
                    }
                    wrapped
                  />
                  <Tab
                    value={4}
                    label={
                      <Badge badgeContent={4} invisible={false} color="primary">
                        DRAFT
                      </Badge>
                    }
                    wrapped
                  />
                  <Tab
                    value={5}
                    label={
                      <Badge badgeContent={4} invisible={false} color="primary">
                        DENIED
                      </Badge>
                    }
                    wrapped
                  />
                  <Tab
                    value={6}
                    label={
                      <Badge badgeContent={4} invisible={false} color="primary">
                        PAUSED
                      </Badge>
                    }
                    wrapped
                  />
                  <Box
                    style={{
                      float: "right",
                      position: "absolute",
                      right: 0,
                      top: "5px",
                    }}
                  >
                    <Button variant="contained" onClick={CreateListing}>
                      create
                    </Button>
                  </Box>
                </Tabs>
              </div>
              {/*******************************
               * TAB PANEL SECTIONS START ERE
               ********************************/}
              <section className="product_listing_tab_panel">
                <div className="tab_panel_wrapper">
                  {LisgingTab === 1 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                            <th style={styleSheet.listing_table_th}>PIN</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                                <td>
                                  <IconButton
                                    onClick={handleShowProductPinModal}
                                  >
                                    <PushPinOutlined htmlColor="green" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : LisgingTab === 2 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 5 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : LisgingTab === 3 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : LisgingTab === 4 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : LisgingTab === 5 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : LisgingTab === 6 ? (
                    <div className="tab_panel_item">
                      <Box>
                        <Typography
                          fontWeight={"600"}
                          p={2}
                          fontSize={"14px"}
                          color={"gray"}
                          textTransform={"uppercase"}
                        >
                          active listing
                        </Typography>
                      </Box>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th style={styleSheet.listing_table_th}>Listing</th>
                            <th></th>
                            <th style={styleSheet.listing_table_th}>
                              IMPRESSIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>CLICKS</th>
                            <th style={styleSheet.listing_table_th}>ORDERS</th>
                            <th style={styleSheet.listing_table_th}>
                              CANCELLATIONS
                            </th>
                            <th style={styleSheet.listing_table_th}>PLANS</th>
                            <th style={styleSheet.listing_table_th}>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 10 }, (x) => x + x).map(
                            (items) => (
                              <tr key={items} style={{}}>
                                <td style={styleSheet.listing_table_td}>
                                  <Avatar
                                    sx={{
                                      width: "70px",
                                      height: "60px",
                                      borderRadius: "5px",
                                    }}
                                    src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                                  />
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  create full stack mobile app development for
                                  your vision
                                </td>
                                <td style={styleSheet.listing_table_td}>30</td>
                                <td style={styleSheet.listing_table_td}>100</td>
                                <td style={styleSheet.listing_table_td}>0</td>
                                <td style={styleSheet.listing_table_td}>0%</td>
                                <td style={styleSheet.listing_table_td}>
                                  <B4Badge variant="">bronze</B4Badge>
                                </td>
                                <td style={styleSheet.listing_table_td}>
                                  <IconButton>
                                    <Edit htmlColor="green" />
                                  </IconButton>
                                  <IconButton>
                                    <Delete htmlColor="red" />
                                  </IconButton>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                      <MUIPaginations count={10} />
                    </div>
                  ) : (
                    "not found"
                  )}
                </div>
              </section>
            </Box>
          </div>
        </Container>
      </div>
      {/*******************************
       * PRODUCT PIN MODALS HERE
       ********************************/}
      <Modal
        size="md"
        show={ShowProductPinModal}
        onHide={handleCloseProductPinModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pin Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack>
            <Typography>Pin For : 30 Days</Typography>
            <Typography>You Will Pay: $5.00</Typography>
            <Typography>Product Name: Youtube</Typography>
            <Typography>Listing Id: OMN32423</Typography>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outlined"
            sx={{ borderColor: "red", color: "red" }}
            onClick={handleCloseProductPinModal}
          >
            Cancel
          </Button>
          <Divider sx={{ p: 1 }} />
          <Button
            variant="contained"
            sx={{}}
            onClick={handleCloseProductPinModal}
          >
            set pin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product_listing;
