export default function ResetPassword() {
    return (
        <div className="bg-gradient w-screen h-screen">
            <div className="p-2 h-[30%]">
                <h1 className="m-4 text-white text-4xl border-b-2 w-[200px] font-bold">Reset Password</h1>
            </div>
            <div className="p-6 rounded-t-3xl h-[70%] rounded-s-md bg-gradient-to-b from-[#5749A8] to-[#0D2B63]">
                <p className="text-base">Reset your Password for the account @XYZ</p>
                
                <p className="text-base mt-6">Create New Password</p>
                <input type="password" className="p-2 mb-3 border-b bg-transparent w-full"/>
                <p className="text-base">Confirm Password</p>
                <input type="password" className="p-2 mb-3 border-b bg-transparent w-full" />
                <div className='my-4 flex flex-col justify-center text-center'>
                    <button className='py-3 px-3 my-2 rounded-full bg-[#E2D3FC] text-black align-middle'>Continue</button>
                </div>
            </div>
        </div>
    )
}