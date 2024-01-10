/* eslint-disable react/prop-types */
import {
  Apps,
  InfoOutlined,
  Language,
  LeakAddOutlined,
  Logout,
  MailOutline,
  MonetizationOn,
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
  List,
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
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
  /*******************************
   * HANDLE SHOW LANGUAGE MODAL
   *******************************/
  const [ShowLanguageModal, setShowLanguageModal] = useState(false);
  const handleCloseLanguageModal = () => setShowLanguageModal(false);
  const handleShowLanguageModal = () => setShowLanguageModal(true);
  return (
    <header className="seller_dashboard_header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
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
                      <Button
                        onClick={() => navigate("/", { replace: true })}
                        fullWidth
                        size="small"
                        variant="outlined"
                      >
                        switch to buyer
                      </Button>
                    </Box>
                    <Box sx={{ paddingRight: 3, mt: 2 }}>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography marginRight={1}>
                          <MonetizationOn />
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography fontSize={"14px"}>Balance</Typography>
                          <Typography fontSize={"14px"}>$3423 USD</Typography>
                        </Stack>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openProfile}
                      >
                        <Typography marginRight={1}>
                          <Person />
                        </Typography>
                        <Typography fontSize={"14px"}>Profile</Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openReferring}
                      >
                        <Typography marginRight={1}>
                          <LeakAddOutlined />
                        </Typography>
                        <Typography fontSize={"14px"}>
                          Refer a Friend
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={someAction}
                      >
                        <Typography marginRight={1}>
                          <Settings />
                        </Typography>
                        <Typography fontSize={"14px"}>Settings</Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={openBillings}
                      >
                        <Typography marginRight={1}>
                          <Payment />
                        </Typography>
                        <Typography fontSize={"14px"}>
                          Billing and payments
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        disableGutters
                        sx={{ p: 1 }}
                        onClick={handleShowLanguageModal}
                      >
                        <Typography marginRight={1}>
                          <Language />
                        </Typography>
                        <Typography fontSize={"14px"}>Language</Typography>
                      </MenuItem>
                      <MenuItem disableGutters sx={{ p: 1 }}>
                        <Typography marginRight={1}>
                          <Logout />
                        </Typography>
                        <Typography fontSize={"14px"}>Logout</Typography>
                      </MenuItem>
                    </Box>
                  </Box>
                </Popover>
              </Box>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*******************************
       * LANGUAGES SELECTIONS MODAL
       ********************************/}
      <Modal show={ShowLanguageModal} onHide={handleCloseLanguageModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <List>
            <MenuItem>
              <LazyLoadImage
                style={{ width: "30px" }}
                src="https://flagsapi.com/BD/shiny/64.png"
              />
              <Typography p={1}>Bangla</Typography>
            </MenuItem>
            <MenuItem>
              <LazyLoadImage
                style={{ width: "30px" }}
                src="https://flagsapi.com/IN/shiny/64.png"
              />
              <Typography p={1}>Hindi</Typography>
            </MenuItem>
            <MenuItem>
              <LazyLoadImage
                style={{ width: "30px" }}
                src="https://flagsapi.com/PK/shiny/64.png"
              />
              <Typography p={1}>Urdu</Typography>
            </MenuItem>
            <MenuItem>
              <LazyLoadImage
                style={{ width: "30px" }}
                src="https://flagsapi.com/US/shiny/64.png"
              />
              <Typography p={1}>English</Typography>
            </MenuItem>
            <MenuItem>
              <LazyLoadImage
                style={{ width: "30px" }}
                src="https://flagsapi.com/SA/shiny/64.png"
              />
              <Typography p={1}>Arabic</Typography>
            </MenuItem>
          </List>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" onClick={handleCloseLanguageModal}>
            Close
          </Button>
          <Button
            sx={{ ml: 3 }}
            variant="outlined"
            onClick={handleCloseLanguageModal}
          >
            Save language
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
