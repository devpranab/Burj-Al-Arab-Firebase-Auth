import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

if (loggedInUser.email) {
  return children;
} else {
  return <Navigate to='/login' />;
}
};

export default PrivateRoute;

/*
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
*/