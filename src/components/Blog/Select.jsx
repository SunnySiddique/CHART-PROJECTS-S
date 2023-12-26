import { KeyboardArrowDown } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <button
        className="basic-bt"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          appearance: "none",
          userSelect: "none",
          borderRadius: "4px",
          cursor: "pointer",
          font: "inherit",
          letterSpacing: "inherit",
          color: "currentcolor",
          // border: '0px',
          boxSizing: "content-box",
          background: "none",
          height: "1.4375em",
          margin: "0px",
          WebkitTapHighlightColor: "transparent",
          display: "block",
          minWidth: "0px",
          width: "100%",
          animationName: "mui-auto-fill-cancel",
          animationDuration: "10ms",
          border: "1px solid grey",
          padding: "6px",
          "&:focus": {
            border: "1px solid blue"
          }
        }}
      >
        {" "}
        Latest
        <KeyboardArrowDown />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Latest</MenuItem>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Oldest</MenuItem>
      </Menu>
    </div>
  );
}
