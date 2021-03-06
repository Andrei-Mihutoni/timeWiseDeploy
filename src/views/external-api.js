
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CssBaseline } from "@material-ui/core";

const currentPageName = "External API ";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();



  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };



  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };



  const callRoleBasedEndpoint = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/role`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };




  return (
    <div>
      <CssBaseline />
      <Header currentPageName={currentPageName} />
      <div className="container">
        <h1>External API</h1>
        <p>
          This is a page to test the external API.
          Use these buttons to call an external API.
        <br></br>
          The protected API call has an
          access token in its authorization header.
          <br></br>
          The API server will validate
        the access token using the Auth0 Audience value.
      </p >
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="External API Requests Examples"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={callApi}>
            Employee role - public message
        </button>


          <button
            type="button"
            className="btn btn-primary"
            onClick={callSecureApi}        >
            Manager role - protected message
        </button>

          {/* <button
          type="button"
          className="btn btn-primary"
          onClick={callRoleBasedEndpoint}        >
          Ping Role Based
        </button> */}


        </div>
        {
          message && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4">{message}</code>
                </div>
              </div>
            </div>
          )
        }
        <Footer />
      </div >
    </div>
  );
};

export default ExternalApi;