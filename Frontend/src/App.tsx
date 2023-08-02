import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Table from './components/Table';
import HotelForm from './components/HotelForm';

function App() {
  const [simulation, setSimulation] = useState([]);
  const [averageUtility, setUtilidadPromedio] = useState(0);
  const [executionTime, setTiempoDeEjecucion] = useState(0);

  async function handleFetchSimulation(requestData): Promise<void> {
    const response = await axios.post('http://localhost:5000/api/hotel', { ...requestData });
    const { simulacion, utilidadPromedio, tiempoDeEjecucion } = response.data;
    setSimulation(simulacion);
    setUtilidadPromedio(utilidadPromedio);
    setTiempoDeEjecucion(tiempoDeEjecucion);
  }

  const handleDataFromChild = (data) => {
    const formattedData = {
      uniformeDesde: data.uniformeDesde,
      uniformeHasta: data.uniformeHasta,
      cantidadDiasAGenerar: data.cantidadDiasGenerar,
      diaDesde: data.diaDesde,
      diaHasta: data.diaHasta,
      cantidadHabitaciones: data.cantidadHabitaciones,
      cantidadReservasTomables: data.cantidadReservasTomables,
      precioHabitacion: data.precioHabitacion,
      costoHabitacionOcupada: data.costoHabitacionOcupada,
      costoHabitacionNoOcupada: data.costoHabitacionDesocupada,
      costoRecibirPersonasSinLugar: data.costoRecibirPersonaSinLugar,
      reservasSinAsistencia: {
        0: data.reservaSinAsistencia0,
        1: data.reservaSinAsistencia1,
        2: data.reservaSinAsistencia2,
        3: data.reservaSinAsistencia3,
        4: data.reservaSinAsistencia4,
        5: data.reservaSinAsistencia5,
        6: data.reservaSinAsistencia6,
        7: data.reservaSinAsistencia7,
        8: data.reservaSinAsistencia8,
        9: data.reservaSinAsistencia9,
      },
    };
    handleFetchSimulation(formattedData);
  };

  return (
    <div>
      <div className="form">
        <HotelForm
          sendDataToParent={handleDataFromChild}
          averageUtility={averageUtility}
          executionTime={executionTime}
        />
      </div>
      <Table simulation={simulation} />
    </div>
  );
}
export default App;
