import { Add } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import DataTable from "./DataTable";

const User = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(249, 250, 251, 0.8)",
        height: 90 + "vh",
      }}
      style={{}}
    >
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <div className="main-con-btn">
              <h1
                style={{
                  fontSize: "35px",
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                }}
              >
                User
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
            <Card sx={{ mt: "40px" }}>
              <CardContent>
                <DataTable />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default User;
