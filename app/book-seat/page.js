"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RadioG from "../components/Radio";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dropdown from "../components/Dropdown";
import Checkbox from "@mui/material/Checkbox";
import Header from "../components/Header";
import SeatBookCard from "../components/SeatBookCard";

const Login = () => {
  const [date, setDate] = React.useState("12-Mar-2025");
  const [city, setCity] = React.useState("Mumbai");
  const [dc, setDc] = React.useState("ILMUMBAISTP");
  const [buildingNumber, setBuildingNumber] = React.useState("SDB01");
  const [floor, setFloor] = React.useState("FLOOR-4");
  const [wing, setWing] = React.useState("A");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dateOptions = ["12-Mar-2025", "13-Mar-2025", "14-Mar-2025"];
  const cityOptions = ["Mumbai", "Vikhroli"];
  const dcOptions = ["ILMUMBAISTP", "Vikhroli"];
  const buildOptions = ["SDB01"];
  const floorOptions = ["FLOOR-4"];
  const wingOptions = ["A"];

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleDc = (event) => {
    setDc(event.target.value);
  };

  const handleBuildingNumber = (event) => {
    setBuildingNumber(event.target.value);
  };

  const handleFloor = (event) => {
    setFloor(event.target.value);
  };

  const handleWing = (event) => {
    setWing(event.target.value);
  };
  const allocationOptions = [
    {
      value: "account",
      label: "Account",
    },
    {
      value: "unit",
      label: "Unit/ Subunit",
    },
    {
      value: "general",
      label: "General",
    },
  ];
  const [allocation, setAllocation] = React.useState("general");

  const handleAllocation = (event) => {
    console.log("www", event.target.value);
    setAllocation(event.target.value);
  };
  return (
    <Box>
      <Header />
      <Box
        sx={{
          padding: "10px 15px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <SeatBookCard
          date="12-Mar-2025"
          seatNumber={"365"}
          location={city}
          dc={dc}
        />
        <Box>
          <Typography>Provide your DC and building preferences</Typography>
          <Dropdown
            label="Date"
            value={date}
            handleChange={handleChange}
            options={dateOptions}
          />
          <Dropdown
            label="City"
            value={city}
            handleChange={handleCity}
            options={cityOptions}
          />
          <Dropdown
            label="DC"
            value={dc}
            handleChange={handleDc}
            options={dcOptions}
          />
          <Box>
            <RadioG
              options={allocationOptions}
              label={"Allocation"}
              value={allocation}
              handleChange={handleAllocation}
            />
          </Box>

          <Dropdown
            label="Building Number"
            value={buildingNumber}
            handleChange={handleBuildingNumber}
            options={buildOptions}
          />
          <Box sx={{ display: "flex" }}>
            <Dropdown
              label="Floor"
              value={floor}
              handleChange={handleFloor}
              options={floorOptions}
            />
            <Dropdown
              label="Wing"
              value={wing}
              handleChange={handleWing}
              options={wingOptions}
            />
          </Box>
        </Box>

        <Card>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "fit-content",
              padding: "10px 20px !important",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="div" fontWeight="bold">
              Available Seats
            </Typography>
            <Typography variant="body1" color="success" fontWeight="bold">
              0
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              "&.Mui-checked": {
                color: "#7F00FF",
              },
            }}
          />
          <Typography
            variant="body1"
            color="grey"
            fontWeight="bold"
            sx={{ mt: "10px", fontSize: "10px" }}
          >
            Are you willing to disclose that you are in office so that
            colleagues, can know for better collaboration. You can change this
            while booking next time or rebooking.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
