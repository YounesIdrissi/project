import { useState, useEffect } from 'react'

/* service type selection */

function Identify() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <div className="left-[459px] top-[181px] absolute justify-start text-black text-xl font-normal font-['Inter']">Choose your account type to continue</div>
    <div className="left-[390px] top-[108px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Let’s Get You Started</div>
    <div className="w-[493px] h-[452px] left-[136px] top-[242px] absolute overflow-hidden">
        <div className="w-96 h-96 left-[27px] top-[6px] absolute rounded-[20px] outline outline-[3px] outline-offset-[-3px] outline-zinc-300 overflow-hidden">
            <div className="left-[74px] top-[176px] absolute justify-start text-black text-4xl font-normal font-['Inter']">I need work done</div>
            <div className="w-28 h-28 left-[167px] top-[37px] absolute bg-blue-400/40 rounded-full" />
            <div className="w-14 h-12 left-[195px] top-[64px] absolute bg-sky-600" />
            <div className="left-[55px] top-[254px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Post projects, hire <br/>contractors, and get your home <br/>improvements done right.</div>
        </div>
    </div>
    <div className="w-[461px] h-[456px] left-[671px] top-[238px] absolute overflow-hidden">
        <div className="w-96 h-96 left-[17px] top-[10px] absolute rounded-[20px] outline outline-[3px] outline-offset-[-3px] outline-zinc-300 overflow-hidden">
            <div className="w-28 h-28 left-[157px] top-[43px] absolute bg-blue-400/40 rounded-full" />
            <img className="w-24 h-20 left-[68px] top-[52px] absolute bg-blend-color" src="https://placehold.co/89x86" />
            <img className="w-16 h-20 left-[176px] top-[59px] absolute" src="https://placehold.co/72x73" />
        </div>
        <div className="left-[96px] top-[190px] absolute justify-start text-black text-4xl font-normal font-['Inter']">I’m a contractor</div>
        <div className="left-[57px] top-[259px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Find quality leads, grow your <br/>business, and get paid for <br/>great work.</div>
    </div>
</div>
    )
}

export default Identify