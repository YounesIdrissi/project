import { useState, useEffect } from 'react'

/* service type selection */

function JobFlowSix() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <div className="w-80 h-14 left-[342px] top-[173px] absolute bg-white">
        <div className="w-[688px] h-6 left-[-50px] top-0 absolute rounded-[20px] border border-zinc-400" />
        <div className="w-[589.71px] h-6 left-[-50px] top-0 absolute bg-sky-600 rounded-[20px] border border-black" />
    </div>
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="left-[297px] top-[120px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Share anything visual</div>
    <div className="w-20 h-10 left-[895px] top-[621px] absolute bg-sky-600 rounded-2xl overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-white text-base font-normal font-['Inter']">Next →</div>
    </div>
    <div className="w-32 h-10 left-[297px] top-[621px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">← Previous</div>
    </div>
    <div className="w-[686px] h-80 left-[297px] top-[227px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="left-[35px] top-[28px] absolute justify-start text-black text-xl font-normal font-['Inter']">Upload photos and videos</div>
        <div className="w-72 h-60 left-[35px] top-[71px] absolute rounded-2xl border border-neutral-500" />
        <div className="w-72 h-60 left-[370px] top-[71px] absolute rounded-2xl border border-neutral-500" />
        <img className="w-12 h-8 left-[154px] top-[140px] absolute" src="https://placehold.co/48x32" />
        <div className="left-[133px] top-[179px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">Upload files</div>
        <div className="left-[468px] top-[184px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">Upload files</div>
        <img className="w-12 h-8 left-[489px] top-[140px] absolute" src="https://placehold.co/48x32" />
    </div>
</div>
    )
}

export default JobFlowSix