import React, { Component } from 'react';

export default class CreateTodo extends Component {
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
                <p>Welcome to Create Todo Component!!</p>
            </div>
        )
    }
}
