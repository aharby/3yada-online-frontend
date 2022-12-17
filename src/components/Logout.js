import React from 'react'
import { LogoutUser } from "../redux/auth";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <Link to="/" className="custom_a" onClick={() => { dispatch(LogoutUser()) }}>
            Logout
        </Link>
    )
}

export default Logout;
