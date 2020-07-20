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
        if (!newTodo.trim()) return; // prevents user spam of empty input
        setTodos([ // changing the todo list with setTodos
            { 
                id: todos.length ? todos[0].id + 1 : 1, // give a unique id 
                content: newTodo, // the newTodo value
                done: false,
            },
            ...todos, // return the todo list, react does not support .push
        ]);
        setNewTodo(''); // empty input field after submit
    }, [newTodo, todos]); // if newTodo or todos every change we need the latest value

    useEffect(() => { // this function will only run when its dependence change
        console.log('todos', todos) // display todos array when updated
    }, [todos]); // I want to know when the todos array changes

    
    const onCheckChange = useCallback((todo, index) => (event) => { // closure
        const newTodos = [...todos]; // copy todo list to newTodos
        newTodos.splice(index, 1, { // remove todo item and replace with itself
            ...todo, // return a copy of the todo array
            done: !todo.done // inverse of done
        });
        setTodos(newTodos); // return the new todos array
    }, [todos]); // only change if the todos array changes

    const removeTodo = useCallback((todo) => (event) => { // closure
        console.log('removeTodo', todo.content);
        setTodos(todos.filter(otherTodo => otherTodo !== todo)); // remove the one todo we are removing
    }, [todos]); // only change if the todos changes


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
                    {todos.map((todo, index) => ( /* use map to show each todo item */
                        <ListGroup.Item key={todo.id}> {/* each todo needs a unique key */}
                            <div className="ListGroup-inner">
                                    <input
                                        checked={todo.done} /* todo property done */
                                        type="checkbox" 
                                        className="checkBox"
                                        onChange={onCheckChange(todo, index)}
                                    /> {/* checkbox to show completed */}
                                <span className={todo.done ? 'done' : ''}>
                                    {todo.content} {/* show the new todo */}
                                </span>
                                <span>
                                    <button
                                        onClick={removeTodo(todo)} 
                                        className="deleteBtn">
                                            X
                                    </button>
                                </span>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    )
};
