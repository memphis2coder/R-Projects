import React from 'react'
import TodoList from './TodoList/TodoList';

export default function TodoPage() {
    return (
        <div>
            <h1 style={{marginTop: "3rem"}}>Todo Page</h1>
            <br/>
                <TodoList />
        </div>
    )
}
