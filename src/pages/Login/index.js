
import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import UserForm from "../../components/UserForm";
import { loginUser } from "../../redux/auth";
import { Link, useNavigate } from "react-router-dom";


const Login = (props) => {
    // access to the isAuthenticated property from the auth reducer state
    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }

    })

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(loginUser(formVal));
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Login to your account
                </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="Login"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Login;