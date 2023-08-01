using System.Diagnostics;
using HotelSimulation.Dtos;
using HotelSimulation.Models;

namespace HotelSimulation.Services;

public class HotelService : IHotelService
{
    public GetSimulationResponseDto GetSimulation(CreateSimulationDto createSimulationDto)
    {
        var filasSimulacionAMostrar = new List<Fila>();
        var watch = new Stopwatch();
        watch.Start();
        var random = new Random();
        var reservasConProbabildadAcumulada = 
            CalculateProbabilidadAcumulada(createSimulationDto.ReservasSinAsistencia);

        Fila? anterior = null;
        Fila? actual = null;
        
        var maxDiaAMostrar = createSimulationDto.DiaHasta - createSimulationDto.DiaDesde < 100 ? 
            createSimulationDto.DiaHasta : 100;
        
        for (var dia = 1; dia <= createSimulationDto.CantidadDiasAGenerar; dia++)
        {
            var rndReservas = random.NextDouble();
            var rndReservasSinAsistencia = random.NextDouble();
            
            actual = new Fila(dia, rndReservas, rndReservasSinAsistencia,
                reservasConProbabildadAcumulada, createSimulationDto.CostoHabitacionOcupada, 
                createSimulationDto.CostoHabitacionNoOcupada,
                createSimulationDto.CostoRecibirPersonasSinLugar, createSimulationDto.PrecioHabitacion, 
                createSimulationDto.CantidadHabitaciones, createSimulationDto.CantidadReservasTomables, createSimulationDto.UniformeDesde);

            if (dia == 1)
            {
                actual.AcumuladorUtilidadDiaria = actual.CalculateAcumuladorUtilidadDiaria
                    (0, actual.Utilidad);
            }
            else
            {
                actual.AcumuladorUtilidadDiaria = actual.CalculateAcumuladorUtilidadDiaria
                    (anterior!.AcumuladorUtilidadDiaria, actual.Utilidad);
            }
            
            anterior = actual;
            
            if ((dia >= createSimulationDto.DiaDesde && dia <= maxDiaAMostrar)
                || dia == createSimulationDto.CantidadDiasAGenerar)
            {
                filasSimulacionAMostrar.Add(actual);
            }
        }
        watch.Stop();
        return new GetSimulationResponseDto()
        {
            Simulacion = filasSimulacionAMostrar,
            UtilidadPromedio = CalculatePromedio(actual!.AcumuladorUtilidadDiaria, createSimulationDto.CantidadDiasAGenerar),
            TiempoDeEjecucion = watch.Elapsed.TotalSeconds
        };
    }
    
    private static Dictionary<int, double> CalculateProbabilidadAcumulada(Dictionary<int, double> probabilidades)
    {
        var accumulatedValues = new Dictionary<int, double>();
        double accumulatedValue = 0;

        foreach (var kvp in probabilidades.OrderBy(kvp => kvp.Key))
        {
            accumulatedValue += kvp.Value;
            accumulatedValues[kvp.Key] = accumulatedValue;
        }

        return accumulatedValues;
    }

    private static double CalculatePromedio(double total, int cantidad)
        => Math.Round(total / cantidad, 2);
}