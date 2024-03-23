import * as Yup from "yup";

export const degreeValidation = Yup.object().shape({
  degreeTitle: Yup.string().required("Degree Title is required"),
  examinationName: Yup.string().required("Examination Name is required"),
  regular: Yup.boolean().required("Regular field is required"),
  instituteName: Yup.string().required("Institute Name is required"),
  rollNo: Yup.string().required("Roll No is required"),
  regNo: Yup.string().required("Registration No is required"),
});
