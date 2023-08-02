/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import '../../App.css';
import { toFormikValidate } from 'zod-formik-adapter';
import SetHotelFormSchema, { SetHotelFormSchemaType } from './index.schema';

const initialValues = {
  uniformeDesde: 192,
  uniformeHasta: 208,
  cantidadDiasGenerar: 100,
  diaDesde: 0,
  diaHasta: 50,
  cantidadHabitaciones: 200,
  precioHabitacion: 300,
  costoHabitacionOcupada: 110,
  costoHabitacionDesocupada: 70,
  costoRecibirPersonaSinLugar: 400,
  reservaSinAsistencia0: 0.03,
  reservaSinAsistencia1: 0.09,
  reservaSinAsistencia2: 0.12,
  reservaSinAsistencia3: 0.16,
  reservaSinAsistencia4: 0.19,
  reservaSinAsistencia5: 0.13,
  reservaSinAsistencia6: 0.11,
  reservaSinAsistencia7: 0.08,
  reservaSinAsistencia8: 0.06,
  reservaSinAsistencia9: 0.03,
};

export default function HotelForm(props) {
  const { sendDataToParent, averageUtility, executionTime } = props;

  const handleSubmit = (values: SetHotelFormSchemaType) => {
    sendDataToParent(values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={toFormikValidate(SetHotelFormSchema)}
      >
        {() => (
          <Form className="formik-form">
            <div className="form-grid">
              <div className="form-column">
                <h3>Distribucion</h3>
                <div className="form-group">
                  <label htmlFor="uniformeDesde">Uniforme Desde</label>
                  <Field type="number" step=".01" name="uniformeDesde" />
                  <ErrorMessage name="uniformeDesde" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="uniformeHasta">Uniforme Hasta</label>
                  <Field type="number" step=".01" name="uniformeHasta" />
                  <ErrorMessage name="uniformeHasta" component="div" className="error" />
                </div>
              </div>
              <div className="form-column">
                <h3>Condiciones</h3>
                <div className="form-group">
                  <label htmlFor="precioHabitacion">Precio habitacion</label>
                  <Field type="number" step=".01" name="precioHabitacion" />
                  <ErrorMessage name="precioHabitacion" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoHabitacionOcupada">Costo habitacion ocupada</label>
                  <Field type="number" step=".01" name="costoHabitacionOcupada" />
                  <ErrorMessage name="costoHabitacionOcupada" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoHabitacionDesocupada">Costo habitacion desocupada</label>
                  <Field type="number" step=".01" name="costoHabitacionDesocupada" />
                  <ErrorMessage name="costoHabitacionDesocupada" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoRecibirPersonaSinLugar">Costo recibir personas sin lugar</label>
                  <Field type="number" step=".01" name="costoRecibirPersonaSinLugar" />
                  <ErrorMessage name="costoRecibirPersonaSinLugar" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="cantidadHabitaciones">Cantidad de habitaciones</label>
                  <Field type="number" step=".01" name="cantidadHabitaciones" />
                  <ErrorMessage name="cantidadHabitaciones" component="div" className="error" />
                </div>
              </div>
              <div className="form-column">
                <h3>Reservas sin asistencia</h3>
                <div className="probabilidad">
                  <div>
                    <h3>Reservaciones sin asistencia</h3>
                    <div className="numbers">
                      <p>0</p>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                      <p>8</p>
                      <p>9</p>
                    </div>
                  </div>
                  <div>
                    <h3>Probabilidad</h3>
                    <div className="probabilidades-input">
                      <div className="form-group pt-1">
                        <Field type="number" step=".01" name="reservaSinAsistencia0" />
                        <ErrorMessage name="reservaSinAsistencia0" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia1" />
                        <ErrorMessage name="reservaSinAsistencia1" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia2" />
                        <ErrorMessage name="reservaSinAsistencia2" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia3" />
                        <ErrorMessage name="reservaSinAsistencia3" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia4" />
                        <ErrorMessage name="reservaSinAsistencia4" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia5" />
                        <ErrorMessage name="reservaSinAsistencia5" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia6" />
                        <ErrorMessage name="reservaSinAsistencia6" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia7" />
                        <ErrorMessage name="reservaSinAsistencia7" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia8" />
                        <ErrorMessage name="reservaSinAsistencia8" component="div" className="error-probabilidad" />
                      </div>
                      <div className="form-group">
                        <Field type="number" step=".01" name="reservaSinAsistencia9" />
                        <ErrorMessage name="reservaSinAsistencia9" component="div" className="error-probabilidad" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-column">
                <h3>Simulacion</h3>
                <div className="form-group">
                  <label htmlFor="cantidadDiasGenerar">Cantidad de dias a generar</label>
                  <Field type="number" step=".01" name="cantidadDiasGenerar" />
                  <ErrorMessage name="cantidadDiasGenerar" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="diaDesde">Dia Desde</label>
                  <Field type="number" step=".01" name="diaDesde" />
                  <ErrorMessage name="diaDesde" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="diaHasta">Dia Hasta</label>
                  <Field type="number" step=".01" name="diaHasta" />
                  <ErrorMessage name="diaHasta" component="div" className="error" />
                </div>
                <button type="submit">Generar</button>
                <div>
                  <h3>
                    Tiempo de ejecucion:
                    {' '}
                    <span className="blue-text">
                      {executionTime}
                      {' '}
                      segundos
                    </span>
                  </h3>
                  <h3>
                    Utilidad Promedio:
                    {' '}
                    <span className="green-text">
                      $
                      {averageUtility}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
