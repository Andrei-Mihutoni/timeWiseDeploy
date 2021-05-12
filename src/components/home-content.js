import React from "react";
import AuthenticationButton from "./authentication-button";
import SignupButton from "./signup-button"
import { useAuth0 } from "@auth0/auth0-react";

const HomeContent = () => {
const { isAuthenticated } = useAuth0();


return(
<div className="homeContent">

    <AuthenticationButton />
    {!isAuthenticated && < SignupButton />}
   
</div>

)

}

export default HomeContent;
