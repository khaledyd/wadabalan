import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function MediaCard() {
  return (
    <Box sx={{

      display: 'flex',
  
   
    }}>
      <Card sx={{ maxWidth:300, m: "30px" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent sx={{height:"200px"}}>
          <Typography gutterBottom variant="h6" component="div" sx={{height:"max-content"}}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" sx={{    color: "#554994"}}>
              Sat,nov20,10:20AM
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Online Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
            30 Attendees
          </Typography>
          <Typography variant="body1" sx={{    color: "#F675A8"}}>
            ice Eorks
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}
