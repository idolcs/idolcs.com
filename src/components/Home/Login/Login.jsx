import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Greeting from '../Greeting/Greeting';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const approvedUsers = [
        {email: 'akshaymagrani1@gmail.com', password: '12345678', name: 'Akshay'},
        {email: 'anil@gmail.com', password: '1234', name: 'Anil' },
    ]

    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = approvedUsers.find(user => user.email === email && user.password === password);
        if (user) {
            console.log('Welcome', email, user.name);
            props.onLoginSuccess(user.name);
        } else {
            console.log('User is not authenticated');
            return <p>'User is not authenticated'</p>
        }
        console.log('Username:', email);
        console.log('Password:', password);
    };

    return (
        <div className='p-3 border border-dashed border-gray-300 rounded'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <label className='w-[100%] md:max-w-[40%] md:min-[300px] rounded mt-3'>
                        <p>Email-Id:</p>
                        <input type="email" value={email} onChange={handleUsernameChange} placeholder='Email-Id' className='mt-3 px-2 py-3 bg-greyPink-400 w-[100%] md:max-w-[100%] md:min-[300px]'/>
                    </label>
                    <br />
                    <label className='w-[100%] md:max-w-[40%] md:min-[300px] rounded mt-3'>
                        <p>Password:</p>
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className='mt-3 px-2 py-3 rounded bg-greyPink-400 w-[100%] md:max-w-[100%] md:min-[300px]'/>
                    </label>
                </div>
                <br />
                <p className='text-center'>Hey, What should we call you?</p>
                <div className='flex flex-col justify-center items-center'>
                    <button className='w-[100%] md:max-w-[40%] md:min-[300px] bg-blueMagenta-500 p-3 mt-3 rounded hover:bg-blueMagenta-700'>Sign Up</button>
                    <button className='w-[100%] md:max-w-[40%] md:min-[300px] bg-greyPink-800 p-3 mt-3 rounded hover:bg-greyPink-900'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;