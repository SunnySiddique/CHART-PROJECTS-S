import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import BlogImage from "../../assets/Blog.png";
import LoginImage from "../../assets/LOgin.png";
import ShoppingImage from "../../assets/Shopping.png";
import avterImage from "../../assets/avatar_25.jpg";
import NotFountImage from "../../assets/notfound.png";
import ChartImage from "../../assets/span.svg-color_mask-group.png";
import ManImage from "../../assets/user.png";
import ThreeProfile from "./ThreeProfile";

const drawerWidth = 290;

function Sidebar(props) {
  const navigate = useNavigate();
  const inputRef = useRef(null);


  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const goTohome = () => {
    navigate("/");
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem onClick={goTohome}>
          <svg
            style={{ width: "49px", marginTop: "-60px", cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
                <stop offset="0%" stopColor="#0C44AE"></stop>
                <stop offset="100%" stopColor="#1877F2"></stop>
              </linearGradient>
              <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#73BAFB"></stop>
                <stop offset="100%" stopColor="#1877F2"></stop>
              </linearGradient>
              <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#73BAFB"></stop>
                <stop offset="100%" stopColor="#1877F2"></stop>
              </linearGradient>
            </defs>
            <g fill="#1877F2" fillRule="evenodd" stroke="none" strokeWidth="1">
              <path
                fill="url(#BG1)"
                d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
              ></path>
              <path
                fill="url(#BG2)"
                d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
              ></path>
              <path
                fill="url(#BG3)"
                d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
              ></path>
            </g>
          </svg>
        </ListItem>
      </List>
      <List>
        <Stack
          direction="row"
          sx={{
            background: "#e2dfdf",
            padding: "14px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            margin: "14px",
          }}
        >
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src={avterImage}
            alt=""
          />
          <Typography sx={{ Size: "14px", Weight: "600" }}>
            Sunny Siddique
          </Typography>
        </Stack>

        <ListItem disablePadding onClick={() => navigate("/")}>
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={ChartImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/user");
          }}
        >
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={ManImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"User"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate("/product")}>
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={ShoppingImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"Product"} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            navigate("/blog");
          }}
        >
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={BlogImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"Blog"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/login");
          }}
        >
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={LoginImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate("/notfound")}>
          <ListItemButton>
            <ListItemIcon style={{ marginRight: "-17px" }}>
              <img src={NotFountImage} alt="" />
            </ListItemIcon>
            <ListItemText primary={"Not Found"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}  >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          flexShrink: 0,
          position: "fixed",
          top: 0,
          left: "auto",
          right: 0,
          color: "#fff",
          boxShadow: "none",
          height: "80px",
          zIndex: 1101,
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(249, 250, 251, 0.8)",
          transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          // width: "calc(100% - 281px)", // Adjust this width as needed
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "red" }} />
          </IconButton>
          <div className="sidebar-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              onClick={handleIconClick}
            >
              <path
                fill="currentColor"
                d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
              ></path>
            </svg>
          </div>
          <div className="haha" style={{ display: "flex", justifyContent: "space-between" }}>
  <input
    ref={inputRef}
    style={{ display: showInput ? "block" : "none" }}
    placeholder="Search..."
    className={`input ${showInput ? "slide-in" : ""}`}
  />
</div>

          <ThreeProfile />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
