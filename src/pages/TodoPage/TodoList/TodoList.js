import React, {useState, useCallback, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

import './TodoList.css';

export default function TodoList() {

    const [newTodo, setNewTodo] = useState(''); // the new todo value
    const [todos, setTodos] = useState([]); // the todo list

    // useCallback prevents unnecessary renders
    const onNewTodoChange = useCallback((event) => { // this function will only run when its dependence change
        setNewTodo(event.target.value); // get the value of the newTodo
    },[]); // useCallback has a dependence array

    const submitHandler = useCallback((event) => { // form submit function
        event.preventDefault(); // prevent page refresh on form submit
        setTodos([ // changing the todo list with setTodos
            ...todos, // return the todo list, react does not support .push
            { 
                id: todos.length + 1,
                content: newTodo, // the newTodo value
                done: false,
            }
        ]);
        setNewTodo(''); // empty input field after submit
    }, [newTodo, todos]); // if newTodo or todos every change we need the latest value

    useEffect(() => { // this function will only run when its dependence change
        console.log('todos', todos) // display todos array when updated
    }, [todos]); // I want to know when the todos array changes


    return (
        <div className="container">
            {/* Form field for todo list */}
            <Form onSubmit={submitHandler}> {/* run submitHandler function on form submit */}
                <Form.Group controlId="todo">
                    <Form.Control
                        name="newTodo" 
                        type="text" 
                        placeholder="add..."
                        value={newTodo} /* the new todo value */
                        onChange={onNewTodoChange} /* run onNewTodoChange function when input value changes */
                        />
                        <Form.Text className="text-muted">enter a new todo</Form.Text>
                </Form.Group>
            </Form>

            {/* Todo Display Table */}
            <div className="TodoDisplay mt-5">
                <ListGroup>
                    {todos.map((todo) => ( /* use map to show each todo item */
                        <ListGroup.Item key={todo.id}> {/* each todo needs a unique key */}
                            <div className="ListGroup-inner">
                                    <input 
                                        type="checkbox" 
                                        className="checkBox"
                                    /> {/* checkbox to show completed */}
                                <span className="text">
                                    {todo.content} {/* show the new todo */}
                                </span>
                                <span className="trash">X</span>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    )
};
