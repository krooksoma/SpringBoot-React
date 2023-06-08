import TodoRowItem from "./TodoRowItem";


function TodoTable(props){

    return (
        <table className='table table-hover'>

        {/* Table Header */}
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assignee</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
            {/* name of array must match the name on component above */}
          {props.todos.map(todo => (
            <TodoRowItem 
            //key is used to identify each item as an unique identifier for the item making the list safe.
            key={todo.rowNumber}
            // name of variables must match name on components where it goes to
            rowNumber = {todo.rowNumber}
            rowDescription = {todo.description}
            rowAssignee = {todo.assignee}
            //passing props to row todo component
            deleteTodo={props.deleteTodo}
            />
          ))}
         
        </tbody>
      </table> 
    );
}

export default TodoTable;