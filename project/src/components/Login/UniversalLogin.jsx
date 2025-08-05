import { useState, useEffect } from 'react'

/* service type selection */

function UserLogin() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <div className="w-[770px] h-[780px] left-[255px] top-[26px] absolute overflow-hidden">
        <div className="w-[530px] h-14 left-[124px] top-[454px] absolute bg-sky-600 rounded-[20px]">
            <div className="left-[228px] top-[15px] absolute justify-start text-white text-xl font-normal font-['Inter']">Log In</div>
        </div>
        <div className="w-[705px] h-[712px] left-[33px] top-[30px] absolute rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-zinc-300" />
        <div className="w-[599px] h-32 left-[97px] top-[541px] absolute overflow-hidden">
            <div className="left-[238px] top-[11px] absolute justify-start text-black text-base font-normal font-['Inter']">Or log in with</div>
            <div className="w-44 h-0 left-[35px] top-[21px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
            <div className="w-44 h-0 left-[372px] top-[21px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
            <div className="w-28 h-20 left-[178px] top-[41px] absolute overflow-hidden">
                <div className="w-24 h-16 left-[11px] top-[5px] absolute rounded-[20px] border border-black" />
                <img className="w-16 h-10 left-[24px] top-[16px] absolute" src="https://placehold.co/64x41" />
            </div>
            <div className="w-28 h-20 left-[289px] top-[41px] absolute overflow-hidden">
                <div className="w-24 h-16 left-[11px] top-[5px] absolute rounded-[20px] border border-black" />
                <img className="w-16 h-10 left-[24px] top-[16px] absolute" src="https://placehold.co/64x41" />
            </div>
        </div>
        <div className="w-64 h-7 left-[255px] top-[689px] absolute overflow-hidden">
            <div className="left-[13px] top-[2px] absolute justify-start text-black text-base font-normal font-['Inter'] underline">Don’t have an account? Sign up</div>
        </div>
        <div className="w-[605px] h-48 left-[91px] top-[228px] absolute overflow-hidden">
            <div className="w-[529px] h-14 left-[30px] top-[18px] absolute">
                <div className="w-[530px] h-14 left-0 top-0 absolute rounded-[20px] border border-black" />
                <div className="left-[22px] top-[15px] absolute justify-start text-zinc-400 text-xl font-normal font-['Inter']">E-mail address</div>
            </div>
            <div className="w-[531px] h-14 left-[30px] top-[104px] absolute">
                <div className="w-[531px] h-14 left-0 top-0 absolute rounded-[20px] border border-black" />
                <div className="left-[22px] top-[15px] absolute justify-start text-zinc-400 text-xl font-normal font-['Inter']">Password</div>
            </div>
            <div className="left-[458px] top-[168px] absolute justify-start text-black text-xs font-normal font-['Inter'] underline">Forgot password?</div>
        </div>
        <div className="w-44 h-32 left-[305px] top-[74px] absolute overflow-hidden">
            <img className="w-16 h-16 left-[48px] top-[43px] absolute" src="https://placehold.co/71x72" />
            <img className="w-16 h-9 left-[84.13px] top-[6px] absolute origin-top-left rotate-[13.80deg]" src="https://placehold.co/68x35" />
        </div>
    </div>
</div>
    )
}

export default UserLogin