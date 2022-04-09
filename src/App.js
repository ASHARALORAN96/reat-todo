import React, { Component } from "react";
import TodoForm from './todoForm'
import TodoList from './todo'
class App extends Component{
  state = {
    todo: [
      {id:1 , content: 'Maditation at 7:00AM'},
      {id:2, content : 'Eat after 12:00AM'}
    ]
  }
  handleDeleteItem = (id) => {
    let todo = this.state.todo.filter(todo => todo.id !== id);
    this.setState({
      todo
    })
  }
  handleAddTodo = (todoItem) => {
    let todo = [...this.state.todo, {id: Math.random(),...todoItem }]
    this.setState({
      todo
    })
    console.log(this.state.todo)
  }
  render() {
    return (
     <div className="container">
       <h1 className="center blue-text">Todo list</h1>
       <TodoList todo={this.state.todo} deleteItem={this.handleDeleteItem}/>
       <TodoForm addTodo={this.handleAddTodo}/>
     </div>
    )
  }
}



export default App;
