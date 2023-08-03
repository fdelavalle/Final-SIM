namespace HotelSimulation.Dtos;

public class CreateSimulationDto
{
    private static readonly Dictionary<int, double> DefaultReservasSinAsistencia = new()
    {
        {0, 0.04},
        {1, 0.08},
        {2, 0.12},
        {3, 0.16},
        {4, 0.19},
        {5, 0.13},
        {6, 0.11},
        {7, 0.08},
        {8, 0.06},
        {9, 0.03}
    };

    public int UniformeDesde { get; set; } = 192;
    
    public int UniformeHasta { get; set; } = 192;
    public int CantidadDiasAGenerar { get; set; } = 20;
    public int DiaDesde { get; set; } = 0;
    public int DiaHasta { get; set; } = 20;
    public int CantidadHabitaciones { get; set; } = 200;
    public double PrecioHabitacion { get; set; } = 300;
    public double CostoHabitacionOcupada { get; set; } = 110;
    public double CostoHabitacionNoOcupada { get; set; } = 70;
    public double CostoRecibirPersonasSinLugar { get; set; } = 400;
    public Dictionary<int, double> ReservasSinAsistencia { get; set; } = DefaultReservasSinAsistencia;
    
}