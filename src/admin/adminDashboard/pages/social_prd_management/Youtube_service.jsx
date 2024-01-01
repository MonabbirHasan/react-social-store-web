/* eslint-disable no-unused-vars */
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Badge, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Service_Title } from "./";
import { Delete, Edit, LinkSharp, Refresh } from "@mui/icons-material";
const Youtube_service = () => {
  const [ChannelUrl, setChannelUrl] = useState("");
  const [ChannelName, setChannelName] = useState("");
  const [TotalSubscribers, setTotalSubscribers] = useState("");
  const [TotalVideos, setTotalVideos] = useState("");
  const avatarSize = {
    width: "22px",
    height: "22px",
    fontsize: {
      fontSize: "14px",
    },
    tableheadFontSize: {
      fontSize: "12px",
    },
  };
  /***************************************
   * GET YOUTUBE CHANNEL INFO
   ***************************************/
  function getYouTubeChannelInfo(apiKey, channelId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        if (data.items && data.items.length > 0) {
          const channelData = data.items[0];
          const channelName = channelData.snippet.title;
          setChannelName(channelName);
          const totalSubscribers = channelData.statistics.subscriberCount;
          setTotalSubscribers(totalSubscribers);
          const totalVideos = channelData.statistics.videoCount;
          setTotalVideos(totalVideos);
          const viewCount = channelData.statistics.viewCount;
          console.log(
            `Channel Name: ${channelName}, Subscribers: ${totalSubscribers}, Total Videos: ${totalVideos}`
          );
        } else {
          console.log("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  function getChannelId(apiKey, channelName) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      channelName
    )}&type=channel&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelId = data.items[0].snippet.channelId;
          console.log(`Channel ID: ${channelId}`);
          getYouTubeChannelInfo(apiKey, channelId);
        } else {
          console.log("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  const apiKey = "AIzaSyD7E3_-cqtfayhdTkL_Gx5zWdsafDN9cYw";
  getChannelId(apiKey, ChannelUrl);
  /*********************************
   * GENERATE CHANEL VERIFY ID
   *********************************/
  const generateChannelVerifyID = () => {
    const timestamp = new Date().getTime().toString(16); // Convert timestamp to hexadecimal string
    const randomString = Math.random().toString(16).substring(2, 12); // Generate random hexadecimal string
    return `${timestamp}${randomString}`.substring(0, 20); // Combine timestamp and random string, limit to 20 characters
  };
  const customID = generateChannelVerifyID();
  console.log(customID);
  /*********************************
   * GENERATE CUSTOM LISTING ID
   *********************************/
  const [uniqueId, setUniqueId] = useState("OMNlqtianrdsa980s");
  const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36); // Convert timestamp to base36 string
    const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
    const newUniqueId = `OMN${timestamp}${randomString}`; // Combine timestamp and random string
    setUniqueId(newUniqueId);
  };
  return (
    <div className="youtube_service">
      <div className="youtube_service_wrapper">
        <div className="youtube_service_form">
          <Service_Title title="youtube" />
          <InputGroup className="mb-3">
            <InputGroup.Text>Listing Id</InputGroup.Text>
            <Form.Control value={uniqueId} />
            <InputGroup.Text>
              <IconButton onClick={() => generateUniqueId()}>
                <Refresh />
              </IconButton>
            </InputGroup.Text>
          </InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="Channel url"
            className="mb-3"
          >
            <Form.Control
              onKeyUp={(e) => setChannelUrl(e.target.value)}
              type="text"
            />
          </FloatingLabel>
          <InputGroup>
            <FloatingLabel
              controlId="floatingInput"
              label="Channel Name"
              className="mb-3"
            >
              <Form.Control value={TotalSubscribers} type="text" />
            </FloatingLabel>
          </InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="Channel Type"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="How Many Videos?"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Channel Conent Max/Min Length"
            className="mb-3"
          >
            <Form.Control type="url" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Creation Date"
            className="mb-3"
          >
            <Form.Control type="datetime-local" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="language"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Total Subscribers"
            className="mb-3"
          >
            <Form.Control type="url" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Lifetime Earning"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Life Time Views"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Views(Last 28 Days)"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Watch Time"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Life Time Revenue"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Revenue(Last 28 Days)"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Real-time Views"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Channel Price $"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Channel Gallery"
            className="mb-3"
          >
            <Form.Control type="file" />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Channel Category"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Gaming</option>
              <option value="1">Sports</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Verified?"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Yes</option>
              <option value="1">No.</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Monetized?"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Yes</option>
              <option value="1">No.</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Promotion Methods Used?"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Organic</option>
              <option value="1">S4S</option>
              <option value="1">Follow Unfollow</option>
              <option value="1">Engagement Networks</option>
              <option value="1">other</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              save service
            </Button>
          </Box>
        </div>
        <div className="youtube_service_table">
          <Service_Title title="services" />
          <TableContainer
            component={Paper}
            elevation={0}
            className="youtube_data_table"
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    listing id
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    gallery
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    channel name
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    channel type
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    channel url
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    total vidoe
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    content length
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    creation date
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    language
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    subscribers
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    lifetime views
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    last month views
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    watch time
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    lifetime revenue
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    last month revenue
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    realtime views
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    channel price
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    category
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    verified
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    monetized
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    promotion method
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    description
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    status
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">OMN23423</TableCell>
                  <TableCell align="right">
                    <AvatarGroup max={5}>
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">@aranoze</TableCell>
                  <TableCell align="right">long video</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <LinkSharp />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">209</TableCell>
                  <TableCell align="right">30min to 1hr</TableCell>
                  <TableCell align="right">20 jan 2023</TableCell>
                  <TableCell align="right">hindi</TableCell>
                  <TableCell align="right">20k</TableCell>
                  <TableCell align="right">40m</TableCell>
                  <TableCell align="right">40k</TableCell>
                  <TableCell align="right">50k hr</TableCell>
                  <TableCell align="right">$3234</TableCell>
                  <TableCell align="right">$1143</TableCell>
                  <TableCell align="right">20k</TableCell>
                  <TableCell align="right">$50k</TableCell>
                  <TableCell align="right">gaming</TableCell>
                  <TableCell align="right">
                    <Badge>yes</Badge>
                  </TableCell>
                  <TableCell align="right">
                    <Badge>yes</Badge>
                  </TableCell>
                  <TableCell align="right">organic</TableCell>
                  <TableCell align="right">lorem...</TableCell>
                  <TableCell align="right">
                    <Badge bg="success">active</Badge>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction={"row"}>
                      <IconButton>
                        <Edit htmlColor="green" sx={{ fontSize: "14px" }} />
                      </IconButton>
                      <IconButton>
                        <Delete htmlColor="red" sx={{ fontSize: "14px" }} />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Youtube_service;
