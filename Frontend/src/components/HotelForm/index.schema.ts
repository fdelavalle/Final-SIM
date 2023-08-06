import { TypeOf, z } from 'zod';

const SetHotelFormSchema = z.object({
  uniformeDesde: z
    .number({
      invalid_type_error: 'Uniforme Desde debe ser un numero',
    })
    .int('El numero debe ser un entero')
    .min(0, 'Uniforme Desde debe ser mayor a 0'),
  uniformeHasta: z
    .number({
      invalid_type_error: 'Uniforme Hasta debe ser un numero',
    })
    .int('El numero debe ser un entero')
    .min(0, 'Uniforme Hasta debe ser mayor a 0'),
  cantidadDiasGenerar: z
    .number({
      invalid_type_error: 'Cantidad de dias a generar debe ser un numero',
    })
    .max(10000000, 'Cantidad de dias a generar debe ser menor a 10000000')
    .int('El numero debe ser un entero')
    .min(0, 'Cantidad de dias a generar debe ser mayor a 0'),
  diaDesde: z
    .number({
      invalid_type_error: 'Dia Desde debe ser un numero',
    })
    .int('El numero debe ser un entero')
    .min(0, 'Dia desde debe ser mayor a 0'),
  diaHasta: z
    .number({
      invalid_type_error: 'Dia Hasta debe ser un numero',
    })
    .int('El numero debe ser un entero')
    .min(0, 'Dia hasta debe ser mayor a 0'),
  cantidadHabitaciones: z
    .number({
      invalid_type_error: 'Cantidad de habitaciones debe ser un numero',
    })
    .int('El numero debe ser un entero')
    .min(0, 'Cantidad de habitacion debe ser mayor a 0'),
  precioHabitacion: z.number({
    invalid_type_error: 'Precio Habitacion debe ser un numero',
  }).min(0, 'Precio de habitacion debe ser mayor a 0'),
  costoHabitacionOcupada: z.number({
    invalid_type_error: 'Costo Habitacion Ocupada debe ser un numero',
  }).min(0, 'Costo de habitacion ocupada debe ser mayor a 0'),
  costoHabitacionDesocupada: z.number({
    invalid_type_error: 'Costo Habitacion Desocupada debe ser un numero',
  }).min(0, 'Costo de habitacion desocupada debe ser mayor a 0'),
  costoRecibirPersonaSinLugar: z.number({
    invalid_type_error: 'Costo Recibir Personas Sin Lugar debe ser un numero',
  }).min(0, 'Costo de recibir persona sin lugar debe ser mayor a 0'),
  reservaSinAsistencia0: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia1: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia2: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia3: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia4: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia5: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia6: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia7: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia8: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
  reservaSinAsistencia9: z.number({
    invalid_type_error: 'El valor debe ser un numero',
  }).min(0, 'Debe ser mayor a 0'),
})
  .refine((data) => data.uniformeHasta > data.uniformeDesde, {
    message: 'Uniforme Hasta debe ser mayor que Uniforme Desde',
    path: ['uniformeHasta'],
  })
  .refine((data) => data.diaHasta > data.diaDesde, {
    message: 'Dia Hasta debe ser mayor que Dia Desde',
    path: ['diaHasta'],
  })
  .refine((data) => data.diaHasta < data.cantidadDiasGenerar, {
    message: 'Dia Hasta no puede ser mayor a cantidad de dias a generar',
    path: ['diaHasta'],
  })
  .refine((data) => (data.diaHasta - data.diaDesde) < 100, {
    message: 'La diferencia entre Dia Hasta y Dia Desde no puede ser mayor a 100',
    path: ['diaHasta'],
  })

  .refine((data) => (data.reservaSinAsistencia0 + data.reservaSinAsistencia1
  + data.reservaSinAsistencia2 + data.reservaSinAsistencia3 + data.reservaSinAsistencia4
  + data.reservaSinAsistencia5 + data.reservaSinAsistencia6 + data.reservaSinAsistencia7
  + data.reservaSinAsistencia8 + data.reservaSinAsistencia9) === 1, {
    message: 'Las probabilidades deben sumar 1',
    path: ['reservaSinAsistencia9'],
  });

export type SetHotelFormSchemaType = TypeOf<typeof SetHotelFormSchema>;

export default SetHotelFormSchema;
