import React, {useState} from 'react';


function NewTodoForm(props) {

    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");

    const submitTodo = () => {
        if(description !== '' && assignee !==''){
                props.addTodo(description, assignee);
        }
    }


    // const descriptionChange = (event) => {
    //     console.log("description value: " + event.target.value);

    //     setDescription(event.target.value);
    // }

    // const assignedEvent = (event) => {
    //     console.log("assigned value: " + event.target.value);

    //     setAssignee(event.target.value);
    // }

    return (

        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => setAssignee(e.target.value)}
                        required
                        value={assignee}>
                    </input>

                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        rows={3}
                        className="form-control"
                        // running the function into the evet instead of pointing to descriptionChange variable
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        required>
                    </textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitTodo}>
                    Add Todo
                </button>
            </form>
        </div>
    )


}

export default NewTodoForm;