import "./helpers/string.helper";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./screen/BaseScreen";
import HomeScreen from "./screen/HomeScreen";
import AdminScreen from "./screen/AdminScreen";
import UserScreen from "./screen/UserScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import AccountScreen from "./screen/AccountScreen";
import RegisterValidationScreen from "./screen/RegisterValidationScreen";
import RenewPasswordScreen from "./screen/RenewPasswordScreen";
import LogoutScreen from "./screen/LogoutScreen";
import NotFoundScreen from "./screen/NotFoundScreen";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";


function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen />} />
          {auth.role === 2 && <Route path="admin" element={<AdminScreen />} />}
          {auth.role === 1 && <Route path="user" element={<UserScreen />} />}
          {auth.role === 0 && <Route path="login" element={<LoginScreen />} />}
          {auth.role === 0 && <Route path="register" element={<RegisterScreen />} />}
          {auth.role > 0 && <Route path="account" element={<AccountScreen />} />}
          <Route path="account/validation" element={<RegisterValidationScreen />} />
          <Route path="account/renewpass" element={<RenewPasswordScreen />} />
          {auth.role > 0 && <Route path="logout" element={<LogoutScreen />} />}
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
