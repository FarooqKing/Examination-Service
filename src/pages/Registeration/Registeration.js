import React, { useState } from "react";
import { useFormik } from "formik"; // this is used to handle the form
import { signUpSchema } from "../../Schema/SignUpValidation";
import "./Registeration.css";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Registeration({ lgShow, setLgShow }) {
  const [smShow, setSmShow] = useState(false);
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("this is values", values);
        action.resetForm();
      },
    });

  return (
    <>
      <div id="wrapper wrapper1">
        <div
          id="content-wrapper content-wrapper-pages"
          class="d-flex flex-column"
          style={{ overflowX: "visible" }}
        >
          <div id="content" style={{ height: "43rem" }}>
            <div class="container-fluid container-fluid-signup">
              <div className="form-para">
                <div className="form-para-heading">
                  <h3>Welcome to SignUp</h3>
                  <p>Already account?</p>
                  <div className="btn-signup-form">
                    <button type="button" className="btn-signup rounded-pill">
                      <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {" "}
                        Log in
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-login">
                <form class="row g-3 form-controls" onSubmit={handleSubmit}>
                  <div>
                    <h2>Sign Up</h2>
                  </div>
                  <div class="col-md-12 input-field">
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      className={`form-control ${
                        errors.name && touched.name ? "error-border" : "danger"
                      }`}
                      id="name"
                      placeholder="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p class="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div class="col-md-12 input-field">
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      className={`form-control ${
                        errors.email && touched.email ? "error-border" : "red"
                      }`}
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
                      className={`form-control ${
                        errors.password && touched.password
                          ? "error-border"
                          : "red"
                      }`}
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
                  <div class="col-md-12 input-field">
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirmPassword"
                      className={`form-control ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "error-border"
                          : "red"
                      }`}
                      id="confirmPassword"
                      placeholder="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p class="form-error">{errors.confirmPassword}</p>
                    ) : null}
                  </div>

                  <button
                    class="btn btn-primary form-control rounded-pill"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registeration;
