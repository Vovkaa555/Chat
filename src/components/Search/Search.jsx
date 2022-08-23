import React from 'react';

import styles from './Search.module.scss';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';

import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.searchLogo} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search or start new chat"
      />
      {searchValue && (
        <AiFillCloseCircle onClick={() => setSearchValue('')} className={styles.closeLogo} />
      )}
    </div>
  );
};

export default Search;
