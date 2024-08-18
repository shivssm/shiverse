import React from 'react';
import './App.css';
// import FlightBooker from './components/flightBooker/FlightBooker';
import PaginationUsers from './components/dataTable/PaginationUsers';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <FlightBooker /> */}
      <PaginationUsers />
    </div>
  );
}

export default App;
