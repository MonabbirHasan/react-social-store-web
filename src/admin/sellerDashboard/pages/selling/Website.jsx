/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Image } from "@mui/icons-material";
import React, { useState } from "react";
const Website = ({ TabTitle }) => {
  const [FacebookCategory, setFacebookCategory] = useState("");
  const [FacebookStatus, setFacebookStatus] = useState("");
  const [TechStack, setTechStack] = useState("");
  const HandleChangeFacebookCategory = (event) => {
    setFacebookCategory(event.target.value);
  };
  const HandleChangeFacebookStatus = (event) => {
    setFacebookStatus(event.target.value);
  };
  const HandleChangeTechStack = (event) => {
    setTechStack(event.target.value);
  };
  return (
    <div className="website_listing">
      <div className="website_listing_wrapper">
        <Box>{TabTitle}</Box>
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Website Link</FormLabel>
          <TextField
            labelId="demo-simple-input-label"
            onChange={{}}
            color="success"
            variant="filled"
            label=""
            size="small"
          />
        </FormControl>
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Price</FormLabel>
          <TextField
            labelId="demo-simple-input-label"
            onChange={{}}
            color="success"
            variant="filled"
            label=""
            size="small"
          />
          <smalll style={{ fontSize: "12px" }}>
            Separate With Currency Symbal
          </smalll>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Website Type</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={FacebookStatus}
            label="Chose Category"
            variant="filled"
            onChange={HandleChangeFacebookStatus}
          >
            <MenuItem value={1}>News Blog</MenuItem>
            <MenuItem value={2}>EnterTainment</MenuItem>
            <MenuItem value={3}>Educational</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Choose Category</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={FacebookCategory}
            label="chose Category"
            variant="filled"
            onChange={HandleChangeFacebookCategory}
          >
            <MenuItem value={1}>Youtube</MenuItem>
            <MenuItem value={2}>Facebook</MenuItem>
            <MenuItem value={3}>Instagram</MenuItem>
            <MenuItem value={4}>Telegram</MenuItem>
            <MenuItem value={5}>BGMI</MenuItem>
            <MenuItem value={5}>Website</MenuItem>
            <MenuItem value={5}>Applications</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Tech Stack</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={TechStack}
            label="chose Category"
            variant="filled"
            onChange={HandleChangeTechStack}
          >
            <MenuItem value={1}>WordPress</MenuItem>
            <MenuItem value={2}>Wix</MenuItem>
            <MenuItem value={3}>WebFlow</MenuItem>
            <MenuItem value={4}>BigCommerce</MenuItem>
            <MenuItem value={5}>Shopify</MenuItem>
            <MenuItem value={5}>Bloggers</MenuItem>
            <MenuItem value={5}>Custom</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Descriptions</FormLabel>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={10}
            defaultValue=""
            variant="filled"
          />
        </FormControl>
        <FormControl fullWidth sx={{ pt: 2 }}>
          <FormLabel sx={{ py: 1, textTransform: "capitalize", color: "gray" }}>
            Uplaod Thumnail
          </FormLabel>
          <Stack direction={"row"}>
            <Box width={"100%"}>
              <Avatar
                style={{
                  width: "100%",
                  height: "130px",
                  margin: "0px",
                  borderRadius: "5px",
                  border: "2px dashed #333",
                  cursor: "pointer",
                  backgroundColor: "#eee",
                }}
              >
                <Image htmlColor="green" />
              </Avatar>
            </Box>
          </Stack>
        </FormControl>
        <FormControl sx={{ py: 2 }}>
          <Button variant="contained">save listing</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Website;
