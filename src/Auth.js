import React from "react";
import { Box, Button, TextField, Typography, Checkbox } from "@mui/material";

function Auth() {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={20}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography
            variant="h3"
            padding={"10px"}
            textAlign="center"
            fontWeight={800}
          >
            LucidMotors
          </Typography>
          <Typography variant="h6" padding={"5px"}>
            Create an account
          </Typography>
          <TextField type={"text"} variant="outlined" placeholder="Full name" />
          <TextField type={"email"} variant="outlined" placeholder="Email" />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <TextField
            type={"password"}
            variant="outlined"
            placeholder="Confirm Password"
          />
          <div
            class="checkbox"
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "65px",
            }}
          >
            <Checkbox sx={{ marginRight: "0px" }} label="show Password" />
            <p>Show password</p>
          </div>
          <Button sx={{ marginTop: "10px" }}>Next</Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
