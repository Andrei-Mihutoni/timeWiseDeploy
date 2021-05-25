import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../views/profile";
import Settings from "../components/Settings";
// Theme changer
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, customTheme } from "../theme";
import { GlobalStyles } from "../global";
import Toggle from "../components/Toggle";

function MyProfile(props) {
  const currentPageName = props.location.pathname.substring(1);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "custom") {
      setTheme("custom");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="MyProfile">
      <Header currentPageName={currentPageName} />
      <Profile className="profile" />
      <div style={{ marginTop: "100px" }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </>
          <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
        </ThemeProvider>{" "}
        <Settings />
      </div>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default MyProfile;
