export default function VerificationPage() {
    return (
        <div className="bg-gradient w-screen h-screen">
            <div className="p-2 h-[50%]">
                <h1 className="m-4 text-white text-4xl border-b-2 w-[200px] font-bold">Enter Code</h1>
            </div>
            <div className="p-6 rounded-t-3xl h-[50%] rounded-s-md bg-gradient-to-b from-[#5749A8] to-[#0D2B63]">
                <p className="text-base">We have send you the OTP code on your email </p>
                <div className="flex justify-between max-w-60 m-auto">
                    <input type="number" className="block w-9 h-9 p-3 mt-24 mx-3 rounded bg-[#ABA2DE] placeholder:text-white placeholder:text-center arrow-remover" placeholder="0" maxLength={1} required/>
                    <input type="number" className="block w-9 h-9 p-3 mt-24 mx-3 rounded bg-[#ABA2DE] placeholder:text-white placeholder:text-center arrow-remover" placeholder="0" maxLength={1} required />
                    <input type="number" className="block w-9 h-9 p-3 mt-24 mx-3 rounded bg-[#ABA2DE] placeholder:text-white placeholder:text-center arrow-remover" placeholder="0" maxLength={1} required />
                    <input type="number" className="block w-9 h-9 p-3 mt-24 mx-3 rounded bg-[#ABA2DE] placeholder:text-white placeholder:text-center arrow-remover" placeholder="0" maxLength={1} required />
                </div>
                <p className="text-right text-xs my-4 max-w-60 m-auto pr-3">Resend code</p>
                <div className='my-4 flex flex-col justify-center text-center max-w-60 m-auto'>
                    <button className='py-3 px-3 my-2 rounded-full bg-[#E2D3FC] text-black align-middle'>Verify</button>
                </div>
                <p className='text-xs text-center m-3'>Don't have an account? Sign up now</p>
            </div>
        </div>
    )
}