import React, { useState } from "react";
import { useFormik } from "formik"; // this is used to handle the form

import Modal from "react-bootstrap/Modal";
import { migrationValidation } from "../../Schema/MigrationValidation";
import { Link } from "react-router-dom";

const initialValues = {
  examinationName: "",
  to: "",
  regular: "",
  session: "",
  rollNo: "",
  regNo: "",
  passed: "",
};
function Migration() {
  const [migration, setMigration] = useState(false);

  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: migrationValidation,
      onSubmit: (values, action) => {
        console.log("this is values", values);
        action.resetForm();
      },
    });

  return (
    <>
      <div className="card" style={{ width: " 18rem", height: "21rem" }}>
        <div
          className="image-content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="card-image"
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "1rem 0",
            }}
          >
            <img
              src="../assets/card.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "30%", borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to="#"
            type="button"
            className="nav-link btn btn-primary"
            onClick={() => setMigration(true)}
          >
            <span>Apply for Migration</span>
          </Link>
        </div>
      </div>
      <Modal
        size="lg"
        show={migration}
        onHide={() => setMigration(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Apply For Migration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="wrapper">
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <div class="container-fluid">
                  <form class="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label htmlFor="domicile" className="form-label">
                        <h5>Examination Name</h5>
                      </label>
                      <select
                        className="form-select"
                        id="examinationName"
                        name="examinationName"
                        value={values.examinationName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Examination Name</option>
                        <option value="option1">Option 1</option>{" "}
                        <option value="option2">Option 2</option>{" "}
                      </select>
                      {errors.examinationName && touched.examinationName ? (
                        <p className="form-error">{errors.examinationName}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>TO</h5>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="to"
                        class="form-control"
                        id="to"
                        placeholder="to"
                        value={values.to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.to && touched.to ? (
                        <p class="form-error">{errors.to}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <label
                        className="form-label"
                        // style={{ display: "inline-block", marginRight: "10px" }}
                      >
                        <h5>Regular</h5>
                      </label>
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          className="form-check"
                          // style={{ display: "inline-block", marginRight: "10px" }}
                        >
                          <input
                            type="radio"
                            id="regularYes"
                            name="regular"
                            className="form-check-input"
                            value="true"
                            checked={values.regular === "true"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label
                            htmlFor="regularYes"
                            className="form-check-label"
                          >
                            Yes
                          </label>
                        </div>
                        <div
                          className="form-check"
                          style={{ display: "inline-block" }}
                        >
                          <input
                            type="radio"
                            id="regularNo"
                            name="regular"
                            className="form-check-input"
                            value="false"
                            checked={values.regular === "false"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label
                            htmlFor="regularNo"
                            className="form-check-label"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {errors.regular && touched.regular ? (
                        <p className="form-error">{errors.regular}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Session</h5>
                      </label>
                      <input
                        type="date"
                        autoComplete="off"
                        name="session"
                        class="form-control"
                        id="session"
                        placeholder="session"
                        value={values.session}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.session && touched.session ? (
                        <p class="form-error">{errors.session}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Roll No</h5>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="rollNo"
                        class="form-control"
                        id="rollNo"
                        placeholder="rollNo"
                        value={values.rollNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.rollNo && touched.rollNo ? (
                        <p class="form-error">{errors.rollNo}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Reg No</h5>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="regNo"
                        class="form-control"
                        id="regNo"
                        placeholder="regNo"
                        value={values.regNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.regNo && touched.regNo ? (
                        <p class="form-error">{errors.regNo}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <label
                        className="form-label"
                        // style={{ display: "inline-block", marginRight: "10px" }}
                      >
                        <h5>Passed</h5>
                      </label>
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          className="form-check"
                          // style={{ display: "inline-block", marginRight: "10px" }}
                        >
                          <input
                            type="radio"
                            id="passedYes"
                            name="passed"
                            className="form-check-input"
                            value="true"
                            checked={values.passed === "true"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label
                            htmlFor="passedYes"
                            className="form-check-label"
                          >
                            Yes
                          </label>
                        </div>
                        <div
                          className="form-check"
                          style={{ display: "inline-block" }}
                        >
                          <input
                            type="radio"
                            id="passedNo"
                            name="passed"
                            className="form-check-input"
                            value="false"
                            checked={values.passed === "false"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label
                            htmlFor="passedNo"
                            className="form-check-label"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {errors.passed && touched.passed ? (
                        <p className="form-error">{errors.passed}</p>
                      ) : null}
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary" type="submit">
                        Submit form
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Migration;
