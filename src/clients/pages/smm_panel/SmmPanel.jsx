/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PageTitle from "../../components/Page_title/PageTitle";
import yt_shop_banner from "../../../assets/img/banner1.png";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import { Container } from "react-bootstrap";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Stack,
  TextField,
  FormLabel,
  Chip,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  WhatsApp,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import { smm_data } from "../../../utils/smm_data";
import "./smmpanel.css";
const SmmPanel = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [liveSearch, setLiveSearch] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [Quentity, setQuentity] = useState();
  // Filter services based on the selected platform
  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    // Filter services based on the selected platform
    const filtered = smm_data.filter((item) => item.platform === platform);
    setFilteredServices(filtered);
    setSelectedService(""); // Reset selected service when platform changes
  };
  // Handle selection of service type
  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
  };
  // extands tags
  const Extands_tags = (tags) => {
    const exd_tag = tags.split(",");
    return exd_tag;
  };
  //calculate total price
  const calculate_price = (unit_price) => {
    return eval(Quentity * unit_price);
  };
  //tags background color array
  const colors = [
    "#7DF9FF",
    "#FF6EC7",
    "#7D5BF0",
    "#FFFF00",
    "#B768A2",
    "#45CDCB",
    "#FFD300",
    "##FF2400",
    "#005F9E",
    "#FFC152",
    "#2196f3",
  ];
  //service search live
  let timeoutId;
  const live_search = () => {
    clearTimeout(timeoutId);
    const searchValue = liveSearch.toLowerCase();
    // Debouncing - wait for 300 milliseconds after the user stops typing
    timeoutId = setTimeout(() => {
      const filteredData = smm_data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue) ||
          item.type.toLowerCase().includes(searchValue) ||
          item.tags.toLowerCase().includes(searchValue)
      );
      console.log(filteredData)
    }, 300);
  };
  live_search();

  return (
    <>
      <Header />
      <div className="smm_panel">
        <Container>
          <div className="smm_wrapper">
            <PageTitle title="find your service" />
            <TextField
              onInput={(e) => setLiveSearch(e.target.value)}
              fullWidth
              variant="filled"
              size="small"
              label="search service!"
            />
            <FormControl fullWidth style={{ paddingTop: "20px" }}>
              <FormLabel>Platform</FormLabel>
              <Select
                value={selectedPlatform}
                onChange={handlePlatformChange}
                variant="filled"
                size="small"
              >
                <MenuItem value="whatsapp">
                  <Typography pr={1}>
                    <WhatsApp htmlColor="green" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>whatsapp</Typography>
                </MenuItem>
                <MenuItem value="twitter">
                  <Typography pr={1}>
                    <Twitter htmlColor="dodgerblue" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>twitter</Typography>
                </MenuItem>
                <MenuItem value="telegram">
                  <Typography pr={1}>
                    <Telegram htmlColor="dodgerblue" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>telegram</Typography>
                </MenuItem>
                <MenuItem value="instagram">
                  <Typography pr={1}>
                    <Instagram htmlColor="purple" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>
                    instagram
                  </Typography>
                </MenuItem>
                <MenuItem value="facebook">
                  <Typography pr={1}>
                    <Facebook htmlColor="dodgerblue" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>facebook</Typography>
                </MenuItem>
                <MenuItem value="youtube">
                  <Typography pr={1}>
                    <YouTube htmlColor="red" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>youtube</Typography>
                </MenuItem>
                <MenuItem value="linkedin">
                  <Typography pr={1}>
                    <LinkedIn htmlColor="#2196f3" />
                  </Typography>
                  <Typography textTransform={"capitalize"}>linkedin</Typography>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ paddingTop: "20px" }}>
              <FormLabel>Service</FormLabel>
              <Select
                value={selectedService}
                onChange={handleServiceChange}
                variant="filled"
                size="small"
              >
                {filteredServices.map((service, index) => (
                  <MenuItem key={index} value={service.type}>
                    {service.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ paddingTop: "20px" }}>
              <FormLabel>Description</FormLabel>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                {selectedService && (
                  <div>
                    <Typography
                      variant="h5"
                      py={2}
                      textTransform={"capitalize"}
                    >
                      Details for {selectedService} on {selectedPlatform}
                    </Typography>
                    {/* Display details for the selected service */}
                    {filteredServices
                      .filter((service) => service.type === selectedService)
                      .map((details, index) => (
                        <div key={index}>
                          <Typography textTransform={"capitalize"}>
                            Type: {details.type}
                          </Typography>
                          <Typography textTransform={"capitalize"}>
                            Price $: {details.price_per_unit}
                          </Typography>
                          <Typography textTransform={"capitalize"}>
                            total Price $:{" "}
                            {calculate_price(details.price_per_unit)}
                          </Typography>
                          <Typography textTransform={"capitalize"}>
                            time: {details.delivery_time}
                          </Typography>
                          <Typography textTransform={"capitalize"}>
                            min quantity: {details.min_quantity}
                          </Typography>
                          <Typography textTransform={"capitalize"}>
                            max quantity: {details.max_quantity}
                          </Typography>
                          <Typography pt={1} textTransform={"lowercase"}>
                            {Extands_tags(details.tags).map((tag) => (
                              <Chip
                                style={{
                                  margin: "2px",
                                  backgroundColor:
                                    colors[
                                      Math.floor(Math.random() * colors.length)
                                    ],
                                  color: "#111",
                                }}
                                label={tag}
                              />
                            ))}
                          </Typography>
                          {/* Display other relevant fields */}
                        </div>
                      ))}
                  </div>
                )}
              </Box>
            </FormControl>
            <FormControl sx={{ pt: 2 }} fullWidth>
              <FormLabel>Enter The Link</FormLabel>
              <TextField fullWidth variant="filled" size="small" />
            </FormControl>
            <FormControl sx={{ pt: 2 }} fullWidth>
              <FormLabel>Quantity</FormLabel>
              <TextField
                onChange={(e) => setQuentity(e.target.value)}
                fullWidth
                variant="filled"
                size="small"
              />
            </FormControl>
            <FormControl sx={{ pt: 2 }}>
              <Button variant="contained">Order Now</Button>
            </FormControl>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SmmPanel;
