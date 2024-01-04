/* eslint-disable no-unused-vars */
import { GppMaybeOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
const Accounts = () => {
  const [Kyc, setKyc] = useState(false);
  return (
    <div>
      <Box>
        <Form.Label htmlFor="basic-url">FULL NAME</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Form.Label htmlFor="basic-url">EMAIL</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Button variant="primary">Save Changes</Button>
      </Box>
      <Stack sx={{ padding: "10px 0" }} direction={"row"}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Deactive My Accounts"
        />
      </Stack>
      {/*KYC VERIFICATION SECTIONS START HERE*/}
      <section className="kyc">
        <Stack sx={{ width: "100%" }}>
          <Avatar
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
              background: "transparent",
            }}
          >
            {Kyc === false ? (
              <GppMaybeOutlined
                sx={{ fontSize: "10rem", color: "dodgerblue" }}
              />
            ) : (
              <VerifiedUserOutlined
                sx={{ fontSize: "10rem", color: "dodgerblue" }}
              />
            )}
          </Avatar>
          <Typography
            textTransform={"capitalize"}
            fontSize={"20px"}
            color={"#232"}
            textAlign={"center"}
            fontWeight={"600"}
            pt={1}
          >
            verify your identity
          </Typography>
          <Typography
            textTransform={"capitalize"}
            fontSize={"14px"}
            color={"#444"}
            textAlign={"center"}
            fontWeight={"600"}
            pt={1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            minima.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "#fff",
            display: "inline-block",
            padding: "10px",
            borderRadius: "10px",
            margin: "0 5px",
            width: "100%",
          }}
        >
          <LazyLoadImage src="https://img.icons8.com/emoji/200/identification-card-emoji.png" />
          <Button fullWidth variant="contained">
            front image
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "#fff",
            display: "inline-block",
            padding: "10px",
            borderRadius: "10px",
            margin: "0 5px",
            width: "100%",
          }}
        >
          <LazyLoadImage src="https://img.icons8.com/emoji/200/identification-card-emoji.png" />
          <Button fullWidth variant="contained">
            back image
          </Button>
        </Stack>
      </section>
    </div>
  );
};

export default Accounts;
