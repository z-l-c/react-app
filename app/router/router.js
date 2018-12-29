import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import My from './My';

const getRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/my">My</Link></li>
			</ul>
			<Switch>
                <Route exact path="/" component={Home} />
                <Route path="/my" component={My} />
            </Switch>
		</div>
	</Router>
);

export default getRouter;