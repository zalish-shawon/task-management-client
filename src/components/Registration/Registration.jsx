/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { getAuth, updateProfile } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebaseConfig';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';

const Registration = () => {
    const {createAccountWithPassword} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth(app)
    const handleRegisterUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        createAccountWithPassword(email, password)
        .then(res => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
            })
            navigate(location?.state ? location.state : "/")
            Swal.fire(
                'You can Log in now!',
                'Registartion successful!',
                'success'
            )
            form.reset()

        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div>
         
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
                        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Create a new account
                        </h2>
                        <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                            Or <br />
                             <Link to={'/login'}>
                             <a href="#"
                                class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                login to your account
                            </a>
                             </Link>
                        </p>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" onSubmit={handleRegisterUser}  >
                            <div className='mb-6'>
                                <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="name" name="name" placeholder="John Doe" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Image URL</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="names" name="image" placeholder="PhotoURL" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label for="email" class="block text-sm font-medium leading-5  text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" name="email" placeholder="user@example.com" type="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "/>
                                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input id="password" name="password" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Create account
                                    </button>
                                </span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;