import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { IconButton, TextField, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { logout } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";
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
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box
      sx={{
        backgroundImage: `url("https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
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
              {currentUser ? (
                <Typography variant="h6">{currentUser.fullname}</Typography>
              ) : (
                <Typography variant="h6">Log in</Typography>
              )}
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                }}
                onClick={handleLogout}
              >
                {currentUser && "Log out"}
              </Typography>

              <Button
                variant="contained"

                sx={{
                  color: "primary",
                  bgcolor: "#F675A8",
                 
                }}
              >
                {currentUser ? "" : "get started"}
              </Button>
            </Box>
            <Box>
              <MenuIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        </Box>
        <ListItem
          width="100%"
          ping="5"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            paddingTop: "100px",
          }}
        >
          <Typography
            variant={{ xs: "p", sm: "p" }}
            sx={{
              color: "#fff",
            }}
          >
            {" "}
            The next events are here !
          </Typography>
        </ListItem>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              outline: "none",
              width: "50%",
              border: "solid 2px #fff",
              outlineColor: "#fff",
            }}
          />
          <SearchIcon sx={{ fontSize: "50px", color: "#fff" }} />
        </Box>

        <Box
          display={"flex"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          {" "}
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Search with rich filters
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
