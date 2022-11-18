import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;
