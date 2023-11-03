import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import UsersTasks from './components/UsersTasks/UsersTasks.jsx';
import AddTasks from './components/AddTask/AddTasks.jsx';
import UpdateTasks from './components/UpdateTasks/UpdateTasks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path: "/addTask",
      element: <AddTasks></AddTasks>
    },
    {
      path: "/usersTasks",
      element: <UsersTasks></UsersTasks>,
      loader: () => fetch('http://localhost:5000/usersTasks')
    },
    {
      path: "/updateTask/:id",
      element: <UpdateTasks></UpdateTasks>,
      loader: ({params}) => fetch(`http://localhost:5000/usersTasks/${params.id}`)
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
