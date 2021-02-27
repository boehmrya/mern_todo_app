import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  constructor(props) {
      super(props);

      this.updateAllTodos = this.updateAllTodos.bind(this);
      this.updateSingleTodo = this.updateSingleTodo.bind(this);
      this.addTodo = this.addTodo.bind(this);

      this.state = {
        todos: [],
        updateTodos: false
      };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
        .then(response => {
            //this.props.updateTodos(response.data);
            this.setState({ todos: response.data });
            console.log("parent state updated from api");
        })
        .catch(function (error){
            console.log(error);
        })
  }

  updateSingleTodo(state, todos) {
    // set up new todo
    const newTodo = {
      todo_description: state.todo_description,
      todo_responsible: state.todo_responsible,
      todo_priority: state.todo_priority,
      todo_completed: state.todo_completed
    }
    let newTodos = [];
    const todosLen = todos.length;
    for (var i = 0; i < todosLen; i++) {
      if (newTodo._id === todos[i]._id) {
        newTodos.push(newTodo);
      }
      else {
        newTodos.push(todos[i]);
      }
    }

    this.setState({ todos: newTodos });
  }

  addTodo(newTodo) {
    this.setState({ todos: this.state.todos.concat([newTodo]) });
  }

  render() {

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Project Management App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path='/' render={(props) => (
            <TodosList
              {...props}
              updateTodos={this.state.UpdateTodos}
              todos={this.state.todos}
            />
          )} />
          <Route path="/edit/:id" render={(props) => (
            <EditTodo
              {...props}
              updateTodo={this.updateSingleTodo}
              todos={this.state.todos}
            />
          )} />
          <Route path="/create" render={(props) => (
            <CreateTodo
              {...props}
              addTodo={this.addTodo}
              todos={this.state.todos}
            />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
