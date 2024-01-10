/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DropdownButton from "react-bootstrap/DropdownButton";
import ShopCard from "../../components/shop_card/ShopCard";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import webshop from "../../../assets/img/webshop.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import Pagination from "react-bootstrap/Pagination";
import { shopData } from "../../../utils/shopData";
import Dropdown from "react-bootstrap/Dropdown";
import { Search } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../../assets/css/responsive.css";
import "./web_shop.css";
const WebShop = () => {
  let [Filter_GoogleAdsVerified, setGoogleAdsVerified] = useState("");
  let [Filter_DomainHosting, setDomainHosting] = useState("");
  let [Filter_WebSiteName, setWebSiteName] = useState("");
  let [Filter_TechStack, setTechStack] = useState("");
  let [Filter_Category, setCategory] = useState("");
  let [Filter_Price, setPrice] = useState("");
  const DomainHosting = (eventKey, event) => {
    setDomainHosting(eventKey);
  };
  const GoogleAdsVerifiedHandler = (eventKey, event) => {
    setGoogleAdsVerified(eventKey);
  };
  const TechStackHandler = (eventKey, event) => {
    setTechStack(eventKey);
  };
  const CategoryHandler = (eventKey, event) => {
    setCategory(eventKey);
  };
  const PriceHandler = (eventKey, event) => {
    setPrice(eventKey);
  };
  function FILTER_DATA() {
    function validateStates() {
      if (
        Filter_WebSiteName !== "" &&
        Filter_TechStack !== "" &&
        Filter_Category !== "" &&
        Filter_Price !== "" &&
        Filter_GoogleAdsVerified !== "" &&
        Filter_DomainHosting !== ""
      ) {
        // All state variables are not empty
        return true;
      } else {
        // At least one state variable is empty
        return false;
      }
    }
    // Call the validateStates function when needed, for example, when you want to perform validation
    const isValid = validateStates();
    if (isValid) {
      // All state variables are not empty
      let FilterData = {
        domain_hosting: Filter_DomainHosting,
        website_name: Filter_WebSiteName,
        google_ads_verified: Filter_GoogleAdsVerified,
        tech_stack: Filter_TechStack,
        category: Filter_Category,
        price: Filter_Price,
      };
      console.log(FilterData);
      // You can proceed with your desired action
    } else {
      // At least one state variable is empty
      // Handle the validation error
      alert("Please Fiel The All Input");
    }
  }
  return (
    <>
      <Header />
      <div className="shop_page">
        <div className="shop_page_banner">
          <LazyLoadImage src={webshop} />
        </div>
        <div className="container">
          {/*******************************
           * PRODUCT FILTER SECTIONS HERE
           ********************************/}
          <div className="shop_filter">
            <InputGroup className="mb-3">
              <Form.Control onChange={(e) => setWebSiteName(e.target.value)} />
              <DropdownButton
                onSelect={GoogleAdsVerifiedHandler}
                variant="outline-secondary"
                title={
                  Filter_GoogleAdsVerified
                    ? Filter_GoogleAdsVerified
                    : "google ads verified"
                }
                id="input-group-dropdown-1"
              >
                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                <Dropdown.Item eventKey="No">No</Dropdown.Item>
                <Dropdown.Item eventKey="Applyed">Applyed</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                onSelect={TechStackHandler}
                variant="outline-secondary"
                title={Filter_TechStack ? Filter_TechStack : "Technology"}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item eventKey="Custom Website">
                  Custom Website
                </Dropdown.Item>
                <Dropdown.Item eventKey="Wordpress">Wordpress</Dropdown.Item>
                <Dropdown.Item eventKey="Joomla">Joomla</Dropdown.Item>
                <Dropdown.Item eventKey="Shopify">Shopify</Dropdown.Item>
                <Dropdown.Item eventKey="Wix">Wix</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                onSelect={CategoryHandler}
                variant="outline-secondary"
                title={Filter_Category ? Filter_Category : "website category"}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item eventKey="Social">
                  Social Networking
                </Dropdown.Item>
                <Dropdown.Item eventKey="E-commerce">E-commerce</Dropdown.Item>
                <Dropdown.Item eventKey="News">News and Media</Dropdown.Item>
                <Dropdown.Item eventKey="Entertainment">
                  Entertainment
                </Dropdown.Item>
                <Dropdown.Item eventKey="Blogs">Blogs</Dropdown.Item>
                <Dropdown.Item eventKey="Search Engines">
                  Search Engines
                </Dropdown.Item>
                <Dropdown.Item eventKey="Educational">
                  Educational
                </Dropdown.Item>
                <Dropdown.Item eventKey="Travel">
                  Travel and Tourism
                </Dropdown.Item>
                <Dropdown.Item eventKey="Health">
                  Health and Fitness
                </Dropdown.Item>
                <Dropdown.Item eventKey="Government">
                  Government and Informational
                </Dropdown.Item>
                <Dropdown.Item eventKey="others">Others</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                onSelect={PriceHandler}
                variant="outline-secondary"
                title={Filter_Price ? Filter_Price : "website price"}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
                <Dropdown.Item eventKey="high">high</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                variant="outline-secondary"
                title={
                  Filter_DomainHosting ? Filter_DomainHosting : "Domain Hosting"
                }
                id="input-group-dropdown-1"
                onSelect={DomainHosting}
              >
                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                <Dropdown.Item eventKey="No">No</Dropdown.Item>
              </DropdownButton>
              <Button className="search_btn" onClick={FILTER_DATA}>
                <Search />
              </Button>
            </InputGroup>
          </div>
          {/*******************************
           * PRODUCT SECTIONS HERE
           ********************************/}
          <div className="shop_wrapper">
            {shopData.map((items) => (
              <ShopCard
                key={items.id}
                title="Blog Website"
                price={items.price}
                company={"own company"}
                status="Yes"
                gallery={items.gallery}
                rating={3.5}
              />
            ))}
          </div>
        </div>
        {/*******************************
         * PRODUCT PAGINATIONS HERE
         ********************************/}
        <section className="paginations">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WebShop;
