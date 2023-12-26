import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import "../../App.css";
import specialProduImage1 from "../../assets/cadImg/product_14.jpg";
import specialProduImage2 from "../../assets/cadImg/product_17.jpg";
import specialProduImage3 from "../../assets/cadImg/product_19.jpg";
import specialProduImage4 from "../../assets/cadImg/product_23.jpg";
import productImage1 from "../../assets/product_1.jpg";
import productImage3 from "../../assets/product_10.jpg";
import productImage4 from "../../assets/product_11.jpg";
import productImage5 from "../../assets/product_12.jpg";
import productImage6 from "../../assets/product_13.jpg";
import productImage9 from "../../assets/product_19.jpg";
import productImage8 from "../../assets/product_2.jpg";
import productImage2 from "../../assets/product_22.jpg";
import productImage16 from "../../assets/product_24.jpg";
import productImage15 from "../../assets/product_3.jpg";
import productImage14 from "../../assets/product_4.jpg";
import productImage13 from "../../assets/product_5.jpg";
import productImage12 from "../../assets/product_6.jpg";
import productImage11 from "../../assets/product_7.jpg";
import productImage10 from "../../assets/product_8.jpg";
import Sidebar from "../sidebar/Sidebar";

const Product = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ background: "rgba(249, 250, 251, 0.8)" }}>
      <Box sx={{ display: "flex",  backgroundColor: "rgba(249, 250, 251, 0.8)"  }}>
        <Sidebar />
        <Box component={"main"} sx={{ flexGrow: 1, p: 3, mt: "50px" }}>
         <div className="product-main-h">
         <h1>Product</h1>
         
        <Button
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: "0px",
        border: "0px currentcolor",
        margin: "0px",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        textDecoration: "none",
        fontWeight: 700,
        lineHeight: 1.71429,
        fontSize: "0.875rem",
        textTransform: "unset",
        fontFamily: "'Public Sans', sans-serif",
        minWidth: "64px",
        padding: "6px 8px",
        borderRadius: "8px",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "inherit",
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "rgba(33, 43, 54, 0.08)"
        }
      }} endIcon={<KeyboardArrowDown />}  id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className="menu">Sort Buy: <span className="newst">Newest</span></Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Featured</MenuItem>
        <MenuItem onClick={handleClose}>Newest</MenuItem>
        <MenuItem onClick={handleClose}>Price: High-Low</MenuItem>
        <MenuItem onClick={handleClose}>Price: Low-High</MenuItem>
      </Menu>
         </div>
          <div className="row mt-5 g-5">
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage1} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">
                      Nike Air Force 1 NDESTRUKT
                    </h4>
                  </div>
                  <div className="main-color">
                    <div className="color-bg">
                      <div className="bg-color"></div>
                    </div>
                    <div className="bg-p">
                      <p>$40</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage3} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage4} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage5} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage6} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage9} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage10} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage11} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage12} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage13} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage8} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage14} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage15} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage16} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={specialProduImage1} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={specialProduImage2} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={specialProduImage3} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={specialProduImage4} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage2} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={productImage2} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <h4 className="product-text-big">Akkers van Margraten</h4>
                    <div className="main-color">
                      <div className="color-bg">
                        <div className="bg-color"></div>
                      </div>
                      <div className="bg-p">
                        <p>$40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Product;
