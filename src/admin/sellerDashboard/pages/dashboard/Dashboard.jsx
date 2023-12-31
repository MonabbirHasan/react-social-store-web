/* eslint-disable no-undef */
import ProductCard from "../../../../clients/components/product_cards/ProductCard";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Search, Sort } from "@mui/icons-material";
import "./dashboard.css";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Pagination as MUIPaginations,
} from "@mui/material";
const Dashboard = () => {
  const image_obj = [
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290482973/original/8fad458c759af4a2d652d777c2cfd4d491d2c35e/create-website-banner-designs-and-amazon-product-design.jpg",
    },
  ];
  return (
    <div className="seller_dashboard_page">
      <Container fluid>
        {/*************************************
         * PRODUCT FILTER SECTION START HERE
         **************************************/}
        <div className="product_filters">
          <section className="product_filter_wrapper">
            <div className="product_filter_form">
              <FormControl fullWidth>
                <FormLabel>search by name</FormLabel>
                <TextField size="small" fullWidth variant="filled" />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>select subject</FormLabel>
                <Select size="small" fullWidth label="" variant="filled">
                  <MenuItem>youtube</MenuItem>
                  <MenuItem>instagram</MenuItem>
                  <MenuItem>facebook</MenuItem>
                  <MenuItem>twitter</MenuItem>
                  <MenuItem>telegram</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>Verified identity</FormLabel>
                <Select size="small" fullWidth variant="filled">
                  <MenuItem>yes</MenuItem>
                  <MenuItem>default</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>Monetization enabled</FormLabel>
                <Select size="small" fullWidth variant="filled">
                  <MenuItem>yes</MenuItem>
                  <MenuItem>default</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>Verified listings</FormLabel>
                <Select size="small" fullWidth variant="filled">
                  <MenuItem>yes</MenuItem>
                  <MenuItem>default</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/**************************************
             * PRODUCT FILTER SECTION START HERE
             ***************************************/}
            <Stack className="product_short_filter_form">
              <InputGroup>
                <InputGroup.Text>subscriber</InputGroup.Text>
                <Form.Control placeholder="from" />
                <Form.Control placeholder="to" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Price</InputGroup.Text>
                <Form.Control placeholder="from" />
                <Form.Control placeholder="to" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Income</InputGroup.Text>
                <Form.Control placeholder="from" />
                <Form.Control placeholder="to" />
              </InputGroup>
            </Stack>
            {/**************************************
             * PRODUCT SORTS SECTION START HERE
             ***************************************/}
            <Stack direction={"row"} pb={1} pt={3}>
              <Sort />
              <Box display={"flex"} sx={{ textTransform: "capitalize" }}>
                <MenuItem>
                  <Chip label="subscriber" />
                </MenuItem>
                <MenuItem>
                  <Chip label="income" />
                </MenuItem>
                <MenuItem>
                  <Chip label="price" />
                </MenuItem>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button variant="outlined" size="large" startIcon={<Search />}>
                Search
              </Button>
            </Box>
          </section>
        </div>
        {/**********************************
         * SELLER DASHBOARD PRODUCT
         ***********************************/}
        <div className="seller_dashboard_product">
          <Row lg={4}>
            {Array.from({ length: 12 }, (x) => x + x).map((items) => (
              <Col key={items}>
                <ProductCard
                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                  listing_id="OM32343"
                  price={"$" + 233}
                  thumbnail_arr={image_obj}
                  product_views={100032}
                  product_categry={1}
                />
              </Col>
            ))}
          </Row>
        </div>
        {/*****************************************
         * SELLER DASHBOARD PRODUCT PAGINATIONS
         ******************************************/}
        <div className="seller_dashboard_paginations">
          <MUIPaginations count={10} variant="outlined" />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
