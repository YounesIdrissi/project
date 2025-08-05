import { useState, useEffect } from 'react'

/* service type selection */

function JobFlowEight() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <div className="left-[448px] top-[305px] absolute justify-start text-black text-4xl font-normal font-['Inter']">Job's in, berry sweet!</div>
    <div className="w-36 h-10 left-[569px] top-[230px] absolute bg-blue-400/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[41px] top-[10px] absolute justify-start text-sky-600 text-base font-normal font-['Inter']">Pending</div>
    </div>
    <div className="left-[366px] top-[364px] absolute justify-start text-black text-2xl font-normal font-['Inter']"><br/> We'll notify you once contractors start applying.</div>
    <div className="w-[899px] h-[545px] left-[190px] top-[120px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="w-44 h-12 left-[553px] top-[407px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="left-[29px] top-[13px] absolute justify-start text-white text-lg font-normal font-['Inter']">Return Home</div>
        </div>
        <div className="w-44 h-12 left-[182px] top-[407px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
            <div className="left-[51px] top-[13px] absolute justify-start text-zinc-400 text-lg font-normal font-['Inter']">Edit Job</div>
        </div>
        <div className="left-[393px] top-[342px] absolute justify-start text-black text-lg font-normal font-['Inter'] underline">View my jobs</div>
    </div>
</div>
    )
}

export default JobFlowEight