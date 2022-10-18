import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/settings`} component={lazy(() => import(`./settings`))} />
      <Route path={`${match.url}/mobile-app`} component={lazy(() => import(`./mobile-app`))} />
      <Route path={`${match.url}/page-logs`} component={lazy(() => import(`./page-logs`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/settings`} />
    </Switch>
  </Suspense>
)};

export default Main;