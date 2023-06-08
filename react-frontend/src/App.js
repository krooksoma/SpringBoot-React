import logo from './logo.svg';
import './App.css';
import NewTodoForm from './components/newTodoForm';
import TodoTable from './components/TodoTable';
import React, { useState } from 'react';

// useState is a React Hook(Re-rendering components on the fly)

function App() {

  //function to display add todo form
  const [displayTodoForm, setDisplayTodoForm] = useState(false);

  // todos references all the information inside the useState.
  // setTodos is used to update variables. 

  const [todos, setTodos] = useState([
    { rowNumber: 1, description: "Wash Dog", assignee: "Dennis" },
    { rowNumber: 2, description: "Groom Dog", assignee: "Thomas" },
    { rowNumber: 3, description: "Walk Dog", assignee: "Dave" },
    { rowNumber: 4, description: "Pet Dog", assignee: "Danny" }
  ]);

  const addTodo = (descriptionValue, assigneeValue) => {

    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      description: descriptionValue,
      assignee: assigneeValue
    };
    // setTodos will rerender the array. Deconstruct the current array and add the new element to it
    setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber) => {

    //filter(function()) is used when it is necessary to run for each array element
    let filtered = todos.filter(function (value) {
      //return all elements that are not equal item to be deleted
      return value.rowNumber !== deleteTodoRowNumber;
    })

    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's List
        </div>
        <div className='card-body'>
          
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          {/* Below an example with built in function in the html tag */}
          {/* <button className="btn btn-primary onClick={() => {console.log("test")}} */}
          <button
            onClick={() => setDisplayTodoForm(!displayTodoForm)}
            className='btn btn-primary'>
            {/* display button informantion depending on conditional value */}
            {displayTodoForm ? 'Close form': 'Display form'}
          </button>
          <hr />
            {/* below is conditional rendering of component if conditions are met */}
            {
            displayTodoForm && <NewTodoForm addTodo={addTodo} />
            }
        </div>  {/* Card-header End */}
      </div>  {/* Card End */}
    </div>
  );
}

export default App;
