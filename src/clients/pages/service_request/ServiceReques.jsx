/* eslint-disable no-unused-vars */
import Header from "../../components/common/header/Header";
import { Container } from "react-bootstrap";
import "./service_request.css";
import "../../../assets/css/responsive.css";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
const ServiceReques = () => {
  const [SelectService, setSelectService] = React.useState("");
  const handleChangeSelectService = (event) => {
    setSelectService(event.target.value);
  };
  return (
    <>
      <Header />
      <div className="service_request">
        <Container>
          <div className="service_request_wrapper">
            <Box>
              <Typography
                sx={{
                  pb: 2,
                  textTransform: "capitalize",
                  color: "#919191",
                  fontFamily: "fantasy!important",
                  letterSpacing: "2px",
                  fontSize: "2rem",
                }}
              >
                Send Your query
              </Typography>
            </Box>
            <FormControl fullWidth>
              <TextField
                variant="filled"
                size="small"
                label="Enter Your Name"
              />
            </FormControl>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={SelectService}
                onChange={handleChangeSelectService}
                variant="filled"
                size="small"
                sx={{
                  my: 1,
                }}
              >
                <MenuItem value={1}>Applications</MenuItem>
                <MenuItem value={2}>Website</MenuItem>
                <MenuItem value={3}>Telegram</MenuItem>
                <MenuItem value={4}>Twitter</MenuItem>
                <MenuItem value={5}>Instagram</MenuItem>
                <MenuItem value={6}>Facebook</MenuItem>
                <MenuItem value={7}>Youtube</MenuItem>
                <MenuItem value={8}>Twenty</MenuItem>
                <MenuItem value={9}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                variant="filled"
                rows={5}
                multiline
                label="Enter Your Name"
              />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <Button variant="contained" endIcon={<Send />}>
                Send
              </Button>
            </FormControl>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServiceReques;
