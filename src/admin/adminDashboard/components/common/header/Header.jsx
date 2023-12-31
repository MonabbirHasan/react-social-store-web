/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./header.css";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import { Apps, Message, Notifications } from "@mui/icons-material";
const Header = (props) => {
  const HandleSidebarOpen = () => {
    props.OpenSidebar();
  };
  return (
    <header className="admin_header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <IconButton onClick={HandleSidebarOpen}>
              <Apps htmlColor="black" />
            </IconButton>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Box></Box>
              <Box>
                <IconButton>
                  <Notifications />
                </IconButton>
                <IconButton>
                  <Message />
                </IconButton>
                <IconButton>
                  <Avatar />
                </IconButton>
              </Box>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
