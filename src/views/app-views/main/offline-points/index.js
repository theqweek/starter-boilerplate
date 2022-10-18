import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Addresses from './addresses';
import Geofences from './geofences';


const OfflinePoints = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/addresses`} component={Addresses} />
			<Route path={`${match.url}/geofences`} component={Geofences} />
      <Redirect from={`${match.url}`} to={`${match.url}/addresses`} />
		</Switch>
	)
}

export default OfflinePoints