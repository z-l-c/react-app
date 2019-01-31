import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import http from '../utils/http';
import styles from './index.scss';
import Account from '../Account';
import Favorite from '../Favorite';
let img = require("../../public/images/toy.png");

export default class Music extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getData: "loading...",
			postData: "loading..."
		};
	}

	componentDidMount() {
		http.get('api/get')
			.then((response) => {
				this.setState({
					getData: JSON.stringify(response.data)
				})
			}).catch((err) => {
				this.setState({
					getData: err.toString()
				})
			});

		http.post('api/post', {
			type: 'postinfo'
		})
			.then((response) => {
				this.setState({
					postData: JSON.stringify(response.data)
				})
			}).catch((err) => {
				this.setState({
					postData: err.toString()
				})
			});
	}

    render() {
        return (

        	<Router>
				<div>
					<ul>
						<li><Link to="/my">My</Link></li>
						<li><Link to="/favorite">Favorite</Link></li>
					</ul>
					<Switch>
		                <Route exact path="/my" component={Account} />
		                <Route exact path="/favorite" component={Favorite} />
		            </Switch>
				</div>
			</Router>
            
        )
    }
}