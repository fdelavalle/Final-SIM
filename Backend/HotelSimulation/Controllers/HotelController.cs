using HotelSimulation.Dtos;
using HotelSimulation.Models;
using HotelSimulation.Services;
using Microsoft.AspNetCore.Mvc;

namespace HotelSimulation.Controllers;

[Route("/api/hotel")]
[ApiController]
public class HotelController : ControllerBase
{
    private readonly IHotelService _hotelService;
    public HotelController(IHotelService hotelService)
    {
        _hotelService = hotelService;
    }

    [HttpPost]
    public ActionResult<GetSimulationResponseDto> CreateSimulation([FromBody] CreateSimulationDto data)
    {
        
        var hotels = _hotelService.GetSimulation(data);
        return Ok(hotels);
    }
    
}