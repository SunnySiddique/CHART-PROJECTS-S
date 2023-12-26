import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import "../../App.css";
import BagImage from "../../assets/ic_glass_bag.png";
import BuyImage from "../../assets/ic_glass_buy.png";
import messageImage from "../../assets/ic_glass_message.png";
import usersImage from "../../assets/ic_glass_users.png";
import Sidebar from "../sidebar/Sidebar";
import BarChat from "./BarChat";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
const Home = () => {
  return (
    <div style={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "70px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Hi, Welcome back 👋
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            <Grid item xs={12} md={3}>
              <Card sx={{ width: "100%", height: "144px" }}>
                <CardContent>
                  <div className="main">
                    <img
                      style={{ marginRight: "24px" }}
                      src={BagImage}
                      alt=""
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "24px",
                        color: "#212B36",
                      }}
                    >
                      714k <br /> <span className="text">Weekly Sales</span>
                    </Typography>{" "}
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card sx={{ width: "100%", height: "144px" }}>
                <CardContent>
                  <div className="main">
                    <img
                      style={{ marginRight: "24px" }}
                      src={usersImage}
                      alt=""
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "24px",
                        color: "#212B36",
                      }}
                    >
                      1.35m <br /> <span className="text">New Users</span>
                    </Typography>{" "}
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card sx={{ width: "100%", height: "144px" }}>
                <CardContent>
                  <div className="main">
                    <img
                      style={{ marginRight: "24px" }}
                      src={BuyImage}
                      alt=""
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "24px",
                        color: "#212B36",
                      }}
                    >
                      1.72m <br /> <span className="text">Item Orders</span>
                    </Typography>{" "}
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card sx={{ width: "100%", height: "144px" }}>
                <CardContent>
                  <div className="main">
                    <img
                      style={{ marginRight: "24px" }}
                      src={messageImage}
                      alt=""
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "24px",
                        color: "#212B36",
                      }}
                    >
                      234 <br /> <span className="text">Bug Reports</span>
                    </Typography>{" "}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Card sx={{ height: "485px" }}>
                <div className="card-text">
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    Website Visits
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#637381",
                    }}
                  >
                    (+43%) than last year
                  </Typography>
                </div>
                <CardContent>
                  <LineChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Card sx={{ height: "492px" }}>
                <div className="card-text">
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    Current Visits
                  </Typography>
                </div>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Card sx={{ height: "485px" }}>
                <div className="card-text">
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    Conversion Rates
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#637381",
                    }}
                  >
                    (+43%) than last year
                  </Typography>
                </div>
                <CardContent>
                  <BarChat />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Card sx={{ height: "492px" }}>
                <div className="card-text">
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    Current Visits
                  </Typography>
                </div>
                <CardContent>
                  <RadarChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
