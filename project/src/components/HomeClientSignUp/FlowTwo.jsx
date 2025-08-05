import { useState, useEffect } from 'react'

/* service type selection */

function HsignUpTwo() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="left-[297px] top-[141px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Where can we reach you? </div>
    <div className="w-20 h-10 left-[895px] top-[621px] absolute bg-sky-600 rounded-2xl overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-white text-base font-normal font-['Inter']">Next →</div>
    </div>
    <div className="w-32 h-10 left-[297px] top-[621px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">← Previous</div>
    </div>
    <div className="w-[686px] h-80 left-[297px] top-[227px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="w-[545px] h-14 left-[-8px] top-[30px] absolute">
            <div className="w-[569px] h-14 left-[60px] top-0 absolute rounded-[20px] border border-black" />
            <div className="left-[74px] top-[15px] absolute justify-start text-zinc-400 text-xl font-normal font-['Inter']">Phone number</div>
        </div>
    </div>
</div>
    )
}

export default HsignUpTwo