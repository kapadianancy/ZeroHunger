import React from 'react';
import { Redirect } from 'react-router';

function Logout(props) {
    localStorage.removeItem("user")
    localStorage.removeItem("token");
    return (
        <div>
            <Redirect to="/volunteer/login"/>
        </div>
    );
}

export default Logout;