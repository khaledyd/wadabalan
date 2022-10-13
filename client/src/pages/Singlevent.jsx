import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/home/Mininav";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import Footer from "../components/home/Footer"

const Singlevent = () => {
  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"flex-start"}>
      <Mininav />
      <Box mt={10}>
        <Card sx={{ width:{ xs :"100%" , sm:"60" , md:"70%"} }}>
          <CardMedia
            component="img"
            height="340"
            image="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="green iguana"
            sx={{ width: "100%" }}
          />
        </Card>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ width:{ xs :"100%" , sm:"100" , md:"67%"} , paddingRight: "20px" , flexDirection:{xs:"column", sm:"row" , md:"row"} }}
        mt={2}
        pl={5}
      >
        <Box>
          <Typography variant="h4" sx={{ color: "#554994" }}>
            the next works are here
          </Typography>
          <Typography variant="h6">ice works</Typography>
          <Typography variant="h6">in person</Typography>
          <Typography variant="h6">
            {" "}
            <LocationOnIcon />
            Kaan 1 sk 3144 , Istanbul ,tr
          </Typography>
        </Box>
        <Box>sun , nov 13 . 2022</Box>
      </Box>
      <Box pl={5} mt={10} sx={{ width: "60%" , fontFamily: "Roboto, sans-serif" }}>
        <Typography variant="h3">Details</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque
          voluptatibus minus commodi dolore molestias ut ullam, vitae, quisquam
          exercitationem nobis, expedita nesciunt rem omnis voluptate a enim
          consectetur. Modi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eveniet odit hic exercitationem aliquid dolore sunt laboriosam
          quae magnam quo labore facilis expedita, accusantium eum consequatur.
          Facilis natus laborum reiciendis animi.
        </Typography>
      </Box>
      <Box
        alignItems={"center"}
        pl={5}
        mt={4}
        display={"flex"}
        sx={{ width: "60%" }}
      >
        <Button variant="contained" sx={{ backgroundColor:"#F675A8" }}>Attend</Button>
        <Box sx={{ marginLeft: "50px" }}>10 spots lef</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Singlevent;
