import React from 'react';
import './App.css';
import SortingUsers from './components/dataTable/SortingUsers';
// import FlightBooker from './components/flightBooker/FlightBooker';
// import PaginationUsers from './components/dataTable/PaginationUsers';
// import TemperatureConverter from './components/temperatureConverter/TemperatureConverter';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <FlightBooker /> */}
      {/* <PaginationUsers /> */}
      {/* <TemperatureConverter /> */}
      <SortingUsers />
    </div>
  );
}

export default App;
