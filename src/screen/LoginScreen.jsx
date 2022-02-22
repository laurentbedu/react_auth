import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../contexts/AuthContext";

const LoginScreen = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(3);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_captcha_value =
      document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha_value) === true) {
      console.log("Captcha Matched");
      const form = event.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      fetch("http://localhost:5000/auth/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body,
      })
        .then((resp) => resp.text())
        .then((text) => {
          const data = text.toJson();
          if (data.result) {
            document.cookie = `auth=${data.token};max-age=${60 * 60 * 24}`;
            setAuth({ role: data.role });
            console.log(data.role);
            navigate("/account");
          } else {
            document.cookie = `auth=null;max-age=0`;
            setAuth({ role: 0 });
            console.log(false);
          }
        });
    } else {
      console.log("Captcha Does Not Match");
    }
  };

  return (
    <div className="d-flex justify-content-center h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <h4>Bienvenue</h4>
              <div className="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Votre adresse mail"
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Votre mot de passe"
                />
                <Link to="/account/renewpass">Mot de passe oublié ?</Link>
              </div>
              <div className="col-12">
                <LoadCanvasTemplate />
                <div className="mt-3">
                  <div>
                    <input
                      className="form-control"
                      placeholder="Enter Captcha Value"
                      id="user_captcha_input"
                      name="user_captcha_input"
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark float-end">
                  Login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Pas encore de compte ? <Link to="/register">Créez en un</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
