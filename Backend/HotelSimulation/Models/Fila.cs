﻿namespace HotelSimulation.Models;

public class Fila
{
    public int Dia { get; }
    public double RndReserva { get;}
    public int Reservas { get; }
    public double RndReservaSinAsistencia { get;  }
    public int ReservasSinAsistencia { get;  }
    public int Asistencia { get;}
    public double CostoHabitacionOcupada { get;}
    public double CostoHabitacionNoOcupada { get;  }
    public double CostoRecibirPersonaSinLugar { get;  }
    public double GananciaHabitacion { get;  }
    public double Utilidad { get;  }
    public double AcumuladorUtilidadDiaria { get; set; }

    public Fila(int dia, double rndReserva, 
        double rndReservaSinAsistencia, Dictionary<int, double> probabilidadesReservasSinAsistenciaAc, 
        double costoIndividualHabitacionOcupada, double costoIndividualHabitacionNoOcupada, 
        double costoIndividualRecibirPersonaSinLugar, double precioHabitacion, int habitaciones, int reservaHasta, 
        int reservaDesde)
    {
        Dia = dia;
        RndReserva = rndReserva;
        Reservas = CalculateReservas(rndReserva, reservaHasta, reservaDesde);
        RndReservaSinAsistencia = rndReservaSinAsistencia;
        ReservasSinAsistencia = CalculateReservasSinAsistencias(rndReservaSinAsistencia, 
            probabilidadesReservasSinAsistenciaAc);
        Asistencia = CalculateAsistenciaReal(Reservas, ReservasSinAsistencia);
        CostoHabitacionOcupada = CalculateCostoHabitacionOcupada(costoIndividualHabitacionOcupada, habitaciones, 
            Asistencia);
        CostoHabitacionNoOcupada = CalculateCostoHabitacionNoOcupada(costoIndividualHabitacionNoOcupada, habitaciones, 
            Asistencia);
        CostoRecibirPersonaSinLugar = CalculareCostoRecibirPersonaSinLugar(costoIndividualRecibirPersonaSinLugar, 
            habitaciones, Asistencia);
        GananciaHabitacion = CalculateCostoHabitacionOcupada(precioHabitacion, habitaciones, Asistencia);
        Utilidad = CalculateUtilidadDiaria(CostoHabitacionOcupada, CostoHabitacionNoOcupada, 
            CostoRecibirPersonaSinLugar, GananciaHabitacion);
        AcumuladorUtilidadDiaria = 0;
    }

    public double CalculateAcumuladorUtilidadDiaria(double utilidadDiaAnterior, double utilidadDia)
    {
        return utilidadDiaAnterior + utilidadDia;
    }

    private double CalculateUtilidadDiaria(double costoHabitacionOcupada, double costoHabitacionNoOcupada, 
        double costoRecibirPersonaSinLugar, double gananciaHabitacion)
    {
        var utilidadDiaria = gananciaHabitacion - costoHabitacionOcupada - costoHabitacionNoOcupada - 
                             costoRecibirPersonaSinLugar;
        return utilidadDiaria;
    } 
    private double CalculareCostoRecibirPersonaSinLugar(double costoIndividualRecibirPersonaSinLugar, int habitaciones, 
        int asistencia)
    {
        if (asistencia > habitaciones)
        {
            return costoIndividualRecibirPersonaSinLugar * (asistencia - habitaciones);
        }
        return 0;
    }

    private static double CalculateCostoHabitacionNoOcupada(double costoIndividualHabitacionNoOcupada, int habitaciones, 
        int asistencia)
    {
        if (asistencia < habitaciones)
        {
            return costoIndividualHabitacionNoOcupada * (habitaciones - asistencia);
        }
        return 0;
    }

    private static double CalculateCostoHabitacionOcupada(double costoIndividualHabitacionOcupada, int habitaciones, 
        int asistencia)
    {
        if(asistencia < habitaciones)
        {
            return costoIndividualHabitacionOcupada * asistencia;
        }
        return costoIndividualHabitacionOcupada * habitaciones;
    }

    private static int CalculateAsistenciaReal(int reservas, int reservasSinAsistencia)
    {
        return reservas - reservasSinAsistencia;
    }

    private static int CalculateReservasSinAsistencias(double rndReservaSinAsistencia, 
        Dictionary<int, double> probabilidadesReservasSinAsistenciaAc)
    {
        var reservasSinAsistencia = 0;
        foreach (var kvp in probabilidadesReservasSinAsistenciaAc)
        {
            var key = kvp.Key;
            var value = kvp.Value;
            if (rndReservaSinAsistencia < value)
            {
                reservasSinAsistencia = key;
                break;
            }
        }
        return reservasSinAsistencia;
    }
    
    private static int CalculateReservas(double rndReserva, int reservaHasta, int reservaDesde)
    {
        var resevas =  Convert.ToInt32(reservaDesde + rndReserva * (reservaHasta - reservaDesde));
        return resevas;
    }
}