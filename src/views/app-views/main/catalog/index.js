import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Categories from './categories';
import Collections from './collections';
import Combo from './combo';
import Products from './products';


const Catalog = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/products`} component={Products} />
			<Route path={`${match.url}/сategories`} component={Categories} />
			<Route path={`${match.url}/сollections`} component={Collections} />
			<Route path={`${match.url}/combo`} component={Combo} />
      <Redirect from={`${match.url}`} to={`${match.url}/products`} />
		</Switch>
	)
}

export default Catalog