import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const history = useHistory();

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values that the form will take ***
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // *** onSubmit Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localStorage
          await localStorage.setItem("credentials", values);
          history.push("/profile");
        }}
      >
        {/* We obtain props from Formil */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />

            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
