import GoogleLogo from '../../../assets/images/google vector.svg';

export default function LoginPage() {
    return (
        <div className="bg-gradient w-screen h-screen">
            <div className="p-2 h-[30%]">
                <h1 className="m-4 text-white text-4xl border-b-2 w-[200px] font-bold">Login</h1>
            </div>
            <div className="p-6 rounded-t-3xl h-[70%] rounded-s-md bg-gradient-to-b from-[#5749A8] to-[#0D2B63]">
                <p className="text-base">Enter Email Id</p>
                <input type="email" className="p-2 mb-3 border-b bg-transparent w-full"/>
                <p className="text-base">Password</p>
                <input type="password" className="p-2 mb-3 border-b bg-transparent w-full"/>
                <p className="text-right text-xs">Forgot Password?</p>
                <div className='my-4 flex flex-col justify-center text-center'>
                    <button className='py-3 px-3 my-2 rounded-full bg-[#E2D3FC] text-black align-middle'>Log In</button>
                    <p>Or</p>
                    <button className='py-2 px-3 my-2 rounded-full bg-[#E2D3FC] text-black flex justify-center items-center'><img src={GoogleLogo} alt="google-logo" className='' /><span className='m-auto'>Login through Google</span></button>
                </div>
                <p className='text-xs text-center m-3'>Don't have an account? Sign up now</p>
            </div>
        </div>
    )
}