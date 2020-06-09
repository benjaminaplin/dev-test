import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const FormField = ({ name, label, ...rest }) => (
  <div>
    <div>{label && <label>{label}</label>}</div>
    <div className="input-error">
      {/* <ErrorMessage name={name} /> */}
      <ErrorMessage
        name={name}
        render={(msg) => <div className="input-error">{msg}</div>}
      />
    </div>
    <div className="form-input-container">
      <Field name={name} {...rest} />
    </div>
  </div>
);
export default FormField;

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
