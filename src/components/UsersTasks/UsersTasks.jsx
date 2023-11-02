/* eslint-disable react/no-unknown-property */

import { Link, useLoaderData } from "react-router-dom";
import TaskData from "./TaskData";

const UsersTasks = () => {

    const tasks = useLoaderData()
    console.log(tasks);

    return (
        <div className="max-w-[1200px] mx-auto">
            <Link to={'/addTask'}><button className="btn btn-primary rounded-lg ml-28 mb-6 mt-8">Add task</button></Link>
            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Remove
                            </th>
                            <th>Task name</th>
                            <th>Due date</th>
                            <th>Member</th>
                            <th>Priority</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                   
                    {
                        tasks.map(task => <TaskData key={task._id} task={task} ></TaskData>)
                    }
                   
               </tbody>

                </table>
            </div>
        </div>
    );
};

export default UsersTasks;

