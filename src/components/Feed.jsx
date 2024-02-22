import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { InfoCard } from "./InfoCard";

export const Feed = () => {
  return (
    <Box m={8} textAlign={"center"}>
      <Typography variant="h4" color={"#12372A"}>
        {" "}
        Dobrodošli na oficijalni sajt
      </Typography>
      <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
        <img src="./images/Family logo gold.png" width={"250px"} />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Grid>
      <Typography></Typography>
    </Box>
  );
};
