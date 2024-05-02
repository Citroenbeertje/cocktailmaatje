import LoginForm from "../../components/Form/LoginForm.jsx";
import "./Login.css"
function Login() {
    return (
        <div className="login-page">
            <h1>Welcome back, Cocktailmaatje!</h1>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    )

}

export default Login;