import React from 'react';
import {Route} from 'react-router-dom';
import authSvc from '../Services/authenticationService';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!authSvc.authenticated()) {
        //   authSvc.signIn();
          return <div>You are not authoirzed</div>;
        }
        return <Component />
    }} />
  );
}

export default SecuredRoute;