import React from "react";
import { Typography, Box } from "@mui/material";

export default function FlexboxControl() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row-reverse"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100px", borderStyle: "solid", borderColor: "red" }}
      >
        <Box order={0} sx={{ backgroundColor: "green" }}>
          Hello
        </Box>
        <Box order={2} sx={{ backgroundColor: "red" }}>
          How
        </Box>
        <Box order={1} sx={{ backgroundColor: "yellow" }}>
          Are
        </Box>
        <Box order={3} alignSelf="flex-start" sx={{ backgroundColor: "blue" }}>
          You
        </Box>
      </Box>
    </>
  );
}
