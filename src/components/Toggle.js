// Toggle.js
import { React, useState } from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Toggle = ({ theme, toggleTheme }) => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const isLight = theme === "light";
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormControlLabel
      style={{ marginLeft: "20px" }}
      control={
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          onClick={toggleTheme}
          name="checkedB"
          color="primary"
        />
      }
    />

    // <button
    //   style={{
    //     color: theme === "custom" ? "white" : "#262D3B",
    //     background: theme === "custom" ? "#262D3B" : "white",
    //   }}
    //   className="togglebtn"
    //   onClick={toggleTheme}
    // >
    //   {theme !== "light" ? "Light mode" : "Dark mode"}
    // </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
