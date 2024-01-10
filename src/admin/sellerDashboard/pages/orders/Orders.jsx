import { useState } from "react";
import "./orders.css";
import { Container } from "react-bootstrap";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Tab,
  Table,
  Tabs,
  Typography,
  Pagination as MUIPaginations,
} from "@mui/material";
import "../../../../assets/css/responsive.css";
import { Delete, Edit } from "@mui/icons-material";
const Orders = () => {
  const [OrderTabs, setOrderTabs] = useState(1);
  const handleOrderTabs = (event, newValue) => {
    setOrderTabs(newValue);
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
    <div className="seller_order_management">
      <Container>
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
                Manage Orders
              </Typography>
            </Box>
            <Tabs
              value={OrderTabs}
              onChange={handleOrderTabs}
              aria-label="wrapped label tabs example"
            >
              <Tab value={1} label={"PRIORITY"} wrapped />
              <Tab
                value={2}
                label={
                  <Badge badgeContent={4} invisible={false} color="primary">
                    ACTIVE
                  </Badge>
                }
                wrapped
              />
              <Tab value={3} label={"DELIVERED"} wrapped />
              <Tab value={4} label={"COMPLETED"} wrapped />
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
              {OrderTabs === 1 ? (
                <div className="tab_panel_item">
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <MUIPaginations count={10} />
                </div>
              ) : OrderTabs === 2 ? (
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
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <MUIPaginations count={10} />
                </div>
              ) : OrderTabs === 3 ? (
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
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <MUIPaginations count={10} />
                </div>
              ) : OrderTabs === 4 ? (
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
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <MUIPaginations count={10} />
                </div>
              ) : OrderTabs === 5 ? (
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
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <MUIPaginations count={10} />
                </div>
              ) : OrderTabs === 6 ? (
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
                        <th style={styleSheet.listing_table_th}>buyer</th>
                        <th style={styleSheet.listing_table_th}>listing</th>
                        <th style={styleSheet.listing_table_th}>price</th>
                        <th style={styleSheet.listing_table_th}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (x) => x + x).map((items) => (
                        <tr key={items} style={{}}>
                          <td style={styleSheet.listing_table_td}>
                            <Avatar src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg" />
                          </td>
                          <td style={styleSheet.listing_table_td}>
                            create full stack mobile app development for your
                            vision
                          </td>
                          <td style={styleSheet.listing_table_td}>$100</td>
                          <td style={styleSheet.listing_table_td}>
                            <IconButton>
                              <Edit htmlColor="green" />
                            </IconButton>
                            <IconButton>
                              <Delete htmlColor="red" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
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
      </Container>
    </div>
  );
};

export default Orders;
