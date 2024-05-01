import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/loginPage" className='w-[100%] md:max-w-[40%] md:min-[300px] bg-[#AB9DFF] p-3 mt-3 text-[#000] text-center font-semibold rounded-full hover:bg-[#8275cc]'>
                        <button>Sign Up</button>
                    </Link>
                    <Link to="/signup" className='w-[100%] md:max-w-[40%] md:min-[300px] bg-[#F2F0F2] p-3 mt-3 text-[#000] text-center font-semibold rounded-full hover:bg-greyPink-900'>
                        <button>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;