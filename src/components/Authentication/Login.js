
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
// import Banner from "../../components/Banner/Banner.js";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    error: { email: null, password: null },
  });

  const isValidateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const ValidateInputs = () => {
    let error = {};
    if (!credentials?.email?.trim()) {
      error.email = "Email is required!";
    }
    if (!credentials?.password?.trim()) {
      error.password = "Password is required!";
    }
    if (credentials?.email && !isValidateEmail(credentials?.email)) {
      error.email = "Invalid Email!";
    }
    return error;
  };

  const ShowError = (error) => {
    return <p style={{ color: "red" }}>{error}</p>;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let error = ValidateInputs();
    if (Object?.keys?.(error)?.length === 0) {
      setError(error);
      if (login(credentials.email, credentials.password)) {
        navigate("/Home");
      } else {
        alert("Invalid Credentials");
      }
    } else {
      setError(error);
    }
  };

  return (
    <div className="login-section pt-120 pb-120">
      <div className="container">
        <div className="row d-flex justify-content-center g-4">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="form-wrapper">
              <div className="form-title">
                <h3>Log In</h3>
                <p>
                  New Member? <a href="/">signup here</a>
                </p>
              </div>
              <form className="w-100" onSubmit={handleLogin}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-inner">
                      <label>Enter Your Email *</label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={credentials.email}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.email)}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <label>Password *</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.password)}
                      <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                      <div className="form-group">
                        <input type="checkbox" id="html" />
                        <label htmlFor="html">
                          I agree to the <a href="#">Terms & Policy</a>
                        </label>
                      </div>
                      <a href="#" className="forgot-pass">
                        Forgotten Password
                      </a>
                    </div>
                  </div>
                </div>
                <button className="account-btn" type="submit">
                  Log in
                </button>
              </form>
              <div className="alternate-signup-box">
                <h6>or signup WITH</h6>
                <div className="btn-group gap-4">
                  <button
                    href="#"
                    className="eg-btn google-btn d-flex align-items-center"
                  >
                    <i className="bx bxl-google"></i>
                    <span>signup with google</span>
                  </button>
                  <button
                    href="#"
                    className="eg-btn facebook-btn d-flex align-items-center"
                  >
                    <i className="bx bxl-facebook"></i>signup with facebook
                  </button>
                </div>
              </div>
              <div className="form-poicy-area">
                <p>
                  By clicking the "signup" button, you create a Cobiro account,
                  and you agree to Cobiro's <a href="#">Terms & Conditions</a> &{" "}
                  <a href="#">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
