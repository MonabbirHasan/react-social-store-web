/* eslint-disable react/prop-types */
import {
  Apps,
  InfoOutlined,
  Language,
  LeakAddOutlined,
  Logout,
  MailOutline,
  NotificationsOutlined,
  Payment,
  Person,
  Settings,
  VolumeUpSharp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import "./header.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const Header = (props) => {
  const [ShowSellerNotifyMenu, setShowSellerNotifyMenu] = useState(false);
  const handleCloseSellerNotifyMenu = () => setShowSellerNotifyMenu(false);
  const handleShowSellerNotifyMenu = () => setShowSellerNotifyMenu(true);
  /*SELLER HELP MENU CONTROLL*/
  const [SellerHelpMenu, setSellerHelpMenu] = useState(null);
  const handleClickSellerHelpMenu = (event) => {
    setSellerHelpMenu(event.currentTarget);
  };
  const handleCloseSellerHelpMenu = () => {
    setSellerHelpMenu(null);
  };
  const openSellerHelpMenu = Boolean(SellerHelpMenu);
  const id1 = openSellerHelpMenu ? "simple-popover" : undefined;
  /*SELLER PROFILE MENU CONTROLL*/
  const [SellerProfileMenu, setSellerProfileMenu] = useState(null);
  const handleClick = (event) => {
    setSellerProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setSellerProfileMenu(null);
  };
  const open = Boolean(SellerProfileMenu);
  const id2 = open ? "simple-popover" : undefined;
  /************************************
   * SELLER DASHBORD SIDEBAR CONTROL
   ************************************/
  const ShowSellerDashboardSidebar = () => {
    props.ShowSellerSidebarMenu();
  };
  /************************************
   * SEND DATE CHILD TO PARENT
   ************************************/
  const someAction = () => {
    props.openSettings();
  };
  const openProfile = () => {
    props.openProfile();
  };
  const openReferring = () => {
    props.openReferring();
  };
  const openBillings = () => {
    props.openBillings();
  };

  return (
    <header className="seller_dashboard_header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <IconButton onClick={ShowSellerDashboardSidebar}>
              <Apps />
            </IconButton>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/*******************************
             * SELLER INFO MENU START HERE
             ********************************/}
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography></Typography>
              <Box>
                {/*********************************
                 * SELLER NOTIFICATIONS MENU HERE
                 **********************************/}
                <IconButton onClick={handleShowSellerNotifyMenu}>
                  <NotificationsOutlined htmlColor="green" />
                </IconButton>
                <Modal
                  show={ShowSellerNotifyMenu}
                  onHide={handleCloseSellerNotifyMenu}
                  backdrop=""
                  animation={true}
                  size="md"
                  style={{
                    marginLeft: "20%",
                    marginTop: "30px",
                  }}
                >
                  <Modal.Header style={{ padding: 10, margin: 0 }} closeButton>
                    <Modal.Title>Notification</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="seller_notify_menu_body">
                    {Array.from({ length: 30 }, (x) => x + x).map((items) => (
                      <Box
                        key={items}
                        style={{
                          padding: "10px",
                          background: "#eee",
                          borderRadius: 10,
                          display: "flex",
                          cursor: "pointer",
                          margin: "10px 0",
                          border: "2px solid #344",
                        }}
                      >
                        <Button sx={{ mr: 1 }}>
                          <NotificationsOutlined />
                        </Button>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquam, praesentium!
                        </Typography>
                        <Typography fontSize={12}>
                          {new Date().toLocaleDateString()}
                        </Typography>
                      </Box>
                    ))}
                  </Modal.Body>
                  <Modal.Footer style={{ padding: 0, margin: 0 }}>
                    <Stack direction={"row"}>
                      <IconButton>
                        <VolumeUpSharp />
                      </IconButton>
                      <IconButton>
                        <Settings />
                      </IconButton>
                    </Stack>
                  </Modal.Footer>
                </Modal>
                {/****************************
                 * SELLER MESSAGE MENU HERE
                 ***************************/}
                <IconButton>
                  <MailOutline htmlColor="green" />
                </IconButton>
                {/****************************
                 * SELLER HELP MENU HERE
                 ***************************/}
                <IconButton onClick={handleClickSellerHelpMenu}>
                  <InfoOutlined htmlColor="green" />
                </IconButton>
                <Popover
                  id={id1}
                  open={openSellerHelpMenu}
                  anchorEl={SellerHelpMenu}
                  onClose={handleCloseSellerHelpMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <Box sx={{ paddingRight: 3, mt: 2 }}>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Help Center</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Omnifluxs Forum</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Omnifluxs Blogs</Typography>
                      </MenuItem>
                      <Divider component={"p"} />
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Ask the Community</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Contact support</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography>Logout</Typography>
                      </MenuItem>
                    </Box>
                  </Box>
                </Popover>
                {/****************************
                 * SELLER PROFILE MENU HERE
                 ***************************/}
                <IconButton onClick={handleClick}>
                  <Avatar src="https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg" />
                </IconButton>
                <Popover
                  id={id2}
                  open={open}
                  anchorEl={SellerProfileMenu}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <Stack direction={"row"}>
                      <Avatar sx={{ width: "40px", height: "40px" }} />
                      <Box pl={1}>
                        <Typography fontSize={12} textTransform={"capitalize"}>
                          Jhone Doe
                        </Typography>
                        <Typography fontSize={12} textTransform={"capitalize"}>
                          jhon@gmail.com
                        </Typography>
                      </Box>
                    </Stack>
                    <Box pt={2}>
                      <Button fullWidth size="small" variant="outlined">
                        switch to buyer
                      </Button>
                    </Box>
                    <Box sx={{ paddingRight: 3, mt: 2 }}>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openProfile}
                      >
                        <Typography marginRight={1}>
                          <Person />
                        </Typography>
                        <Typography>Profile</Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openReferring}
                      >
                        <Typography marginRight={1}>
                          <LeakAddOutlined />
                        </Typography>
                        <Typography>Refer a Friend</Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={someAction}
                      >
                        <Typography marginRight={1}>
                          <Settings />
                        </Typography>
                        <Typography>Settings</Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openBillings}
                      >
                        <Typography marginRight={1}>
                          <Payment />
                        </Typography>
                        <Typography>Billing and payments</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography marginRight={1}>
                          <Language />
                        </Typography>
                        <Typography>Language</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography marginRight={1}>
                          <Logout />
                        </Typography>
                        <Typography>Logout</Typography>
                      </MenuItem>
                    </Box>
                  </Box>
                </Popover>
              </Box>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
