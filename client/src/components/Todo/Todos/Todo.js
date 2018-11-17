import React from 'react'
import TodoItem from "../TodoItem/TodoItem";

const Todos = ({todos}) => {
    return (
        <div>
            {
                todos.map(todo => <TodoItem key={todo} todo={todo}/>)
            }
        </div>
    )
}
export default Todos
