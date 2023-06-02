import TodoRowItem from "./TodoRowItem";


function TodoTable(props){

    return (
        <table className='table table-hover'>

        {/* Table Header */}
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
            {/* name of array must match the name on component above */}
          {props.todos.map(todo => (
            <TodoRowItem
            // name of variables must match name on components where it goes to
            rowNumber = {todo.rowNumber}
            rowDescription = {todo.description}
            rowAssignee = {todo.assignee}
            />
          ))}
         
        </tbody>
      </table> 
    );
}

export default TodoTable;