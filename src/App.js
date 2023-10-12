import './scss/App.scss';
import React, { useContext } from 'react';
import StartQuery from './components/StartQuery/StartQuery';
import TourGuidList from './components/TourGuidList/TourGuidList';
import SearchBox from './components/SearchBox/SearchBox';
import { StartQueryProvider } from "./components/StartQuery/StartQueryContext";
import { AppContext } from "./context/AppContext";


function App() {
  const { visibilityStyle } = useContext(AppContext);

  return (
    <>
      <StartQueryProvider>
        <StartQuery />
      </StartQueryProvider>
      <section className='tour-guid-container' style={visibilityStyle} >
        <SearchBox />
        <div className='tour-guid-list-container'>
          <TourGuidList />
        </div>
      </section>
    </>
  );
}

export default App;
