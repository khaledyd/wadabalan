import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Mininav from "../components/home/Mininav";

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box alignItems={"center"} flexDirection={"column"} display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}>
      <Mininav />
      <Box
        mt={2}
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
        <Typography variant="h5" mt={10} sx={{ alignSelf: "center" }}>
          Organsize event
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ width: { xs: "70%", sm: "70%", md: "70%" } }}
        >
          <TextField
            mt={10}
            id="filled-password-input"
            label="Title"
            type="text"
            autoComplete="current-password"
            variant="filled"
            sx={{ marginTop: "10px" }}
          />
          <TextField
            mt={10}
            id="filled-password-input"
            label="Details"
            type="text"
            multiline
            rows={2}
            maxRows={4}
            autoComplete="current-password"
            variant="filled"
            sx={{ marginTop: "10px" }}
          />
          <InputLabel id="demo-simple-select-label">Event Type</InputLabel>

          <Select
            mt={10}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Event Type"
            onChange={handleChange}
            sx={{ marginTop: "10px" }}
          >
            <MenuItem value={10}>In person</MenuItem>
            <MenuItem value={20}>Online</MenuItem>
          </Select>

          <TextField
            mt={10}
            sx={{ marginTop: "10px" }}
            id="filled-password-input"
            label="Address"
            type="text"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            mt={10}
            sx={{ marginTop: "10px" }}
            id="filled-password-input"
            label="Number of spots"
            type="number"
            autoComplete="current-password"
            variant="filled"
          />
          <input
            style={{ marginTop: "10px", marginBottom: "20px" }}
            type="file"
            onChange={() => console.log("changed")}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              sx={{ marginTop: "10px" }}
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>

          <Button
            mt={15}
            variant="contained"
            sx={{ width: "50%", marginTop: "10px", marginBottom: "50px" , backgroundColor:"#F675A8" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
