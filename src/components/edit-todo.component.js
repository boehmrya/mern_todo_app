import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
  constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    
    render() {
        return (
            <div>
                <p>Welcome to Edit Todo Component!!</p>
            </div>
        )
    }
}
