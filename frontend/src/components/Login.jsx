import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50"
            onClick={closeModal}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-red-500 text-[10px]'>This field is required</span>}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className='text-red-500 text-[10px]'>This field is required</span>}
          </div>

          {/* Buttons */}
          <div className="flex justify-around mt-4">
            <button className="text-white bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not Registered?{" "}
              <Link to="/signup" className="text-blue-500 cursor-pointer underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
