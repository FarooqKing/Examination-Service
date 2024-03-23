import React, { useState } from "react";
import { useFormik } from "formik"; // this is used to handle the form

import Modal from "react-bootstrap/Modal";
import { applicantValidation } from "../../Schema/ApplicantValidation";
import "./Application.css";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  fatherName: "",
  gender: "",
  domicile: "",
  address: "",
  nationality: "",
  contact: "",
  cnic: "",
};
function Applicants() {
  const [applicants, setApplicant] = useState(false);

  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: applicantValidation,
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
            onClick={() => setApplicant(true)}
          >
            <span>Apply for Applicants</span>
          </Link>
        </div>
      </div>
      <Modal
        size="lg"
        show={applicants}
        onHide={() => setApplicant(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Applicants
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="wrapper">
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <div class="container-fluid">
                  <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                      <label for="validationDefault01" class="form-label">
                        <h5>Name</h5>
                      </label>
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        class="form-control"
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
                    <div class="col-md-6">
                      <label for="validationDefaultUsername" class="form-label">
                        <h5>Email</h5>
                      </label>
                      <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        class="form-control"
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
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Father Name</h5>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="fatherName"
                        class="form-control"
                        id="fatherName"
                        placeholder="fatherName"
                        value={values.fatherName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.fatherName && touched.fatherName ? (
                        <p class="form-error">{errors.fatherName}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Gender</h5>
                      </label>
                      <input
                        type="gender"
                        autoComplete="off"
                        name="gender"
                        class="form-control"
                        id="gender"
                        placeholder="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.gender && touched.gender ? (
                        <p class="form-error">{errors.gender}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="domicile" className="form-label">
                        <h5>Domicile</h5>
                      </label>
                      <select
                        className="form-select"
                        id="domicile"
                        name="domicile"
                        value={values.domicile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select Domicile</option>
                        <option value="option1">Option 1</option>{" "}
                        {/* Replace "option1" with the actual value */}
                        <option value="option2">Option 2</option>{" "}
                        {/* Replace "option2" with the actual value */}
                        {/* Add more options as needed */}
                      </select>
                      {errors.domicile && touched.domicile ? (
                        <p className="form-error">{errors.domicile}</p>
                      ) : null}
                    </div>

                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Address</h5>
                      </label>
                      <input
                        type="address"
                        autoComplete="off"
                        name="address"
                        class="form-control"
                        id="address"
                        placeholder="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.address && touched.address ? (
                        <p class="form-error">{errors.address}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="nationality" className="form-label">
                        <h5>Nationality</h5>
                      </label>
                      <select
                        className="form-select"
                        id="nationality"
                        name="nationality"
                        value={values.nationality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select Nationality</option>
                        <option value="option1">Option 1</option>{" "}
                        {/* Replace "option1" with the actual value */}
                        <option value="option2">Option 2</option>{" "}
                        {/* Replace "option2" with the actual value */}
                        {/* Add more options as needed */}
                      </select>
                      {errors.nationality && touched.nationality ? (
                        <p className="form-error">{errors.nationality}</p>
                      ) : null}
                    </div>

                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>Contact</h5>
                      </label>
                      <input
                        type="number"
                        autoComplete="off"
                        name="contact"
                        class="form-control"
                        id="contact"
                        placeholder="contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.contact && touched.contact ? (
                        <p class="form-error">{errors.contact}</p>
                      ) : null}
                    </div>
                    <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">
                        <h5>CINC</h5>
                      </label>
                      <input
                        type="number"
                        autoComplete="off"
                        name="cnic"
                        class="form-control"
                        id="cnic"
                        placeholder="cnic"
                        value={values.cnic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.cnic && touched.cnic ? (
                        <p class="form-error">{errors.cnic}</p>
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

export default Applicants;
