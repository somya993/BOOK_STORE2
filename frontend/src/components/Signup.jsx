import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
function Signup() {
    const navigate = useNavigate();
    const handleSignup = () => {
        // Navigate to homepage and set a trigger for the login modal
        navigate("/", { state: { openLoginModal: true } });
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className='flex h-screen justify-center items-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            {/*Name*/}
                            <div className='mt-4 space-y-2'>
                                <span>Full Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your Full Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none '
                                    {...register("name", { required: true })} />

                                <br />
                                {errors.name && <span className='text-red-500 text-[10px]'>This field is required</span>}
                            </div>
                            {/*Email*/}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your Email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none '
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-red-500 text-[10px]'>This field is required</span>}
                            </div>

                            {/*Password*/}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password"
                                    placeholder='Enter your Password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none '
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-red-500 text-[10px]'>This field is required</span>}
                            </div>

                            {/* Signup Button */}
                            <button

                                className="text-white mt-4 bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-200"
                            >
                                Signup
                            </button>

                            {/* Login Section */}
                            <p className="text-md">
                                Have an Account?{" "}
                                <button
                                    className="text-blue-500 cursor-pointer underline"
                                    onClick={handleSignup}
                                >
                                    Login
                                </button>

                                <Login />
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
