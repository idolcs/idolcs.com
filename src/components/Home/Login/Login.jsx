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
        <div className='text-white p-3 border border-dashed border-white rounded'>
            <form onSubmit={handleSubmit}>
                <p className='text-center text-white mt-2'>Hey, What should we call you?</p>
                <div className='flex flex-col justify-center items-center'>
                    <button className='w-[100%] md:max-w-[40%] md:min-[300px] bg-[#AB9DFF] p-3 mt-3 text-[#000] font-semibold rounded-full hover:bg-[#8275cc]'>Sign Up</button>
                    <button className='w-[100%] md:max-w-[40%] md:min-[300px] bg-[#F2F0F2] p-3 mt-3 text-[#000] font-semibold rounded-full hover:bg-greyPink-900'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;