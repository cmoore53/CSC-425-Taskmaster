import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './EditTaskButton.css';

function EditTaskButton({ selectedTask, onEdit }) {
    const [show, setShow] = useState(false);

    const [isEditing, setIsEditing] = useState(false);

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDueDate, setNewDueDate] = useState("");

    //"Clear" Edit Fields
    /*
            onChange={(e) => setNew|InsertFieldHere|(e.target.value)}
            ... Above only updates on change, so if the below fields were truly "cleared" {aka set to ""}
            and the user only changed the Title of a task, 
            the title would change but all other fields would be deleted...
    */
   /*
   useEffect(() => {
    setNewTitle(selectedTask.title);
    console.log(selectedTask.description);
    setNewDescription(selectedTask.description);
    setNewDueDate(selectedTask.dueDate);
    setIsEditing(true);
   });*/
   function startEdit(){
    //"Clear" Edit Fields
    /*
         onChange={(e) => setNew|InsertFieldHere|(e.target.value)}
         ... Above only updates on change, so if the below fields were truly "cleared" {aka set to ""}
         and the user only changed the Title of a task, 
         the title would change but all other fields would be deleted...
    */
    setNewTitle(selectedTask.title);
    //console.log(task.description)
    setNewDescription(selectedTask.description);
    setNewDueDate(selectedTask.dueDate);

    setIsEditing(true)
}
    

    const handleEditTask = () => {
        if ((selectedTask.title && selectedTask.description && selectedTask.dueDate)) { // Failed attempt at validity checking, does nothing
            onEdit({
                taskID: selectedTask.taskID,
                title: newTitle,
                description: newDescription,
                dueDate: newDueDate
            });

            setNewTitle("");
            setNewDescription("");
            setNewDueDate("");

            setIsEditing(false)
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="custom-button" variant="primary" onClick={() => { startEdit(); handleShow(); }}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} backdrop = "static">
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>
                        <label>
                            {/*Edit Task's Title:*/}
                            {/* {<br/>} */}
                            <input
                                //id = "newTitleInput"
                                //name = "newTitleInput"
                                type="text"
                                maxLength={45}

                                placeholder={selectedTask.title}
                                defaultValue={selectedTask.title}
                                //value = {newTitle}

                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </label>
                    </h3>
                    <p>
                        <label>
                            {/* Edit Task's Description: */}
                            {/* <br/> */}
                            <textarea
                                //id = "newDescriptionInput"
                                //name = "newDescriptionInput"
                                maxLength={900}

                                rows={10}
                                cols={30}

                                placeholder={selectedTask.description}
                                defaultValue={selectedTask.description}
                                //value = {newDescription}

                                onChange={(e) => setNewDescription(e.target.value)}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            {/* Edit Task's Associated Date: */}
                            {/* <br/> */}
                            <input
                                //id = "newDueDateInput"
                                //name = "newDueDateInput"
                                type="date"

                                placeholder="Due Date"
                                defaultValue={new Date(selectedTask.dueDate).toISOString().substring(0, 10)}
                                //value={task.dueDate}

                                onChange={(e) => setNewDueDate(new Date(e.target.value).toISOString().substring(0, 10))}
                            />
                        </label>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-button" variant="primary" onClick={() => { setIsEditing(false); handleClose(); }}>
                        Close
                    </Button>
                    <Button className="save-button" variant="primary" onClick={() => { handleEditTask(); handleClose(); }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTaskButton;