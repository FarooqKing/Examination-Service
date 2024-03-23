import * as Yup from "yup";

export const migrationValidation = Yup.object().shape({
  to: Yup.string().required(
    "Name of the institute to which user wants to migrate is required"
  ),
  examinationName: Yup.string().required("Examination name is required"),
  regular: Yup.boolean().required("Regular field must be specified"),
  session: Yup.date().required("Session date is required"),
  rollNo: Yup.string().required("Roll number is required"),
  regNo: Yup.string().required("Registration number is required"),
  passed: Yup.boolean().required("Passed field must be specified"),
});
