import React, { useState } from "react";
import { useFormik } from "formik"; // this is used to handle the form

import Modal from "react-bootstrap/Modal";
import { degreeValidation } from "../../Schema/DegreeValidation";
import { Link } from "react-router-dom";

const initialValues = {
  degreeTitle: "",
  examinationName: "",
  regular: "",
  instituteName: "",
  rollNo: "",
  regNo: "",
};
function DegreeApplication() {
  const [degree, setDegree] = useState(false);

  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: degreeValidation,
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
            onClick={() => setDegree(true)}
          >
            <span>Apply for Degree</span>
          </Link>
        </div>
      </div>

      <Modal
        size="lg"
        show={degree}
        onHide={() => setDegree(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Apply For Degree
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="wrapper">
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <div class="container-fluid">
                  <form class="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label htmlFor="degreeTitle" className="form-label">
                        <h5>Degree Title</h5>
                      </label>
                      <select
                        className="form-select"
                        id="degreeTitle"
                        name="degreeTitle"
                        value={values.degreeTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Degree Title</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                      </select>
                      {errors.degreeTitle && touched.degreeTitle ? (
                        <p className="form-error">{errors.degreeTitle}</p>
                      ) : null}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="examinationName" className="form-label">
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
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                      </select>
                      {errors.examinationName && touched.examinationName ? (
                        <p className="form-error">{errors.examinationName}</p>
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
                      <label for="instituteName" class="form-label">
                        Institute Name
                      </label>
                      <select
                        name="instituteName"
                        class="form-control"
                        id="instituteName"
                        value={values.instituteName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select Institute</option>
                        <option value="Institute 1">Institute 1</option>
                        <option value="Institute 2">Institute 2</option>
                        <option value="Institute 3">Institute 3</option>
                      </select>
                      {errors.instituteName && touched.instituteName ? (
                        <p class="form-error">{errors.instituteName}</p>
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

export default DegreeApplication;
