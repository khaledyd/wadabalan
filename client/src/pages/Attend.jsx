import * as React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { Box, fontSize } from "@mui/system";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Mininav from "../components/home/Mininav";
import { useNavigate } from "react-router-dom";
import Ticket from "./Ticket";

export default function Attend() {
  const navigate = useNavigate();
  const data = [{ name: "", email: "", gender: "" }];
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[1];
  console.log(path);

  const { currentEvent } = useSelector((state) => state.event);
  console.log(currentEvent);
  const [attendees, setAttendees] = useState([
    {
      name: "",
      email: "",
      gender: "",
      objectId: "_id",
    },
  ]);
  const [ticket, setTicket] = useState(false);
  const [ticketdata, setTicketData] = useState([]);

  const array = [ticketdata];
  console.log(array[0].details);
  ///onchange funtion
  const handleChange = (e) => {
    setAttendees((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/events/" + path);
      //console.log(res.data);
      setTicketData(res.data);
    };

    getPost();
  }, [path]);
  //console.log(ticketdata);
  //submit funcion

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("/events/" + path, {
        attendees,
      });
      console.log(res.data);
      setTicket(true);
      ///res.data && window.location.replace("/EventAttendees");
      //window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {ticket ? (
        <>
          {array.map((t) => {
            return <Ticket array={t} />;
          })}
          <Box>
            <Typography
              variant="h5"
              sx={{
                marginLeft: "3%",

                color: "#F675A8",
              }}
            >
              Order Infromation
            </Typography>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  marginLeft: "3%",
                }}
              >
                Ordered By : {attendees.name}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginLeft: "3%",
                marginTop:"50px",
                fontSize:"12px"
              }}
            >
        Powered By WADABALAN
            </Typography>
          </Box>
        </>
      ) : (
        <Box
          alignItems={"center"}
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"center"}
          sx={{ width: "100%" }}
        >
          <Mininav />
          <Box
            mt={15}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            sx={{
              width: { xs: "100%", sm: "100%", md: "40%" },
              backgroundColor: "#FAFAFA",
              boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            }}
          >
            <TextField
              mt={10}
              id="filled-password-input"
              label="Fullname"
              type="text"
              autoComplete="current-password"
              variant="filled"
              sx={{ marginTop: "10px" }}
              name="name"
              onChange={handleChange}
              //onChange={(e) => setname(e.target.value)}
            />

            <TextField
              mt={10}
              id="filled-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              variant="filled"
              sx={{ marginTop: "10px" }}
              name="email"
              onChange={handleChange}
              //onChange={(e) => setEmail(e.target.value)}
            />

            <Select
              mt={10}
              //onChange={(e) => seGender(e.target.value)}
              labelId="demo-simple-select-label"
              label="Event Type"
              sx={{ marginTop: "10px" }}
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Femaile</MenuItem>
            </Select>

            <Button
              onClick={handleSubmit}
              type="submit"
              mt={15}
              variant="contained"
              sx={{
                width: "50%",
                marginTop: "10px",
                marginBottom: "50px",
                backgroundColor: "#F675A8",
              }}
            >
              Attend
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

//  const [name, setname] = useState("");
//const [email, setEmail] = useState("");
//const [gender, seGender] = useState("");
