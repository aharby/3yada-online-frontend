import React from 'react'
import { LogoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <a href="/" className="custom_a" onClick={() => { dispatch(LogoutUser()) }}>
            Logout
        </a>
    )
}

export default Logout;
