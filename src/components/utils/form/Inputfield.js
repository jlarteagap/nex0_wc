import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="label">{label}</label>
      <input
        className={`input ${meta.touched && meta.error && 'is-danger'}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </>
  )
}

export const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="label">{label}</label>
      <textarea
        className={`textarea ${meta.touched && meta.error && 'is-danger'}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </>
  )
}
