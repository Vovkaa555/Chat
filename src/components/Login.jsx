import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = () => {
  const [profile, setProfile] = useState([]);
  const clientId = '355600754553-rk677euu1a2pvums191rm3lbefa7q22u.apps.googleusercontent.com';
  useEffect(() => {
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
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <img alt="" src={profile.imageUrl} />
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
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
  );
};
export default Login;
