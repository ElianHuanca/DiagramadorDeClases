import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginNodeJs } from '../store/auth/thunks';
export const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuthenticating = false; 
    const { nombre, password, onInputChange } = useForm({
        nombre: "",
        password: ""
    });

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginNodeJs({ nombre, password }));
    };

    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <div className='absolute w-full h-full object-cover bg-gray-500 mix-blend-overlay'>
            </div>
            <div className='flex justify-center items-center h-full'>
                <form onSubmit={onSubmit} className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-4xl font-bold text-center py-4'>Login</h2>

                    <div className='flex flex-col mb-4'>
                        <label>Username</label>
                        <input className='border relative bg-gray-100 p-2' type="text" value={nombre} onChange={onInputChange} name="nombre" required/>
                    </div>
                    <div className='flex flex-col '>
                        <label>Password</label>
                        <input className='border relative bg-gray-100 p-2' type="password" value={password} onChange={onInputChange} name="password" required/>
                    </div>
                    <button disabled={isAuthenticating} className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' type="submit">Sign In</button>

                    <p className='text-center mt-8'>No Tienes Cuenta?</p>
                    <Link to="/auth/register" className="text-center block relative">
                        <span className="hover:text-slate-600">Registrate</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}