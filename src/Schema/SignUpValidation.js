import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(22).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  confirmPassword: Yup.string()
    .required("Please Enter Your")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
