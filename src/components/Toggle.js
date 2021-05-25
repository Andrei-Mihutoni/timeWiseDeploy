// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <button
      style={{
        color: theme === "custom" ? "white" : "#262D3B",
        background: theme === "custom" ? "#262D3B" : "white",
      }}
      className="togglebtn"
      onClick={toggleTheme}
    >
      {theme !== "light" ? "Light mode" : "Dark mode"}
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
