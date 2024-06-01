import LoginForm from "../../components/Form/LoginForm.jsx";
import "./Login.css"
function Login({ username, setUsername, setJWTToken, userIsLoggedIn }) {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <h2>Welcome back to Cocktailmaatje</h2>
            <LoginForm
                setUsername={setUsername}
                setJWTToken={setJWTToken}
                userIsLoggedIn={userIsLoggedIn}
                username={username}
            />
        </div>
    )

}

export default Login;