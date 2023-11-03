/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TaskData = ({ task }) => {
    const { _id, taskName, dueDate, priority, memberName, description } = task;

    const handleDeleteTask = (_id) => {
        try {
            axios.delete(`http://localhost:5000/usersTasks/${_id}`)
                .then(res => {
                    console.log(res.data);
                    Swal.fire(
                        'Deleted!',
                        `${taskName} has been deleted`,
                        'success'
                    )

                })
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <tr>
            <td>
                <button onClick={() => handleDeleteTask(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{taskName}</div>

                    </div>
                </div>
            </td>
            <td>
                {dueDate}
            </td>
            <td>{memberName}</td>
            <td>{priority}</td>
            <td>
                <Link to={`/updateTask/${_id}`} > <button className="btn btn-warning btn-xs">Update</button></Link>
                <button className="btn btn-accent btn-xs ml-3" onClick={() => document.getElementById('my_modal_1').showModal()}>Details</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                       <div>
                        <h1>{taskName}</h1>
                       </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <h1>{description}</h1>
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>



            </td>





        </tr>
    );
};

export default TaskData;