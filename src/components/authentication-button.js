import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
    // return isAuthenticated ? <Link to='/Home'/> : <LoginButton />;
};

export default AuthenticationButton;