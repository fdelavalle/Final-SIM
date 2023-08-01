using HotelSimulation.Models;

namespace HotelSimulation.Dtos;

public class GetSimulationResponseDto
{
    public List<Fila> Simulacion { get; init; } = new();
    public double UtilidadPromedio { get; set; }
    public double TiempoDeEjecucion { get; set; }
}