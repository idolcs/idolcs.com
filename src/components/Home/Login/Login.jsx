import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='p-3 border border-dashed border-gray-300 rounded'>
            <form onSubmit={handleSubmit}>
                {/* <label>
                    Email-Id:
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder='Email-Id' className='mt-3 px-2 py-4 w-full border rounded md:max-w-[25%] md:min-[300px]'/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className='mt-3 px-2 py-4 w-full border rounded md:max-w-[25%] md:min-[300px]'/>
                </label> */}
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