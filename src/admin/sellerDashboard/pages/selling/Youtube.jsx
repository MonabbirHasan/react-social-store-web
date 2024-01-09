/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Cloud, CopyAll, Delete, Image } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import YouTubeChannelInfo from "../../../../utils/youtubedata";
import { formatNumber } from "../../../../utils/formatNumber";
const Youtube = ({ TabTitle }) => {
  const [channel_url, setChannel_url] = useState("");
  const [ChannelCategory, setChannelCategory] = useState("");
  const [CGuidline, setCGuidline] = useState("");
  const [CopyWrite, setCopyWrite] = useState("");
  const [Monetized, setMonetized] = useState("");
  const [Waring, setWaring] = useState("");
  const [HiddenSubscriberCount, setHiddenSubscriberCount] = useState("");
  const [ChannelCustomUrl, setChannelCustomUrl] = useState("");
  const [SubscriberCount, setSubscriberCount] = useState("");
  const [DefaultLanguage, setDefaultLanguage] = useState("");
  const [ChannelCountry, setChannelCountry] = useState("");
  const [PublishedAt, setPublishedAt] = useState("");
  const [VideoCount, setVideoCount] = useState("");
  const [ViewCount, setViewCount] = useState("");
  const [LikesCount, setLikesCount] = useState("");
  //ALL INPUT AND SELECT BOX CHANGE CONTROLL
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
  /**********************************
   *FETCH YOUTUBE CHANNEL INFO
   **********************************/
  async function find_channel_data() {
    if (channel_url === "") {
      alert("please provide channel url");
    } else {
      const youtubeChannelURL = channel_url;
      const apiKey = "AIzaSyD2SU-XlHt237OrI8wmAj1OH-wW7Mjpa0I";
      const youtubeInfo = new YouTubeChannelInfo(apiKey, youtubeChannelURL);
      await youtubeInfo.fetchChannelInfo().then((channelData) => {
        const hiddenSubscriberCount =
          channelData.statistics.hiddenSubscriberCount;
        const totalLikes = channelData.statistics.likeCount;
        const subscriberCount = channelData.statistics.subscriberCount;
        const defaultLanguage = channelData.snippet.defaultLanguage;
        const videoCount = channelData.statistics.videoCount;
        const publishedAt = channelData.snippet.publishedAt;
        const viewCount = channelData.statistics.viewCount;
        const customUrl = channelData.snippet.customUrl;
        const country = channelData.snippet.country;
        setHiddenSubscriberCount(hiddenSubscriberCount);
        setDefaultLanguage(defaultLanguage);
        setSubscriberCount(subscriberCount);
        setChannelCustomUrl(customUrl);
        setPublishedAt(publishedAt);
        setChannelCountry(country);
        setVideoCount(videoCount);
        setLikesCount(totalLikes);
        setViewCount(viewCount);
      });
    }
  }

  return (
    <div className="youtube_listing">
      <div className="youtube_listing_wrapper">
        <Box>{TabTitle}</Box>
        <FormControl fullWidth sx={{ py: 1 }}>
          <FormLabel>Past Channel Link</FormLabel>
          <Stack direction={"row"}>
            <TextField
              fullWidth
              labelId="demo-simple-input-label"
              value={channel_url}
              onChange={(e) => setChannel_url(e.target.value)}
              color="success"
              variant="filled"
              label=""
              size="small"
            />
            <Button onClick={find_channel_data} variant="outlined">
              Find
            </Button>
          </Stack>
        </FormControl>
        <Chip label={ChannelCustomUrl} />
        <Chip label={"Subscriber " + formatNumber(SubscriberCount)} />
        <Chip label={"Video " + VideoCount} />
        <Chip label={"View " + formatNumber(ViewCount)} />
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
        <FormControl fullWidth sx={{ py: 3 }}>
          <FormLabel
            sx={{
              textTransform: "capitalize",
              pb: 2,
              fontWeight: "500",
              color: "gray",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            deserunt alias consequuntur animi. Tempore ad pariatur, iste enim
            beatae ipsam quam id veniam nam sunt. Maiores asperiores velit
            mollitia facere.
          </FormLabel>
          <Stack direction={"row"}>
            <Form.Control
              readOnly
              value="956b6e7cb7956b6e7cb7956b6e7cb7956b6e7cb7956b6e7cb7956b6e7cb7956b6e7cb7"
              style={{ backgroundColor: "#eee", border: "none" }}
            />
            <IconButton>
              <CopyAll htmlColor="green" />
            </IconButton>
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
