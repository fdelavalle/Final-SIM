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
    public ActionResult<List<Fila>> Get()
    {
        var hotels = _hotelService.GetSimulation();
        return Ok(hotels);
    }
    
}