import React from 'react';
import './App.css';
import tabsData from "./data/tabsData.json";
// import SortingUsers from './components/dataTable/SortingUsers';
// import HolyGrailLayout from './components/holyGrailLayout/HolyGrailLayout';
import Tabs from './components/tabs/Tabs';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
// import FlightBooker from './components/flightBooker/FlightBooker';
// import PaginationUsers from './components/dataTable/PaginationUsers';
// import TemperatureConverter from './components/temperatureConverter/TemperatureConverter';

const App: React.FC = () => {
  return (
    <>
      {/* <FlightBooker /> */}
      {/* <PaginationUsers /> */}
      {/* <TemperatureConverter /> */}
      {/* <SortingUsers /> */}
      {/* <HolyGrailLayout /> */}
      {/* <Tabs items={tabsData} /> */}
      <InfiniteScroll />
    </>
  );
}

export default App;
