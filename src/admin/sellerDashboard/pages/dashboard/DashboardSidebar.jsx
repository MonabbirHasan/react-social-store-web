import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Header from "../../components/common/header/Header";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountBalanceWallet,
  AdsClick,
  ArrowDropDown,
  CardGiftcard,
  Dashboard,
  DiscountOutlined,
  FeaturedPlayList,
  LocalShippingOutlined,
  MonetizationOn,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  SellerDashboard,
  Earnings,
  ProductListing,
  SellerProfileView,
  BillingPayments,
  SellerSettings,
  Referring,
  Orders,
  WatachAds,
  DailyTask,
  Subscription,
  AddPaymentVarify,
} from "../index";
import Selling from "../selling/Selling";
const DashboardSidebar = () => {
  const [OpenMyBusinessMenu, setOpenMyBusinessMenu] = useState(false);
  const [ShowSellerSidebarMenu, setShowSellerSidebarMenu] = useState(false);
  const handleCloseSellerSidebarMenu = () => setShowSellerSidebarMenu(false);
  const handleShowSellerSidebarMenu = () => setShowSellerSidebarMenu(true);
  /********************************************************
   * SELLER DASHBOARD ALL PAGE RENDERING CONTROLL HERE
   ********************************************************/
  const [SellerDashboardPage, setSellerDashboardPage] = useState("dashboard");
  const save_states = (pg) => {
    localStorage.setItem("saved_states", JSON.stringify(pg));
  };
  useEffect(() => {
    setSellerDashboardPage(JSON.parse(localStorage.getItem("saved_states")));
  }, []);
  /*******************************
   * RECIEVE DATA FROM PARENT
   *******************************/
  const HandleOpenSettings = () => {
    setSellerDashboardPage("seller_dashboard_setting");
    save_states("seller_dashboard_setting");
  };
  const HandleOpenProfile = () => {
    setSellerDashboardPage("seller_profile");
    save_states("seller_profile");
  };
  const HandleOpenReferring = () => {
    setSellerDashboardPage("referring");
    save_states("referring");
  };
  const HandleOpenBillingPayments = () => {
    setSellerDashboardPage("billing_payment");
    save_states("billing_payment");
  };
  const HandleOpenEarningsPages = () => {
    setSellerDashboardPage("earnings");
    save_states("earnings");
  };
  const HandleOpenListingPages = () => {
    setSellerDashboardPage("create_listing");
    save_states("create_listing");
  };
  const HandleOpenDailyTaskPages = () => {
    setSellerDashboardPage("daily_task");
    save_states("daily_task");
  };
  const HandleOpenDailyTaskViewPages = () => {
    setSellerDashboardPage("daily_task_view");
    save_states("daily_task_view");
  };
  const HandleOpenSubscriptionPages = () => {
    setSellerDashboardPage("subscription");
    save_states("subscription");
  };
  const HandleOpenPaymentVerifyPages = () => {
    setSellerDashboardPage("add_payment_varify");
    save_states("add_payment_varify");
  };

  return (
    <div>
      {/*******************************
       * DASHBOARD HEADER START HERE
       ********************************/}
      <Header
        openBillings={HandleOpenBillingPayments}
        openReferring={HandleOpenReferring}
        openProfile={HandleOpenProfile}
        openSettings={HandleOpenSettings}
        ShowSellerSidebarMenu={handleShowSellerSidebarMenu}
      />
      {/*******************************
       * RENDER ALL COMPONENTS PAGES
       ********************************/}
      {SellerDashboardPage === "dashboard" ? (
        <SellerDashboard />
      ) : SellerDashboardPage === "seller_dashboard_setting" ? (
        <SellerSettings OpenPaymentVerifyPages={HandleOpenPaymentVerifyPages} />
      ) : SellerDashboardPage === "seller_profile" ? (
        <SellerProfileView
          OpenSubscription={HandleOpenSubscriptionPages}
          OpenDailyTask={HandleOpenDailyTaskPages}
        />
      ) : SellerDashboardPage === "referring" ? (
        <Referring />
      ) : SellerDashboardPage === "billing_payment" ? (
        <BillingPayments openEarnings={HandleOpenEarningsPages} />
      ) : SellerDashboardPage === "earnings" ? (
        <Earnings />
      ) : SellerDashboardPage === "manage_listing" ? (
        <ProductListing Openlisting={HandleOpenListingPages} />
      ) : SellerDashboardPage === "orders" ? (
        <Orders />
      ) : SellerDashboardPage === "create_listing" ? (
        <Selling />
      ) : SellerDashboardPage === "daily_task" ? (
        <DailyTask
          openProfile={HandleOpenProfile}
          OpenDailyTaskView={HandleOpenDailyTaskViewPages}
        />
      ) : SellerDashboardPage === "daily_task_view" ? (
        <WatachAds OpenDailyTask={HandleOpenDailyTaskPages} />
      ) : SellerDashboardPage === "subscription" ? (
        <Subscription openProfile={HandleOpenProfile} />
      ) : SellerDashboardPage === "add_payment_varify" ? (
        <AddPaymentVarify />
      ) : (
        "page not found!"
      )}
      {/*******************************
       * SIDEBAR MENU START HERE
       ********************************/}
      <Offcanvas
        show={ShowSellerSidebarMenu}
        onHide={handleCloseSellerSidebarMenu}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Jhone Doe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  save_states("dashboard");
                  setSellerDashboardPage("dashboard");
                }}
              >
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  OpenMyBusinessMenu === false
                    ? setOpenMyBusinessMenu(true)
                    : setOpenMyBusinessMenu(false)
                }
              >
                <ListItemIcon>
                  <Store />
                </ListItemIcon>
                <ListItemText primary="My Business" />
                <ArrowDropDown />
              </ListItemButton>
            </ListItem>
            <Collapse in={OpenMyBusinessMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    setSellerDashboardPage("orders");
                    save_states("orders");
                  }}
                >
                  <ListItemIcon>
                    <LocalShippingOutlined />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textTransform: "capitalize" }}
                    primary="Orders"
                  />
                </ListItemButton>
              </List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    setSellerDashboardPage("manage_listing");
                    save_states("manage_listing");
                  }}
                >
                  <ListItemIcon>
                    <FeaturedPlayList />
                  </ListItemIcon>
                  <ListItemText primary="My Listing" />
                </ListItemButton>
              </ListItem>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    setSellerDashboardPage("earnings");
                    save_states("earnings");
                  }}
                >
                  <ListItemIcon>
                    <MonetizationOn />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textTransform: "capitalize" }}
                    primary="Earning"
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AdsClick />
                </ListItemIcon>
                <ListItemText primary="Pin Your Product" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DiscountOutlined />
                </ListItemIcon>
                <ListItemText primary="create offer" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CardGiftcard />
                </ListItemIcon>
                <ListItemText primary="create voucher" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceWallet />
                </ListItemIcon>
                <ListItemText primary="withdrawal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="sattings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default DashboardSidebar;
