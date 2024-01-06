/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./chat_room.css";
import { Form } from "react-bootstrap";
import { Discuss } from "react-loader-spinner";
import Header from "../../components/common/header/Header";
import {
  ArrowCircleLeft,
  EmojiEmotions,
  EmojiNature,
  MoreHoriz,
  Search,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
const ChatRoom = () => {
  const [ChatId, setChatId] = useState("");
  const [OpenCloseLeftSidebar, setOpenCloseLeftSidebar] = useState(false);
  const [OpenCloseRightSidebar, setOpenCloseRightSidebar] = useState(false);
  const [OpenCloseChatBody, setOpenCloseChatBody] = useState("none");
  // media query in jsx
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 480px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const ControllOpenChatLeftSidebar = () => {
    !matches ? setOpenCloseLeftSidebar(true) : setOpenCloseLeftSidebar(false);
    setOpenCloseChatBody("block");
  };
  const ControllOpenChatRightSidebar = () => {
    !matches ? setOpenCloseRightSidebar(true) : setOpenCloseRightSidebar(false);
    setOpenCloseChatBody("none");
  };
  //jsx stylesheet here
  const StyleSheet = {
    paragraph_style: {
      fontSize: "14px",
      color: "white",
      textTransform: "capitalize",
    },
  };

  const messages = [
    {
      id: 2,
      name: "Alex",
      picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
      latest_timestamp: "10:00 AM",
      lastChat:
        "Or maybe not, let me check logistics and call you. Give me sometime",
    },
    {
      id: 3,
      name: "Bob",
      picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
      latest_timestamp: "12:30 AM",
      lastChat: "Alright",
    },
    {
      id: 4,
      name: "Luke",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      latest_timestamp: "4:12 PM",
      lastChat: "I will look into it",
    },
    {
      id: 5,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      latest_timestamp: "7:53 PM",
      lastChat: "Exactly my point!",
    },
    {
      id: 6,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      latest_timestamp: "1:09 PM",
      lastChat: "Not quite the same.",
    },
    {
      id: 7,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      latest_timestamp: "Yesterday",
      lastChat: "I thought that the event was over long ago",
    },
    {
      id: 8,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      latest_timestamp: "Yesterday",
      lastChat: "nothing",
    },
    {
      id: 9,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      latest_timestamp: "Wednesday",
      lastChat: "sure i'll take it from you",
    },
    {
      id: 10,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      latest_timestamp: "Wednesday",
      lastChat: "Take care, bye",
    },
    {
      id: 11,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      latest_timestamp: "Monday",
      lastChat: "Not today",
    },
    {
      id: 12,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      latest_timestamp: "Sunday",
      lastChat: "Whatever works for you!",
    },
    {
      id: 13,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      latest_timestamp: "8/12/2017",
      lastChat: "Will get in touch",
    },
    {
      id: 14,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      latest_timestamp: "6/12/2017",
      lastChat: "Ok",
    },
    {
      id: 15,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      latest_timestamp: "19/11/2017",
      lastChat: "Lol",
    },
  ];
  return (
    <>
      <Header />
      <div className="chat_room">
        <div className="chat_room_wrapper">
          {/*CHAT LEFT SIDEBAR START HERE*/}
          <div
            className="chat_list"
            style={{
              display: !matches
                ? OpenCloseLeftSidebar === true
                  ? "none"
                  : ""
                : "",
            }}
          >
            <div className="chat_list_search">
              <Form.Control placeholder="Search Seller!" />
              <IconButton variant="contained" sx={{ ml: 1 }}>
                <Search htmlColor="green" />
              </IconButton>
            </div>
            <div className="chat_list_wrapper">
              {messages.map((items) => (
                <MenuItem
                  id="chat_list_wrapper"
                  onClick={() => {
                    setChatId(items.id);
                    ControllOpenChatLeftSidebar();
                  }}
                  key={items.id}
                  style={{
                    background: "#00bf59",
                    "&:hover": { background: "#1a9f58" },
                    borderRadius: "10px",
                    margin: "5px 0",
                  }}
                >
                  <div className="chat_list_item">
                    <Avatar
                      sx={{ border: "2px solid #fff" }}
                      src={items.picture}
                    />
                    <Box>
                      <Typography sx={StyleSheet.paragraph_style}>
                        {items.name}
                      </Typography>
                      <Typography sx={StyleSheet.paragraph_style}>
                        Typing...
                      </Typography>
                    </Box>
                  </div>
                </MenuItem>
              ))}
            </div>
            <div
              className="chat_list_item"
              style={{
                marginTop: "10px",
                backgroundColor: "green",
                padding: "5px",
              }}
            >
              <Avatar
                src="https://image.ibb.co/eLVWbw/katie_1.jpg"
                sx={{ border: "2px solid #fff" }}
              />
              <Box>
                <Typography sx={StyleSheet.paragraph_style}>
                  Jhone Agent
                </Typography>
                <Typography sx={StyleSheet.paragraph_style}>Agent</Typography>
              </Box>
            </div>
          </div>
          {/*CHAT BODY START HERE*/}
          <div
            className="chat_body"
            style={{
              display: OpenCloseLeftSidebar === true ? "block" : "",
            }}
          >
            <div className="chat_header">
              <IconButton
                sx={{ display: !OpenCloseLeftSidebar ? "none" : "" }}
                onClick={() => {
                  setOpenCloseLeftSidebar(false);
                }}
              >
                <ArrowCircleLeft htmlColor="white" />
              </IconButton>
              {!OpenCloseLeftSidebar ? (
                <>
                  <Discuss
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="discuss-loading"
                    wrapperStyle={{}}
                    wrapperClass="discuss-wrapper"
                    color="white"
                    backgroundColor="white"
                  />
                </>
              ) : (
                ""
              )}
              <IconButton
                sx={{ display: !OpenCloseLeftSidebar ? "none" : "" }}
                onClick={() => ControllOpenChatRightSidebar()}
              >
                <MoreHoriz htmlColor="white" />
              </IconButton>
            </div>
            {ChatId ? (
              <>
                <div className="chat_box">
                  {messages.map((items) => (
                    <Box key={items.id}>
                      <div className="sender">
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Avatar
                            src={items.picture}
                            sx={{ textAlign: "right" }}
                          />
                          <Typography component={"h3"}></Typography>
                        </Stack>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta quos unde, consequuntur totam optio
                          deleniti numquam culpa explicabo quibusdam doloribus
                          sequi. Ea qui ipsa voluptatem atque? Et nulla ullam
                          facilis.
                        </p>
                      </div>
                      <div className="receiver">
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography component={"h3"}></Typography>
                          <Avatar
                            src={items.picture}
                            sx={{ textAlign: "right" }}
                          />
                        </Stack>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum vitae aspernatur aperiam quam
                          exercitationem doloribus.
                        </p>
                      </div>
                    </Box>
                  ))}
                </div>
              </>
            ) : (
              <Box
                sx={{
                  padding: "10px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EmojiEmotions sx={{ fontSize: "4rem", color: "gray" }} />
                <Typography
                  fontSize={"2rem"}
                  textTransform={"capitalize"}
                  fontWeight={"600"}
                  color={"gray"}
                >
                  select a chat
                </Typography>
                <EmojiNature sx={{ fontSize: "4rem", color: "gray" }} />
              </Box>
            )}
          </div>
          {/*CHAT RIGHT SIDEBAR START HERE*/}
          <div
            className="chat_right_side"
            style={{
              display: !matches
                ? OpenCloseLeftSidebar === true
                  ? "block"
                  : "none"
                : "",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                src="https://image.ibb.co/k0wVTm/profile_pic.jpg"
                sx={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  marginTop: "5vh",
                  border: "4px solid #fff",
                }}
              />
              <Typography
                fontSize={"16px"}
                fontWeight={"600"}
                textAlign={"center"}
                pt={2}
                color={"gray"}
              >
                Jhone Doe
              </Typography>
              <Rating readOnly name="read-only" value={3} />
              <Divider component={"p"} />
            </Box>
            <div className="seller_listing_in_chats">
              {Array.from({ length: 20 }, (x) => x + x).map((items) => (
                <div className="listing_item" key={items}>
                  <Stack direction={"row"} spacing={2}>
                    <Avatar
                      src="https://cdn.kwork.com/pics/t3/70/24883104-63d4203e280ab.jpg"
                      sx={{
                        borderRadius: "5px",
                        width: "90px",
                        height: "65px",
                      }}
                    />
                    <Typography
                      color={"white"}
                      textTransform={"capitalize"}
                      fontSize={"14px"}
                    >
                      monetized youtube Channel for sell
                      <Button
                        variant=""
                        sx={{
                          color: "white",
                          fontSize: "12px",
                          backgroundColor: "black",
                          mt: 0,
                          padding: "1px 5px ",
                          textTransform: "capitalize",
                        }}
                      >
                        create a deal
                      </Button>
                    </Typography>
                  </Stack>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
