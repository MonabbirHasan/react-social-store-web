import { Container, Table, Badge as B4Badge } from "react-bootstrap";
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
} from "@mui/material";
import { useState } from "react";
import "./product_listing.css";
import { Delete, Edit } from "@mui/icons-material";
const Product_listing = () => {
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
  return (
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
                  <Button variant="contained">create</Button>
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
  );
};

export default Product_listing;
