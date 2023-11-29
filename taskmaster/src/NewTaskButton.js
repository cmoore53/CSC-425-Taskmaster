import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './NewTaskButton.css';

function NewTaskButton({onTaskAdd}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(new Date());

    const handleAddTask = () => {
        // Validate and add task
        if (title && description && dueDate) {
            //console.log(description)
            onTaskAdd({ title, description, dueDate });
            
            setTitle("");
            setDescription("");
            setDueDate("");
        }
    };

    return(
        <>
        <Button className="new-button" variant="primary" onClick={handleShow} style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '1000'}}>
        New Task
        </Button>
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>
                    <label>
                        <input
                            type="text"
                            maxLength={45}

                            placeholder="Title"
                            value={title}

                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                </h3>
                
                <p>
                    <label>
                        <textarea
                            rows={10}
                            cols={30}
                            maxLength={900}

                            placeholder="Description"
                            value={description}

                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        <input
                            type="date"


                            placeholder="Due Date"
                            value={dueDate}

                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </label>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="close-button" variant='primary' onClick={handleClose}>Close</Button>
                <Button className= "save-button" variant="primary" onClick={() => { handleAddTask(); handleClose(); }}>Save Task</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default NewTaskButton;