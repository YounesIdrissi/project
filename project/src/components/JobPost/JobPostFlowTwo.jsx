import { useState, useEffect } from 'react'

/* description of job */

function JobFlowTwo() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
        <div className="w-80 h-14 left-[342px] top-[173px] absolute bg-white">
            <div className="w-[688px] h-6 left-[-50px] top-0 absolute rounded-[20px] border border-zinc-400" />
            <div className="w-48 h-6 left-[-50px] top-0 absolute bg-sky-600 rounded-[20px] border border-black" />
        </div>
        <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
        <div className="left-[297px] top-[120px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Describe your project in detail</div>
        <div className="w-20 h-10 left-[895px] top-[621px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="left-[20px] top-[10px] absolute justify-start text-white text-base font-normal font-['Inter']">Next →</div>
        </div>
        <div className="w-32 h-10 left-[297px] top-[621px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
            <div className="left-[20px] top-[10px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">← Previous</div>
        </div>
        <div className="w-[686px] h-80 left-[297px] top-[227px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
            <div className="left-[35px] top-[38px] absolute justify-start text-black text-xl font-normal font-['Inter']">Project description</div>
            <div className="w-[612px] h-16 left-[35px] top-[86px] absolute">
                <div className="w-[586px] left-[16px] top-[9px] absolute justify-start text-zinc-400 text-xl font-normal font-['Inter']">Provide what needs to be done, any specific requirements, and expectations</div>
            </div>
            <div className="w-[622px] h-56 left-[35px] top-[78px] absolute rounded-2xl border-[0.77px] border-neutral-500" />
        </div>
    </div>
    )
}

export default JobFlowTwo