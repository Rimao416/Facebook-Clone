import "./style.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <Footer />
        <RegisterForm />
      </div>
    </div>
  );
}

export default Login;
