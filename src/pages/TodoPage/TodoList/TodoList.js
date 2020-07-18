import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

import './TodoList.css';

export default function TodoList() {

    const [input, setInput] = useState('');

    return (
        <div className="container">
            {/* Form field for todo list */}
            <Form>
                <Form.Group controlId="todo">
                    <Form.Control 
                        type="text" 
                        placeholder="add..."
                        onChange={(e) => setInput(e.target.value)}
                        />
                        <Form.Text className="text-muted">enter a new todo</Form.Text>
                </Form.Group>
            </Form>

            {/* Todo Display Table */}
            <div className="TodoDisplay mt-5">
                <ListGroup>
                    
                        <ListGroup.Item>
                            <div className="ListGroup-inner">
                                <span className="checkBox"></span>
                                <span className="text">
                                    
                                </span>
                                <span className="trash">X</span>
                            </div>
                        </ListGroup.Item>
                    
                </ListGroup>
            </div>
        </div>
    )
};
