import React, {Component} from "react";

class TodoForm extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({content: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        e.target.reset()
    }
    render() {
        return (
            <form onSubmit={
                this.handleSubmit
            }>
                <input type='text'
                    onChange={
                        this.handleChange
                    }/>
            </form>
        )
    }
}

export default TodoForm
