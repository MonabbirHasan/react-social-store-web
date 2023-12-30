import ProductCard from "../../components/product_cards/ProductCard";
import Header from "../../components/common/header/Header";
import { Col, Container, FormLabel, Row } from "react-bootstrap";
import "../../../assets/css/responsive.css";
import "./products.css";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Search, Sort } from "@mui/icons-material";
const Products = () => {
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
    <>
      <Header />
      <div className="product_pages">
        <Container>
          {/*************************************
           * PRODUCT FILTER SECTION START HERE
           **************************************/}
          <div className="product_filters">
            <div className="product_filter_wrapper">
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
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<Search />}
                >
                  Search
                </Button>
              </Box>
            </div>
          </div>
          {/**************************************
           * PRODUCT SORTS SECTION START HERE
           ***************************************/}
          <Stack direction={"row"} pb={1}>
            <Sort />
            <Box display={"flex"} sx={{ textTransform: "capitalize" }}>
              <MenuItem>subscriber</MenuItem>
              <MenuItem>income</MenuItem>
              <MenuItem>price</MenuItem>
            </Box>
          </Stack>
          {/*********************************
           * PRODUCT SECTION START HERE
           **********************************/}
          <Row lg={4}>
            {Array.from({ length: 24 }, (x) => x + x).map((items) => (
              <Col key={items}>
                <div className="seller_gig_item">
                  <ProductCard
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                    listing_id="OM32343"
                    price={"$" + 233}
                    thumbnail_arr={image_obj}
                    product_views={100032}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
