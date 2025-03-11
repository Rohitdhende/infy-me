import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

export default function RadioG({ value, handleChange, label, options }) {
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ fontSize: "14px" }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {options?.map((data) => {
          return (
            <FormControlLabel
              key={data.value}
              sx={{ fontSize: "10px !important" }}
              value={data.value}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#7F00FF",
                    },
                    padding: "5px",
                  }}
                />
              }
              label={data.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
