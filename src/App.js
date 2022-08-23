import React from 'react';
//import Login from './components/Login';
import Home from './pages/Home';

import './app.css';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="app">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Home searchValue={searchValue} />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
