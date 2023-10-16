
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/sm-logo.svg";
import supportIcon from "../../assets/images/icon/support.svg";
import headerLogo from "../../assets/images/header1-logo.svg";
import Banner from "../../components/Banner/Banner.js";

function SignupForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    error: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
  });

  const isValidateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const ValidateInputs = () => {
    let error = {};
    if (!credentials?.firstName?.trim()) {
      error.firstName = "First Name is required!";
    }
    if (!credentials?.lastName?.trim()) {
      error.lastName = "Last Name is required!";
    }
    if (!credentials?.email?.trim()) {
      error.email = "Email is required!";
    }
    if (!credentials?.password?.trim()) {
      error.password = "Password is required!";
    }
    if (!credentials?.confirmPassword?.trim()) {
      error.confirmPassword = "Confirm Password is required!";
    }
    if (credentials?.password !== credentials?.confirmPassword) {
      error.confirmPassword = "Passwords do not match!";
    }
    if (credentials?.email && !isValidateEmail(credentials?.email)) {
      error.email = "Invalid email!";
    }
    return error;
  };

  const ShowError = (error) => {
    return <p style={{ color: "red" }}>{error}</p>;
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    let error = ValidateInputs();
    if (Object?.keys(error)?.length === 0) {
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("password", btoa(credentials.password));
      localStorage.setItem("firstName", credentials.firstName);
      localStorage.setItem("lastName", credentials.lastName);
      navigate("/login");
    } else {
      setError(error);
    }
  };

  return (
    <div class="signup-section pt-120 pb-120">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div
              class="form-wrapper wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".2s"
            >
              <div class="form-title">
                <h3>Sign Up</h3>
                <p>
                  Do you already have an account?{" "}
                  <a href="/login">Log in here</a>
                </p>
              </div>
              <form class="w-100" onSubmit={handleSignUp}>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-inner">
                      <label>First Name *</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={credentials.firstName}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.firstName)}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-inner">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={credentials.lastName}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.lastName)}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-inner">
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
                  <div class="col-md-12">
                    <div class="form-inner">
                      <label>Password *</label>
                      <input
                        type="password"
                        placeholder="Create A Password"
                        value={credentials.password}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.password)}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-inner">
                      <label>Confirm Password *</label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={credentials.confirmPassword}
                        onChange={(e) =>
                          setCredentials((prev) => ({
                            ...prev,
                            confirmPassword: e.target.value,
                          }))
                        }
                      />
                      {ShowError(error?.confirmPassword)}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                      <div class="form-group">
                        <input type="checkbox" id="agree" name="agree" />
                        <label for="agree">I agree to the Terms & Policy</label>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="account-btn" type="submit">
                  Create Account
                </button>
              </form>
              <div class="alternate-signup-box">
                <h6>or signup WITH</h6>
                <div class="btn-group gap-4">
                  <button
                    onClick={() => {
                      /* handle Google login logic here */
                    }}
                    class="eg-btn google-btn d-flex align-items-center"
                  >
                    <i class="bx bxl-google"></i>
                    <span>signup with google</span>
                  </button>
                  <button
                    onClick={() => {
                      /* handle Facebook login logic here */
                    }}
                    class="eg-btn facebook-btn d-flex align-items-center"
                  >
                    <i class="bx bxl-facebook"></i>
                    <span>signup with facebook</span>
                  </button>
                </div>
              </div>
              <div class="form-poicy-area">
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

export default SignupForm;
