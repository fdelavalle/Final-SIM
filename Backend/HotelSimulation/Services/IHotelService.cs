using HotelSimulation.Dtos;
using HotelSimulation.Models;

namespace HotelSimulation.Services;

public interface IHotelService
{ 
    GetSimulationResponseDto GetSimulation(CreateSimulationDto createSimulationDto);
}