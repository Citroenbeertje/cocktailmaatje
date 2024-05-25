import LoginForm from "../../components/Form/LoginForm.jsx";
import "./Login.css"
function Login({ setUsername, setJWTToken, userIsLoggedIn }) {
    return (
        <div className="login-page">
            <h1>Welcome back, Cocktailmaatje!</h1>
            <h2>Login</h2>
            <LoginForm
                setUsername={setUsername}
                setJWTToken={setJWTToken}
                userIsLoggedIn={userIsLoggedIn}
            />
        </div>
    )

}

export default Login;