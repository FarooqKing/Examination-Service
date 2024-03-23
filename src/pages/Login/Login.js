import React from "react";
import { useFormik } from "formik"; // this is used to handle the form
import { loginValidation } from "../../Schema/LoginValidation";
import "./login.css";
import { Link } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
      onSubmit: (values, action) => {
        console.log("this is values", values);
        action.resetForm();
      },
    });
  return (
    <div id="wrapper wrapper1">
      <div
        id="content-wrapper content-wrapper-pages"
        class="d-flex flex-column"
        style={{ overflowX: "visible" }}
      >
        <div id="content" style={{ height: "43rem" }}>
          <div class="container-fluid container-fluid-login">
            <div className="form-login">
              <form class="row g-3 form-controls" onSubmit={handleSubmit}>
                <div>
                  <h2>Login</h2>
                </div>
                <div class="col-md-12 input-field">
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    class="form-control rounded-pill"
                    id="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p class="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div class="col-md-12 input-field">
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    class="form-control rounded-pill"
                    id="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p class="form-error">{errors.password}</p>
                  ) : null}
                </div>

                <button
                  class="btn btn-primary form-control rounded-pill"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="form-para">
              <div className="form-para-heading">
                <h3>Welcome to Login</h3>
                <p>Don't have an account?</p>
                <div className="btn-signup-form">
                  <button type="button" className="btn-signup rounded-pill">
                    <Link
                      to="/Registeration"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      sign up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
