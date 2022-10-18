import Loading from 'components/shared-components/Loading';
import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Clients = ({ match }) => {
	return (
		<Suspense fallback={<Loading cover="content"/>}>
			<Switch>
				<Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
				<Route path={`${match.url}/groups`} component={lazy(() => import(`./groups`))} />
				<Redirect from={`${match.url}`} to={`${match.url}/user-list`} />
			</Switch>
		</Suspense>
	)
}

export default Clients