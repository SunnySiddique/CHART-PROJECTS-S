import { Add, Message, Share, Visibility } from "@mui/icons-material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Box, Button, Grid, Typography } from "@mui/material";
import "../../App.css";
import avter1 from "../../assets/avatar_1.jpg";
import avter2 from "../../assets/avatar_10.jpg";
import avter8 from "../../assets/avatar_8 (1).jpg";
import cover6 from "../../assets/cadImg/cover_10.jpg";
import cover9 from "../../assets/cadImg/cover_13.jpg";
import cover10 from "../../assets/cadImg/cover_14.jpg";
import cover11 from "../../assets/cadImg/cover_15.jpg";
import cover12 from "../../assets/cadImg/cover_16.jpg";
import cover13 from "../../assets/cadImg/cover_17.jpg";
import cover14 from "../../assets/cadImg/cover_18.jpg";
import cover15 from "../../assets/cadImg/cover_19.jpg";
import cover16 from "../../assets/cadImg/cover_20.jpg";
import cover17 from "../../assets/cadImg/cover_21.jpg";
import cover18 from "../../assets/cadImg/cover_22.jpg";
import cover19 from "../../assets/cadImg/cover_23.jpg";
import cover1 from "../../assets/cadImg/cover_5 (1).jpg";
import cover2 from "../../assets/cadImg/cover_6.jpg";
import cover3 from "../../assets/cadImg/cover_7.jpg";
import cover22 from "../../assets/cadImg/cover_8.jpg";
import cover5 from "../../assets/cadImg/cover_9.jpg";
import bestImage from "../../assets/cover_1.jpg";
import cover4 from "../../assets/cover_4.jpg";
import Sidebar from "../sidebar/Sidebar";
import BasicMenu from "./Select";
import FreeSolo from "./TextFelid";

const Blog = () => {
  return (
    <div  style={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component={"main"} sx={{ flexGrow: 1, p: 3, mt: "70px" }}>
        <div className="main-con-btn" style={{marginBottom: "30px"}}>
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                }}
              >
                Blog
              </h1>
              <Button
                className="animation-btn"
                startIcon={<Add sx={{ color: "#fff", fontWeight: "700" }} />}
                sx={{
                  height: "40px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
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
                  minWidth: "64px",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  boxShadow:
                    "rgba(145, 158, 171, 0.2) 0px 3px 1px -2px, rgba(145, 158, 171, 0.14) 0px 2px 2px 0px, rgba(145, 158, 171, 0.12) 0px 1px 5px 0px",
                  borderColor: "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  color: "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  backgroundColor: "rgb(33, 43, 54)",
                  // eslint-disable-next-line no-dupe-keys
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgb(53, 63, 74)",
                  },
                }}
              >
                New User
              </Button>
            </div>
            <div className="input-blog" style={{marginBottom: "40px"}}>
                <FreeSolo />
                <BasicMenu />
            </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="main-img">
                <div className="imges">
                  <img src={avter1} alt="" />
                </div>
                <div className="img-card" style={{ position: "relative" }}>
                  <img src={bestImage} alt="" />
                  <div className="img-overlay">
                    <div className="text-large">
                      <Typography variant="body2" className="small-text">
                        27 Fab 2023
                      </Typography>
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "3%",
                          fontSize: "25px",
                          fontWeight: "700",
                          color: "rgb(255, 255, 255)",
                        }}
                        className="haha"
                      >
                        Tesla Cybertruck-inspired camper trailer for Tesla fans
                        who can’t just wait for the truck!
                      </Typography>
                    </div>
                    <div className="main-icons">
                      <div className="style-icons">
                        <div className="icons-style-one">
                          <Message sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            49.25k
                          </Typography>
                        </div>
                        <div className="icons-style-two" style={{flexWrap: "wrap"}}>
                          <Visibility sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            76.26k
                          </Typography>
                        </div>
                        <div className="icons-style-three">
                          <Share sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            51.17k
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="main-img">
                <div className="imges">
                  <img src={avter2} alt="" />
                </div>
                <div className="img-card" style={{ position: "relative" }}>
                  <img src={bestImage} alt="" />
                  <div className="img-overlay">
                    <div className="text-large">
                      <Typography variant="body2" className="small-text">
                        27 Fab 2023
                      </Typography>
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "3%",
                          fontSize: "25px",
                          fontWeight: "700",
                          color: "rgb(255, 255, 255)",
                        }}
                        className="haha"
                      >
                        Tesla Cybertruck-inspired camper trailer for Tesla fans
                        who can’t just wait for the truck!
                      </Typography>
                    </div>
                    <div className="main-icons">
                      <div className="style-icons">
                        <div className="icons-style-one">
                          <Message sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            49.25k
                          </Typography>
                        </div>
                        <div className="icons-style-two">
                          <Visibility sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            76.26k
                          </Typography>
                        </div>
                        <div className="icons-style-three">
                          <Share sx={{ marginRight: "5px" }} />
                          <Typography
                            sx={{
                              fontWeight: "700",
                              color: "#fff",
                              fontSize: "16px",
                            }}
                          >
                            51.17k
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="row mt-5 g-5">
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover4} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover22} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover1} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover2} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover3} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover4} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover5} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover6} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover9} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover10} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover11} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover12} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 12 */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover13} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover14} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover15} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover16} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 12 */}
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover17} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover18} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover19} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-6">
              <div className="cards-img">
                <div className="good-img">
                  <img src={cover12} alt="" />
                </div>
                <div className="card-text-content">
                  <div className="card-second-imn">
                    <img className="desgin-img" src={avter8} alt="" />
                    <p className="good-text">19 Mar 2023</p>
                    <h4 className="good-text-big">Akkers van Margraten</h4>
                    <div className="main-text-img">
                      <div className="one">
                        <TextsmsIcon
                          sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }}
                        />
                        <p>42.58k</p>
                      </div>
                      <div className="two">
                        <Visibility   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                      <div className="three">
                        <Share   sx={{
                            fontSsize: "19px",
                            marginRight: "4px",
                            color: "gray",
                          }} />
                        <p>42.58k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 12 */}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Blog;
