import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {todos: []};
  }

  updateAllTodos(newTodos) {
    this.setState({ todos: newTodos });
  }

  updateSingleTodo(newTodo) {
    let newTodos = [];
    const todos = this.state.todos;
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
          <Route exact path='/' render={() => (
            <TodosList
              updateTodos={this.updateAllTodos}
              todos={this.state.todos}
            />
          )} />
          <Route path="/edit/:id" render={() => (
            <EditTodo
              updateTodo={this.updateSingleTodo}
              todos={this.state.todos}
            />
          )} />
          <Route path="/create" render={() => (
            <CreateTodo
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
