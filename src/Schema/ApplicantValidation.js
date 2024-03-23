import * as Yup from "yup";

export const applicantValidation = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(22, "Name must be at most 22 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  fatherName: Yup.string()
    .min(2, "Father's name must be at least 2 characters")
    .max(22, "Father's name must be at most 22 characters")
    .required("Please enter your father's name"),
  gender: Yup.string().required("Please select your gender"),
  address: Yup.string().required("Please enter your address"),
  nationality: Yup.string().required("Please select your nationality"),
  domicile: Yup.string().min(2).required("Please select your domicile"),
  // .oneOf(["Option1", "Option2", "Option3"], "Please select a valid domicile"),
  contact: Yup.string()
    .matches(/^\d{10}$/, "Contact must be exactly 11 digits")
    .required("Please enter your contact number"),
  cnic: Yup.string()
    .matches(
      /^\d{5}-\d{7}-\d{1}$/,
      "CNIC must be in the format XXXXX-XXXXXXX-X"
    )
    .required("Please enter your CNIC"),
});
