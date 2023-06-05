import logo from './logo.svg';
import './App.css';
import NewTodoForm from './components/newTodoForm';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';

// useState is a React Hook(Re-rendering components on the fly)

function App() {

// todos references all the information inside the useState.
// setTodos is used to update variables. 

const [todos, setTodos] = useState([
    {rowNumber: 1, description: "Wash Dog", assignee: "Dennis"},
    {rowNumber: 2, description: "Groom Dog", assignee: "Thomas"},
    {rowNumber: 3, description: "Walk Dog", assignee: "Dave"},
    {rowNumber: 4, description: "Pet Dog", assignee: "Danny"}
  ]);

const addTodo = (descriptionValue , assigneeValue) =>{
  
  if(todos.length > 0){
    const newTodo = {
      rowNumber: todos.length + 1,
      description: descriptionValue,
      assignee: assigneeValue    
    };
    // setTodos will rerender the array. Deconstruct the current array and add the new element to it
    setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }
}

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's List
        </div>
        <div className='card-body'>
              <TodoTable todos = {todos}/>
              {/* Below an example with built in function in the html tag */}
              {/* <button className="btn btn-primary onClick={() => {console.log("test")}} */}
              <button className='btn btn-primary' onClick={addTodo}>              
                Add New Todo
              </button>
              <NewTodoForm addTodo={addTodo}/>
        </div>  {/* Card-header End */}
      </div>  {/* Card End */}
    </div>
  );
}

export default App;
