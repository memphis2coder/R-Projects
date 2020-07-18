import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import TodoPage from './pages/TodoPage/TodoPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/*Navbar component */ }
      <Header />

        {/* React router */}
        <Switch>
          <Route path="/todo">
            <TodoPage />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
