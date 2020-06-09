import React from 'react'
import * as yup from "yup";
import * as R from "ramda";
import FormField from "../../components/ui/FormField";
import { Formik, Form } from "formik";
import axios from "axios"
import {host} from '../../constants/api'
import {history} from "./../../App";

const LanguageClassSchema = yup.object().shape({
  name: yup.string().required(),
  twelve_month_price: yup.number().required(),
  do_creds: yup.string().required(),
  pa_creds: yup.string().required(),
  cne_creds: yup.string().required(),
});

const initialValues = { name: "", twelve_month_price: 0, do_creds: "", pa_creds: "", cne_creds: ""}

const postClass = async (values) => {
  console.log("yay posting :>> ", values);
  try {    
    axios.post(`${host}language_classes`, values);
  } catch (error) {
    console.error("Error posting class", error);
  }
};

const ClassForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LanguageClassSchema}
      onSubmit={(values, actions) => {
        console.log("POSTING values", values);
        postClass(values)
        history.push("/language-classes");
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        isValid,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form>
          <div className="class-form_input-group-container">
            <h2> Create a Course Package </h2>
            <FormField name="name" label="Class Name" type="text" />
            <FormField
              name="twelve_month_price"
              label="12-month Price"
              type="number"
            />
            <FormField name="do_creds" label="DO Creds" type="text" />
            <FormField name="cne_creds" label="CNE Creds" type="text" />
            <FormField name="pa_creds" label="PA Creds" type="text" />

            <div className="button-container">
              {
              // !isSubmitting ? 
              (
                <button
                  type="submit"
                  className="class-form_submit-button"
                  disabled={!isValid}
                  title={R.values(errors)}
                >
                  Submit
                </button>
              ) 
              // : (
              //   <div>...loading</div>
              // )
              }
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ClassForm;