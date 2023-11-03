/* eslint-disable react/no-unknown-property */

import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTasks = () => {
    const userTaskInfo = useLoaderData();
    const {_id, taskName, dueDate, priority, memberName, description } = userTaskInfo;
    const handleUpdateTask = (e) => {
        e.preventDefault();
        const form = e.target
        const updateData = {
            taskName: form.name.value,
            dueDate: form.date.value,
            priority: form.priority.value,
            memberName: form.member.value,
            description: form.description.value,
        }

        try {
              axios.put(`http://localhost:5000/usersTasks/${_id}`, updateData, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Task updated successfully',
                        'success'
                      )
                }
            })

        } catch (error) {
            console.log(error.message);
        }

        console.log(updateData);
    }
    return (
        <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update task details</h2>
                <form onSubmit={handleUpdateTask} method="PUT" action="#">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                            <input defaultValue={taskName} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task name" required="" />
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                            <input defaultValue={dueDate} type="date" name="date" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                        </div>
                        <div class="w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                            <input defaultValue={priority} type="text" name="priority" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="High, Medium, Low" required />
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member name</label>
                            <input defaultValue={memberName} type="text" name="member" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter member name" required />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea defaultValue={description} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Update Task
                    </button>
                </form>
            </div>
        </section>
    </div>
    );
};

export default UpdateTasks;