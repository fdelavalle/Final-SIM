using HotelSimulation.Models;
using HotelSimulation.Services;


// var probabilidades = new Dictionary<int, double>()
// {
//     {0, 0.04},
//     {1, 0.12},
//     {2, 0.24},
//     {3, 0.40},
//     {4, 0.59},
//     {5, 0.72},
//     {6, 0.83},
//     {7, 0.91},
//     {8, 0.96},
//     {9, 1.00},
// };
// var random = new Random();
// var rndReservas = 0.28;
// var rndReservasSinAsistencia = 0.26;
// var fila = new Fila(
//     1, rndReservas, rndReservasSinAsistencia,
//     probabilidades, 110, 70,
//     400, 300, 0, 200,
//     208
// );



var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IHotelService, HotelService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();