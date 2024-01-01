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
const Youtube = ({TabTitle}) => {
  const [ChannelCategory, setChannelCategory] = useState("");
  const [CGuidline, setCGuidline] = useState("");
  const [CopyWrite, setCopyWrite] = useState("");
  const [Monetized, setMonetized] = useState("");
  const [Waring, setWaring] = useState("");
  const HandleChangeChannelCategory = (event) => {
    setChannelCategory(event.target.value);
  };
  const HandleChangeCGuidline = (event) => {
    setCGuidline(event.target.value);
  };
  const HandleChangeCopyWrite = (event) => {
    setCopyWrite(event.target.value);
  };
  const HandleChangeWaring = (event) => {
    setWaring(event.target.value);
  };
  const HandleChangeMonetized = (event) => {
    setMonetized(event.target.value);
  };
  return (
    <div className="youtube_listing">
      <div className="youtube_listing_wrapper">
        <Box>{TabTitle}</Box>
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Past Channel Link</FormLabel>
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
          <FormLabel>Choose Category</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ChannelCategory}
            label="chose Category"
            variant="filled"
            onChange={HandleChangeChannelCategory}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Community Guidline</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={CGuidline}
            label="chose Category"
            variant="filled"
            onChange={HandleChangeCGuidline}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>CopyWrite</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={CopyWrite}
            label="CopyWrite"
            variant="filled"
            onChange={HandleChangeCopyWrite}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ pt: 3 }}>
          <FormLabel>Waring</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Waring}
            label="Waring"
            variant="filled"
            onChange={HandleChangeWaring}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
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
            upload channel screenshot
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

export default Youtube;
