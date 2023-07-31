using System.Diagnostics;
using HotelSimulation.Models;

namespace HotelSimulation.Services;

public class HotelService : IHotelService
{
    public List<Fila> GetSimulation()
    {
        var tcs = new List<Fila>();
        Stopwatch watch = new Stopwatch();
        watch.Start();
        var random = new Random();

        var diaDesde = 0;

        Fila? anterior = null;
        Fila? actual = null;

        var cantidadDiasAGenerar = 10;
        
        var probabilidades = new Dictionary<int, double>()
        {
            {0, 0.04},
            {1, 0.12},
            {2, 0.24},
            {3, 0.40},
            {4, 0.59},
            {5, 0.72},
            {6, 0.83},
            {7, 0.91},
            {8, 0.96},
            {9, 1.00},
        };

        for (int dia = 1; dia <= cantidadDiasAGenerar; dia++)
        {
            var rndReservas = random.NextDouble();
            var rndReservasSinAsistencia = random.NextDouble();
            actual = new Fila(1, rndReservas, rndReservasSinAsistencia,
             probabilidades, 110, 70,
             400, 300, 0, 200,
             208);

            if (dia == 1)
            {
                actual.AcumuladorUtilidadDiaria = actual.CalculateAcumuladorUtilidadDiaria
                    (0, actual.AcumuladorUtilidadDiaria);
            }
            else
            {
                actual.AcumuladorUtilidadDiaria = actual.CalculateAcumuladorUtilidadDiaria
                    (anterior!.AcumuladorUtilidadDiaria, actual.AcumuladorUtilidadDiaria);
            }
            anterior = actual;
            if ((dia >= diaDesde && dia < diaDesde + 100) || dia == cantidadDiasAGenerar)
            {
                tcs.Add(actual);
            }
        }

        return tcs;

    }
}