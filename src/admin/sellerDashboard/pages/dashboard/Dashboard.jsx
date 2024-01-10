/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import ProductCard from "../../../../clients/components/product_cards/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { Search, Sort } from "@mui/icons-material";
import "./dashboard.css";
import "../../../../assets/css/responsive.css";
import { BarChart, Bar, Cell, CartesianGrid } from "recharts";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Pagination as MUIPaginations,
  Chip,
  Typography,
} from "@mui/material";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "purple",
];
const Dashboard = () => {
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
  // RECHART START HERE
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  /*SELLER CHART SECTION START HERE*/
  const AngleChart = ({ title, number }) => {
    return (
      <>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography textTransform={"capitalize"} fontSize={"14px"} mt={2}>
            {title}
          </Typography>
          <Typography fontSize={"2rem"} color={"gray"} fontWeight={"600"}>
            {number}
          </Typography>
        </Stack>
        <BarChart
          width={300}
          height={70}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 3" />
          <Bar dataKey="uv" shape={<TriangleBar />}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[Math.floor((Math.random() * index) % 20)]}
              />
            ))}
          </Bar>
        </BarChart>
      </>
    );
  };
  return (
    <div className="seller_dashboard_page">
      <Container fluid>
        {/*************************************
         * ANALYTICS SECTION START HERE
         **************************************/}
        <section className="seller_analytics">
          <Row lg={4} md={1} sm={1}>
            <Col>
              <div className="analytics_items">
                <AngleChart title="today earning" number="$323" />
              </div>
            </Col>
            <Col>
              <div className="analytics_items">
                <AngleChart title="total spant" number="$223" />
              </div>
            </Col>
            <Col>
              <div className="analytics_items">
                <AngleChart title="total funds" number="$323" />
              </div>
            </Col>
            <Col>
              <div className="analytics_items">
                <AngleChart title="total earning" number="$323" />
              </div>
            </Col>
          </Row>
        </section>
        {/*************************************
         * PRODUCT FILTER SECTION START HERE
         **************************************/}
        <div className="product_filters">
          <section className="product_filter_wrapper">
            <Stack direction={"row"} py={3} spacing={2}>
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: "30px" }}
                >
                  facebook
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: "30px" }}
                >
                  youtube
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: "30px" }}
                >
                  instagram
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: "30px" }}
                >
                  telegram
                </Button>
              </Box>
            </Stack>
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
              <FormControl style={{ display: "flex" }}>
                <Chip
                  label="Subscriber"
                  sx={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                  }}
                />
                <Box style={{ display: "flex" }}>
                  <TextField
                    sx={{ m: 1 }}
                    label="from"
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    sx={{ m: 1 }}
                    label="to"
                    variant="filled"
                    size="small"
                  />
                </Box>
              </FormControl>
              <FormControl style={{ display: "flex" }}>
                <Chip
                  label="Price"
                  sx={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                  }}
                />
                <Box style={{ display: "flex" }}>
                  <TextField
                    sx={{ m: 1 }}
                    label="from"
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    sx={{ m: 1 }}
                    label="to"
                    variant="filled"
                    size="small"
                  />
                </Box>
              </FormControl>
              <FormControl style={{ display: "flex" }}>
                <Chip
                  label="Income"
                  sx={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                  }}
                />
                <Box style={{ display: "flex" }}>
                  <TextField
                    sx={{ m: 1 }}
                    label="from"
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    sx={{ m: 1 }}
                    label="to"
                    variant="filled"
                    size="small"
                  />
                </Box>
              </FormControl>
            </Stack>
            {/**************************************
             * PRODUCT SORTS SECTION START HERE
             ***************************************/}
            <Stack direction={"row"} spacing={1} pb={1} pt={3}>
              <Sort />
              <Button
                size="small"
                variant=""
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#eee",
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                subscriber
              </Button>
              <Button
                size="small"
                variant=""
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#eee",
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                income
              </Button>
              <Button
                size="small"
                variant=""
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#eee",
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                price
              </Button>
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
                  badges="new"
                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
                  listing_id="OM32343"
                  price={"$" + 233}
                  thumbnail_arr={image_obj}
                  product_views={100032}
                  product_categry={2}
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
