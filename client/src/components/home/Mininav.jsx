import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { IconButton, TextField, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  ImageList,
  ImageListItem,
  ListItem,
  Typography,
} from "@mui/material";
import { border, Stack } from "@mui/system";
import { ButtonUnstyled } from "@mui/base";

const Imgs = styled.img``;
const Navitem = styled.div``;
const NavBarItems = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  return (
    <Box
      sx={{
       backgroundColor:"#554994",
        width: { xs: "120%", sm: "100%" },
        backgroundSize: "cover",
      }}
    >
      <Stack direction="column" spacing={2}>
        <Box
          sx={{
            width: "100%",
            display: "flex",

            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              //pb:{ xs: "120px" , sm:"100px" , md:"" }
              p: "10px",
            }}
          >
            <Imgs src="./images/lg.png" />
          </Box>
          <Box
            gap={4}
            sx={{
              display: { sm: "flex", md: "flex", xs: "flex" },
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
              p: "10px",
            }}
          >
            <Box
              gap={2}
              sx={{
                color: "#fff",
                fontSize: { xs: "100px", sm: "10px" },
                display: { sm: "inline", xs: "inline", md: "flex" },
              }}
            >
              <Typography variant="h6">Find Event</Typography>
              <Typography variant="h6">Organize Event</Typography>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Log in</Typography>
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  color: "primary",
                  bgcolor: "#F675A8",
                }}
              >
                Get Started
              </Button>
            </Box>
            <Box>
              <MenuIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
