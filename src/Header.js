import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "flex-start",
          alignContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Typography
                sx={{
                  paddingRight: " 25%",
                  marginLeft: "2%",
                  color: "#FFFFFF",
                  alignItems: "center",
                  fontWeight: "800",
                }}
              >
                LucidMotors
              </Typography>
            </>
          ) : (
            <>
              <Tabs sx={{ paddingLeft: "20px" }}>
                <Tab sx={{ color: "#FFFFFF" }} label="Models" />
                <Tab sx={{ color: "#FFFFFF" }} label="Build" />
                <Tab sx={{ color: "#FFFFFF" }} label="Reserve" />
              </Tabs>
              <Typography
                sx={{
                  paddingRight: " 25%",
                  marginLeft: "25%",
                  color: "#FFFFFF",
                  alignItems: "center",
                  fontWeight: "800",
                }}
              >
                LucidMotors
              </Typography>
              <Button
                sx={{
                  marginLeft: "auto",
                  border: "solid 1px #FFFFFF",
                  color: "#FFFFFF",
                }}
              >
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </React.Fragment>
  );
}
