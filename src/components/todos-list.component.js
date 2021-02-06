import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    render() {
        return (
            <div>
                <p>Welcome to Todos List Component!!</p>
            </div>
        )
    }
}
