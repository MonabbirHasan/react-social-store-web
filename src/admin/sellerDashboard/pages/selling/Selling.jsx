/* eslint-disable no-unused-vars */
import { Alert, Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Service_Title,
  Instagram,
  Telegram,
  Whatsapp,
  Facebook,
  Youtube,
  Website,
  Twitter,
  Gaming,
  Application,
} from "./index";
import "./selling.css";
const Selling = () => {
  const [Tabsvalue, setTabsvalue] = useState(1);
  const handleChange = (event, newValue) => {
    setTabsvalue(newValue);
    localStorage.setItem("social_service_states", JSON.stringify(newValue));
  };
  useEffect(() => {
    const social_service_states = JSON.parse(
      localStorage.getItem("social_service_states")
    );
    setTabsvalue(social_service_states);
  }, []);
  return (
    <div className="product_menu_tabs">
      <div className="menu_tabls_wrapper">
        <div className="product_tabs">
          <Service_Title title="CREATE NEW LISTING" />
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={Tabsvalue}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value={5} label="youtube" wrapped />
              <Tab value={1} label="facebook" wrapped />
              <Tab value={2} label="instagram" wrapped />
              <Tab value={3} label="telegram" wrapped />
              <Tab value={4} label="twitter" wrapped />
              <Tab value={6} label="BGMI" wrapped />
              <Tab value={7} label="Website" wrapped />
              <Tab value={8} label="Whatsapp" wrapped />
              <Tab value={9} label="Application" wrapped />
            </Tabs>
          </Box>
        </div>
        {/**********************************
         *RANDER ALL TABS COMPONENTS
         ***********************************/}
        <div className="tabs_components">
          {Tabsvalue === 1 ? (
            <Facebook TabTitle={<Service_Title title="Facebook" />} />
          ) : Tabsvalue === 2 ? (
            <Instagram TabTitle={<Service_Title title="Instagram" />} />
          ) : Tabsvalue === 3 ? (
            <Telegram TabTitle={<Service_Title title="Telegram" />} />
          ) : Tabsvalue === 4 ? (
            <Twitter TabTitle={<Service_Title title="Twitter" />} />
          ) : Tabsvalue === 5 ? (
            <Youtube TabTitle={<Service_Title title="Youtube" />} />
          ) : Tabsvalue === 6 ? (
            <Gaming TabTitle={<Service_Title title="Gaming" />} />
          ) : Tabsvalue === 7 ? (
            <Website TabTitle={<Service_Title title="Website" />} />
          ) : Tabsvalue === 8 ? (
            <Whatsapp TabTitle={<Service_Title title="Whatsapp" />} />
          ) : Tabsvalue === 9 ? (
            <Application TabTitle={<Service_Title title="Application" />} />
          ) : (
            <Alert>tab not found</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selling;
