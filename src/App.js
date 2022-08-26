import React from 'react';
import Home from './pages/Home';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

import styles from './App.module.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const [profile, setProfile] = React.useState([]);
  const clientId = '355600754553-rk677euu1a2pvums191rm3lbefa7q22u.apps.googleusercontent.com';
  React.useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile('');
  };
  console.log(profile);

  return (
    <div className={styles.root}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className={styles.app}>
          {Boolean(profile) ? (
            <div className={styles.main}>
              <GoogleLogout
                clientId={clientId}
                className={styles.log_out}
                buttonText="Log out"
                onLogoutSuccess={logOut}
              />
              <Home searchValue={searchValue} {...profile} />
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          )}
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

//<Home searchValue={searchValue} />
