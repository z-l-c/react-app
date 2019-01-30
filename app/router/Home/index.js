import React, { Component } from 'react';
import http from '../../utils/http';
import styles from './index.scss';
let img = require("../../../public/images/toy.png");

export default class Home extends Component {
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
            <div className="homeContent">
                this is the home page
                <img src={ img } />
                <p>GET: { this.state.getData }</p>
                <p>GET: { this.state.postData }</p>
            </div>
        )
    }
}