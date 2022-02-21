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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen />}/>
          <Route path="admin" element={<AdminScreen />}/>
          <Route path="user" element={<UserScreen />}/>
          <Route path="login" element={<LoginScreen />}/>
          <Route path="register" element={<RegisterScreen />}/>
          <Route path="account" element={<AccountScreen />}/>
          <Route path="account/validation" element={<RegisterValidationScreen />}/>
          <Route path="account/renewpass" element={<RenewPasswordScreen />}/>    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
