import React, { Suspense, lazy } from 'react'

import Loading from 'components/shared-components/Loading';
import { Redirect, Route, Switch } from 'react-router-dom';

import UserTable from './user-table';


const UserList = ({ match }) => {
	return (
		<Suspense fallback={<Loading cover="content"/>}>
			<Switch>
 				<Route path={`${match.url}/edit-profile`} component={lazy(() => import (`./edit-profile`))} />
 				<Route path={`${match.url}`} component={UserTable} />
 				<Redirect from={`${match.url}`} to={`${match.url}`} />
			</Switch>
		</Suspense>
	)
}

export default UserList