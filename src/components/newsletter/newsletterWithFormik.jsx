import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./newsletter.module.css";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";
import { saveEmails } from "../../redux/actions";
import { useDispatch } from "react-redux";

const NewsletterWithFormik = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={style.text}>
        <h1>NEWSLETTER</h1>
        <h2>SUSCRIBETE</h2>
        <p>Y enterate de todas las novedades</p>
      </div>
      <div className={style.inputcontainer}>
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Por favor ingresa un correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Por favor ingresa un email valido!";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            Swal.fire({
              title: "Listo",
              text: `Te has suscripto correctamente con el correo "${values.email}", te enviaremos novedades pronto!`,
              icon: "success",
              confirmButtonText: "GENIAL",
            });
            dispatch(saveEmails(values.email));
            resetForm();
          }}
        >
          {(errors) => (
            <Form>
              <div className={style.inputfield}>
                <Field
                  className={style.input}
                  type="email"
                  name="email"
                  placeholder="Ingresa tu E-Mail"
                />
                <button className={style.inputbutton} type="submit">
                  <FaArrowRight />
                </button>
              </div>
              <div className={style.errorcontainer}>
                <ErrorMessage
                  className={style.error}
                  name="email"
                  component="div"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewsletterWithFormik;
