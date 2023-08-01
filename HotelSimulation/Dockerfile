FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS deps
ARG platform=linux-x64
WORKDIR /src
COPY HotelSimulation.csproj .
RUN dotnet restore "./HotelSimulation.csproj"

FROM deps AS build
ARG platform=linux-x64
COPY . .
WORKDIR "/src/."
RUN dotnet build "./HotelSimulation.csproj"

FROM build AS publish
ARG platform=linux-x64
RUN dotnet publish "./HotelSimulation.csproj" -o /app/publish

FROM base AS final
WORKDIR /app
EXPOSE 5000
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "./HotelSimulation.dll"]
