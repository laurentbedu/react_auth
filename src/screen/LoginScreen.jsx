import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const LoginScreen = () => {
  useEffect(()=>{
      loadCaptchaEnginge(6);
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_captcha_value =
      document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha_value) == true) {
      console.log("Captcha Matched");
    } else {
      console.log("Captcha Does Not Match");
    }
  };

  return (
    <div class="d-flex justify-content-center h-100">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} class="row g-3">
              <h4>Bienvenue</h4>
              <div class="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Votre adresse mail"
                />
              </div>
              <div class="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Votre mot de passe"
                />
                <Link to="/account/renewpass">Mot de passe oublié ?</Link>
              </div>
              <div class="col-12">
                <LoadCanvasTemplate />
                <div className="mt-3">
                  <div>
                    <input
                    class="form-control"
                      placeholder="Enter Captcha Value"
                      id="user_captcha_input"
                      name="user_captcha_input"
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-dark float-end">
                  Login
                </button>
              </div>
            </form>
            <hr class="mt-4" />
            <div class="col-12">
              <p class="text-center mb-0">
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
