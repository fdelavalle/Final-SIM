/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { z } from 'zod';
import '../../App.css';

const schema = z.object({
  uniformeDesde: z.number().min(0),
  uniformeHasta: z.number().min(0),
  cantidadDiasGenerar: z.number().min(0),
  diaDesde: z.number().min(0),
  diaHasta: z.number().min(0),
  cantidadHabitaciones: z.number().min(0),
  precioHabitacion: z.number().min(0),
  costoHabitacionOcupada: z.number().min(0),
  costoHabitacionDesocupada: z.number().min(0),
  costoRecibirPersonaSinLugar: z.number().min(0),
  reservaSinAsistencia0: z.number().min(0),
  reservaSinAsistencia1: z.number().min(0),
  reservaSinAsistencia2: z.number().min(0),
  reservaSinAsistencia3: z.number().min(0),
  reservaSinAsistencia4: z.number().min(0),
  reservaSinAsistencia5: z.number().min(0),
  reservaSinAsistencia6: z.number().min(0),
  reservaSinAsistencia7: z.number().min(0),
  reservaSinAsistencia8: z.number().min(0),
  reservaSinAsistencia9: z.number().min(0),
});

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
  const { sendDataToParent } = props;

  const onSubmit = (values) => {
    console.log(values);
    sendDataToParent(values);
  };
  return (
    <div className="form-container">
      <h1>Simulacion Hotel</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => {
          try {
            schema.parse(values);
          } catch (error) {
            return error.formErrors.fieldErrors;
          }
        }}
      >
        {() => (
          <Form className="formik-form">
            <div className="form-grid">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="uniformeDesde">Uniforme Desde:</label>
                  <Field type="number" step=".01" name="uniformeDesde" />
                  <ErrorMessage name="uniformeDesde" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="uniformeHasta">Uniforme Hasta:</label>
                  <Field type="number" step=".01" name="uniformeHasta" />
                  <ErrorMessage name="uniformeHasta" component="div" />
                </div>
                {/* Add other form groups for the first column here */}
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="cantidadDiasGenerar">Cantidad de dias a generar:</label>
                  <Field type="number" step=".01" name="cantidadDiasGenerar" />
                  <ErrorMessage name="cantidadDiasGenerar" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="diaDesde">Dia Desde:</label>
                  <Field type="number" step=".01" name="diaDesde" />
                  <ErrorMessage name="diaDesde" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="diaHasta">Dia Hasta:</label>
                  <Field type="number" step=".01" name="diaHasta" />
                  <ErrorMessage name="diaHasta" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="cantidadHabitaciones">Cantidad de habitaciones</label>
                  <Field type="number" step=".01" name="cantidadHabitaciones" />
                  <ErrorMessage name="cantidadHabitaciones" component="div" />
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="precioHabitacion">Precio habitacion:</label>
                  <Field type="number" step=".01" name="precioHabitacion" />
                  <ErrorMessage name="precioHabitacion" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoHabitacionOcupada">Costo habitacion ocupada</label>
                  <Field type="number" step=".01" name="costoHabitacionOcupada" />
                  <ErrorMessage name="costoHabitacionOcupada" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoHabitacionDesocupada">Costo habitacion desocupada</label>
                  <Field type="number" step=".01" name="costoHabitacionDesocupada" />
                  <ErrorMessage name="costoHabitacionDesocupada" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="costoRecibirPersonaSinLugar">Costo recibir personas sin lugar</label>
                  <Field type="number" step=".01" name="costoRecibirPersonaSinLugar" />
                  <ErrorMessage name="costoRecibirPersonaSinLugar" component="div" />
                </div>
              </div>
              <div className="form-column">
                <div className="probabilidad">
                  <div>
                    <h3>Reservaciones sin asistencia</h3>
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
                  <div className="margin-top">
                    <h3>Probabilidad</h3>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia0" />
                      <ErrorMessage name="reservaSinAsistencia0" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia1" />
                      <ErrorMessage name="reservaSinAsistencia1" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia2" />
                      <ErrorMessage name="reservaSinAsistencia2" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia3" />
                      <ErrorMessage name="reservaSinAsistencia3" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia4" />
                      <ErrorMessage name="reservaSinAsistencia4" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia5" />
                      <ErrorMessage name="reservaSinAsistencia5" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia6" />
                      <ErrorMessage name="reservaSinAsistencia6" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia7" />
                      <ErrorMessage name="reservaSinAsistencia7" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia8" />
                      <ErrorMessage name="reservaSinAsistencia8" component="div" />
                    </div>
                    <div className="form-group">
                      <Field type="number" step=".01" name="reservaSinAsistencia9" />
                      <ErrorMessage name="reservaSinAsistencia9" component="div" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
