

function TodoRowItem(props){
    
        return (
            <tr
            // onClick = {() => props.deleteTodo(props.rowNumber)} would add the functionality for every row 
            > 
                <th scope='row'>{props.rowNumber}</th>
                <td>{props.rowDescription}</td>
                <td>{props.rowAssignee}</td>                
                <td>
                    <button onClick = {() => props.deleteTodo(props.rowNumber)} type="button" className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
}

export default TodoRowItem;