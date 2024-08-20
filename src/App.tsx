import React from 'react';
import './App.css';
// import FlightBooker from './components/flightBooker/FlightBooker';
// import PaginationUsers from './components/dataTable/PaginationUsers';
import TemperatureConverter from './components/temperatureConverter/TemperatureConverter';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <FlightBooker /> */}
      {/* <PaginationUsers /> */}
      <TemperatureConverter />
    </div>
  );
}

export default App;
