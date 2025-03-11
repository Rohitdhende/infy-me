import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({ label, value, handleChange, options }) => {
  return (
    <FormControl variant="standard" sx={{ mt: 1, mb: 1, width: "96%" }}>
      <InputLabel
        id="demo-simple-select-standard-label"
        sx={{ fontSize: "14px" }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((data) => {
          return (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
