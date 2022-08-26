import React from 'react';
import Home from './pages/Home';

import styles from './App.module.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className={styles.root}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className={styles.app}>
          <div className={styles.main}>
            <Home searchValue={searchValue} />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

//<Home searchValue={searchValue} />
