import React from 'react'

function Login() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Login</h3>
                {/*Email*/}
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none ' />
                </div>

                {/*Password*/}
                <div className='mt-4 space-y-2'>
                    <span>Password</span>
                    <br />
                    <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none ' />
                </div>

                {/*Button*/}
                <div className='flex justify-around mt-4'>
                    <button className='text-white bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Login</button>
                    <p>
                        Not Registered? {" "} <Link to="/signup" className='text-blue-500 cursor-pointer underline'>Signup</Link>
                    </p>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Login