import React from "react";


const TodList = ({todo, deleteItem}) => {
    const todoList = todo.length > 0 ? todo.map(todo => {
        return (
            <div className="collection-item"
                onClick={
                    () => {
                        deleteItem(todo.id)
                    }
                }
                key={
                    todo.id
            }>
                <span>{
                    todo.content
                }</span>
            </div>
        )
    }) : <p className="center">There is no todo item yet !</p>

    return (
        <div className="todo collection">
            {todoList} </div>
    )
}
export default TodList;
