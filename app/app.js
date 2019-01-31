import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Music from './Music';
import Favorite from './Favorite';
import Account from './Account';

const styles = {
	navBar: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 56,
		borderTop: '1px solid #ccc',
		backgroundColor: '#F5F8F8',
		'&>.navSelected': {
			color: '#2196f3',
		}
	},
	content: {
		width: '100%',
		position: 'absolute',
		top: 0,
		bottom: 56,
		left: 0,
		overflow: 'auto',
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "music"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event, value) {
	    this.setState({ value });
	};

	render() {
		const {classes} = this.props;
		const {value} = this.state;
		return (
			
			<React.Fragment>
				<div className={classes.content}>
					{value === "music" && <Music/>}
					{value === "favorite" && <Favorite/>}
					{value === "account" && <Account/>}
				</div>

	            <BottomNavigation
	            	className={classes.navBar}
	            	showLabels
	            	onChange={this.handleChange}
	            	value={value}
	            >
	            	<BottomNavigationAction classes={{ selected: 'navSelected' }} label="Music" value="music" icon={<MusicVideoIcon />} />
	            	<BottomNavigationAction classes={{ selected: 'navSelected' }} label="Favorite" value="favorite" icon={<FavoriteIcon />} />
	            	<BottomNavigationAction classes={{ selected: 'navSelected' }} label="Account" value="account" icon={<AccountBoxIcon />} />
		        </BottomNavigation>

			</React.Fragment>
			
		)
	}
}

export default withStyles(styles)(App);
