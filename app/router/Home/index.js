import React, { Component } from 'react';
import styles from './index.scss';
let img = require("../../../public/images/toy.png");

export default class Home extends Component {
    render() {
        return (
            <div className="homeContent">
                this is the home page
                <img src={img} />
            </div>
        )
    }
}