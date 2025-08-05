import { useState, useEffect } from 'react'

/* service type selection */

function JobFlowOne() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
        <div className="w-80 h-14 left-[342px] top-[173px] absolute bg-white">
            <div className="w-[688px] h-6 left-[-50px] top-0 absolute rounded-[20px] border border-zinc-400" />
            <div className="w-24 h-6 left-[-50px] top-0 absolute bg-sky-600 rounded-[20px] border border-black" />
        </div>
        <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
        <div className="left-[297px] top-[120px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Post Your Job</div>
        <div className="w-20 h-10 left-[895px] top-[621px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="left-[20px] top-[10px] absolute justify-start text-white text-base font-normal font-['Inter']">Next →</div>
        </div>
        <div className="w-32 h-10 left-[297px] top-[621px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
            <div className="left-[20px] top-[10px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">← Previous</div>
        </div>
        <div className="w-[686px] h-80 left-[297px] top-[227px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
            <div className="left-[44px] top-[31px] absolute justify-start text-black text-xl font-normal font-['Inter']">What services are you interested in?</div>
            <div className="w-32 h-24 left-[68px] top-[83px] absolute rounded-[20px] border border-zinc-400" />
            <div className="w-32 h-24 left-[209px] top-[83px] absolute rounded-[20px] border border-zinc-400" />
            <div className="w-32 h-24 left-[350px] top-[83px] absolute rounded-[20px] border border-zinc-400" />
            <div className="w-32 h-24 left-[491px] top-[83px] absolute rounded-[20px] border border-zinc-400" />
            <div className="left-[80px] top-[116px] absolute justify-start text-black text-xl font-normal font-['Inter']">Handyman</div>
            <div className="left-[368px] top-[116px] absolute text-center justify-start text-black text-xl font-normal font-['Inter']">Electrical</div>
            <div className="left-[510px] top-[116px] absolute justify-start text-black text-xl font-normal font-['Inter']">Plumbing</div>
            <div className="w-96 h-10 left-[44px] top-[236px] absolute">
                <div className="w-[573px] h-10 left-0 top-0 absolute rounded-2xl border-[0.77px] border-black" />
                <div className="left-0 top-[-36px] absolute justify-start text-black text-lg font-normal font-['Inter']">Other</div>
            </div>
        </div>
    </div>
    )
}

export default JobFlowOne