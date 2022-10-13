import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Aevnts from "../components/user/Aevnts";
import Events from "../components/user/Events";
import Mininav from "../components/home/Mininav";

const Userhomepage = () => {
  return (
    <div>
      <Mininav />
      <Typography  mt={10} variant="h4">Events You organazied</Typography>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
        <Events />
        <Events />
        <Events />
        <Events />
      </Box>
      <Typography variant="h4">Events You are attending</Typography>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
        <Aevnts />
        <Aevnts />
        <Aevnts />
        <Aevnts />
      </Box>
    </div>
  );
};

export default Userhomepage;
