import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/home/Navbar";
import Card from "../components/home/Card";
import { Box, width } from "@mui/system";
import styled from "styled-components";
import Steps from "../components/home/Steps";
import Popular from "../components/home/Popular";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


const Vstrong = styled.strong`
  color: #f35588;
`;
const Step = styled.h1`
  font-family: roboto;
  margin: 30px;
`;



const Home = () => {



  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("/events");
      setEvents(res.data);
      console.log(res.data);
    };
    fetchEvents();
  }, []);


  return (
    <div>
      <Navbar />
      <Typography
        sx={{
          m: "30px",
          color: "#F675A8",
        }}
      >
        Upcomming events
      </Typography>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
        {events.map((e) => (
          <Card events={e} />
        ))}
      </Box>
      <Step>
        With the <Vstrong> simple </Vstrong> Steps you can attend event{" "}
      </Step>
      <Steps />
      <Step style={{ color: "#F675A8" }}>Popular Organizers</Step>

      <Box
        gap={4}
        pl={"30px"}
        sx={{ width: { xs: "100%", sm: "100%", md: "100%" }, display: "flex" }}
      >
        <Popular style={{}} />
        <Popular />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
