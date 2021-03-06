import { React, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../views/profile";
import ClientLogo from "../media/NyLivLogo.png";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Home(props) {
  const [location, setLocation] = useState("");
  // const [currentPageName, setCurrentPageName] = useState("");

  // const currentPageName = props.location.pathname.substring(1);
  const currentPageName = "HOME";

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const { user } = useAuth0();
  const classes = useStyles();
  return (
    <div>
      <Header currentPageName={currentPageName} />
      <CssBaseline />

      <div className={classes.root}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 className={(classes.paper, "marginTopHome1")}>
                {currentPageName} </h2>
              <Divider style={{ marginTop: '-5px', marginBottom: '15px' }} variant="middle" />
            </Grid>
            <Grid justify="left" alignItems="left" item xs={6}>
              <div >
                <p className={(classes.paper, "marginTopHome1")} style={{ fontSize: "14px", fontWeight: '600' }}>
                  {/* {JSON.stringify(user, null, 2)} */}
                  Hello {user.nickname}
                </p>
                <p className={"marginTopHome1 secondaryOpacity75"}>Manager</p>
                <p className={"marginTopHome1 secondaryOpacity75"}>Ny Liv Spa</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img
                className="clientLogo"
                src={ClientLogo}
                alt="Client Logo"
                style={{ marginTop: "0px" }}
              />
            </Grid>

            <Grid style={{ marginTop: "80px" }} item xs={6}>
              <h3 className="marginTopHome2 actionNameHP">Add new shift</h3>
            </Grid>
            <Grid style={{ marginTop: "80px" }} item xs={6}>
              <Link to="/AddShifts">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#009bcc",
                    color: "white",
                  }}
                >
                  ADD SHIFT
                </Button>
              </Link>
            </Grid>
            <Box
              borderBottom={1}
              style={{ width: "100vw", borderColor: "gray", margin: "10px", marginTop: "1px", opacity: "50%", }}
            />
            <Grid style={{ marginTop: "10px" }} item xs={6}>
              <h3 className="marginTopHome2 actionNameHP">Edit a shift</h3>
            </Grid>
            <Grid style={{ marginTop: "10px" }} item xs={6}>
              <Link to="/Editshifts">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#009bcc",
                    color: "white",
                  }}
                >
                  EDIT SHIFT
                </Button>
              </Link>
            </Grid>
            <Box
              borderBottom={1}
              style={{ width: "100vw", borderColor: "gray", margin: "10px", marginTop: "1px", opacity: "50%", }}
            />
            <Grid style={{ marginTop: "10px" }} item xs={6}>
              <h3 className="marginTopHome2 actionNameHP">Shift requests</h3>
            </Grid>
            <Grid style={{ marginTop: "10px" }} item xs={6}>
              <Link to="/ShiftRequest">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#009bcc",
                    color: "white",
                  }}
                >
                  REQUESTS
                </Button>
              </Link>
            </Grid>
            <Box
              borderBottom={1}
              style={{ width: "100vw", borderColor: "gray", margin: "10px", marginTop: "1px", opacity: "50%", }}
            />
          </Grid>
        </Container>
      </div>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
