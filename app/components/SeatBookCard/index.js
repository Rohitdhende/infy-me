import React from "react";
import styles from "@/app/styles/SeatBookCard.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

const SeatBookCard = ({ date, seatNumber, location, dc }) => {
  return (
    <Card sx={{ display: "flex", padding: "10px" }}>
      <Box sx={{ flex: 2 }}>
        <Typography sx={{ fontSize: "12px" }} fontWeight="bold">
          Recent Booking
        </Typography>

        <Typography sx={{ fontSize: "10px" }}>{date}</Typography>

        <Box>
          <Typography
            sx={{ fontSize: "12px" }}
            component="div"
            fontWeight="bold"
          >
            Cubicle: MUM02 01 04 A {seatNumber}
          </Typography>
          <Typography sx={{ fontSize: "10px" }} component="div">
            {location}, {dc}, SDB01, FLOOR-4, A-Wing
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          color="success"
          sx={{
            fontSize: "10px",
            borderRadius: "25px",
            padding: "5px 15px",
            fontWeight: 900,
            width: "fit-content",
            height: "fit-content",
          }}
        >
          BOOKED
        </Button>
        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MoreIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Box>
    </Card>
  );
};

export default SeatBookCard;
