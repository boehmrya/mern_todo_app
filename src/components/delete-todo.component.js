import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class DeleteTodo extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            toDashboard: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id)
            .then(() => {
              this.setState({ toDashboard: true });
            })
            .catch(function (error){
              console.log(error);
            })
    }

    render() {
        if (this.state.toDashboard === true) {
          return <Redirect to='/' />
        }

        return (
            <div>
                <h3 align="center">Delete Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="message">
                        Delete {state.todo_description}?
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Delete Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
