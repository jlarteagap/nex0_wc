import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { InputField, TextAreaField } from './Inputfield'
import { Loading } from '../load/Loading'

export const FormContact = ({ toggleModal }) => {
  const API_HOST = process.env.API_HOST
  const A = process.env.API_HOST.A
  const E = process.env.API_HOST.E
  const UB = process.env.API_HOST.UB

  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = Yup.object({
    nombre: Yup.string().required('Su nombre es requerido'),
    telefono: Yup.string().required('Un número de teléfono es requerido'),
    email: Yup.string()
      .email('El correo no válido')
      .required('Su correo electronico es requerido'),
    mensaje: Yup.string()
      .min(
        6,
        'Su mensaje es demasiado corto, intente enviar ampliar su mensaje'
      )
      .required('Necesitamos un mensaje de su parte.')
  })
  return (
    <Formik
      initialValues={{
        nombre: '',
        email: '',
        mensaje: ''
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        const url = `${API_HOST}/contactos/?a=${A}&e=${E}&ub=${UB}`

        fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(values)
        })
          .then(response => response.json())
          .then(data => {
            setLoading(true)
            if (data.message === 'OK') {
              setStatus(!status)
              setLoading(false)
            }
          })
          .then(
            setTimeout(() => {
              setStatus(false)
            }, 5000)
          )
          .then(resetForm())
      }}
    >
      {formik => (
        <div>
          {status && (
            <div className="is-flex is-justify-content-center is-align-items-center">
              {loading ? (
                <Loading />
              ) : (
                <div className="is-flex is-flex-direction-column">
                  <div className="notification is-success is-light">
                    Su mensaje ha sido enviado correctamente.
                  </div>
                  <div className="is-flex is-justify-content-center">
                    <button
                      className="button is-success is-outlined"
                      onClick={toggleModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {status || (
            <Form>
              <InputField label="Nombre" type="text" name="nombre" />
              <InputField label="Email" type="email" name="email" />
              <InputField label="Teléfono" type="text" name="telefono" />
              <TextAreaField label="Deje su mensaje" name="mensaje" />
              <div className="mt-3">
                <button
                  className="button is-danger is-inverted mr-5"
                  type="button"
                  onClick={toggleModal}
                >
                  Cancelar
                </button>
                <button type="submit" className="button nexo__btn">
                  Enviar mensaje
                </button>
              </div>
            </Form>
          )}
        </div>
      )}
    </Formik>
  )
}
