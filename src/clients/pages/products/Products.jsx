import ProductCard from "../../components/product_cards/ProductCard";
import Header from "../../components/common/header/Header";
import {
  Col,
  Container,
  Form,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../../../assets/css/responsive.css";
import "./products.css";
import {
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Pagination as MUIPaginations,
} from "@mui/material";
import { Search, Sort } from "@mui/icons-material";
const Products = () => {
  const image_obj = [
    {
      img: "https://images.nightcafe.studio/jobs/5DdUMvtbush0toMG9QJZ/5DdUMvtbush0toMG9QJZ--1--oqlr5.jpg?tr=w-1600,c-at_max",
    },
    {
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg",
    },
    {
      img: "https://www.infolopare.com/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_6e0c2e40-d4f7-45ba-938c-6836abdb6af2.jpeg",
    },
    {
      img: "https://www.claytoncountyregister.com/wp-content/uploads/2023/07/mfrack_realistic_photo_of_future_of_AI_programming_07b82711-2341-4b17-a148-42347c9afc9a.jpeg",
    },
  ];
  return (
    <>
      <Header />
      <div className="product_pages">
        <Container fluid>
          {/*************************************
           * PRODUCT FILTER SECTION START HERE
           **************************************/}
          <div className="product_filters">
            <div className="product_filter_wrapper">
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
            </div>
          </div>
          {/*********************************
           * PRODUCT SECTION START HERE
           **********************************/}
          <section className="product_wrapper">
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
          </section>
          {/*****************************************
           * SELLER DASHBOARD PRODUCT PAGINATIONS
           ******************************************/}
          <div className="product_paginations">
            <MUIPaginations count={10} variant="outlined" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
