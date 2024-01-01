/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Cloud, Delete, Image } from "@mui/icons-material";
import React, { useState } from "react";
const Instagram = ({TabTitle}) => {
  const [FacebookCategory, setFacebookCategory] = useState("");
  const [Monetized, setMonetized] = useState("");
  const [FacebookStatus, setFacebookStatus] = useState("");
  const HandleChangeFacebookCategory = (event) => {
    setFacebookCategory(event.target.value);
  };
  const HandleChangeMonetized = (event) => {
    setMonetized(event.target.value);
  };
  const HandleChangeFacebookStatus = (event) => {
    setFacebookStatus(event.target.value);
  };
  return (
    <div className="instagram_listing">
      <div className="instagram_listing_wrapper">
      <Box>{TabTitle}</Box>
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Past profile, page, or group Link</FormLabel>
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
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Monthly Income</FormLabel>
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
          <FormLabel>Page status</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={FacebookStatus}
            label="Chose Category"
            variant="filled"
            onChange={HandleChangeFacebookStatus}
          >
            <MenuItem value={1}>Green</MenuItem>
            <MenuItem value={2}>Yellow</MenuItem>
            <MenuItem value={3}>Red</MenuItem>
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
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Monetized</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Monetized}
            label="Monetized"
            variant="filled"
            onChange={HandleChangeMonetized}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
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
        <FormControl fullWidth sx={{ py: 3 }}>
          <FormLabel
            sx={{
              textTransform: "capitalize",
              pb: 2,
              fontWeight: "500",
              color: "gray",
            }}
          >
            upload screenshot
          </FormLabel>
          <Stack direction={"row"} mx={0} spacing={0}>
            <input type="file" id="channel_gallery" hidden />
            <Button size="small" variant="contained" startIcon={<Cloud />}>
              <label htmlFor="channel_gallery">Upload file</label>
            </Button>
            <Divider sx={{ px: 1 }} />
            <Button
              size="small"
              style={{ color: "red", borderColor: "red" }}
              variant="outlined"
              startIcon={<Delete />}
            >
              delete file
            </Button>
          </Stack>
          <Stack direction={"row"} paddingX={0} spacing={1} pt={2}>
            {Array.from({ length: 5 }, (x) => x + x).map((items) => (
              <Box key={items}>
                <Avatar
                  style={{
                    width: "100%",
                    height: "130px",
                    margin: "0px",
                    borderRadius: "5px",
                    border: "2px solid #eee",
                  }}
                  src="https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg"
                />
              </Box>
            ))}
          </Stack>
        </FormControl>
        <FormControl sx={{ py: 2 }}>
          <Button variant="contained">save listing</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Instagram;
