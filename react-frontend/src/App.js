import logo from './logo.svg';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, description: "Wash Dog", assignee: "Dennis"},
    {rowNumber: 2, description: "Groom Dog", assignee: "Thomas"},
    {rowNumber: 3, description: "Walk Dog", assignee: "Dave"},
    {rowNumber: 4, description: "Pet Dog", assignee: "Dave"}
  ]



  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's List
        </div>

        <div className='card-body'>
              <TodoTable todos = {todos}/>
        </div>  {/* Card-header End */}
      </div>  {/* Card End */}
    </div>
  );
}

export default App;
