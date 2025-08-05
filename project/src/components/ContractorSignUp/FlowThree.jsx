import { useState, useEffect } from 'react'

/* service type selection */

function CsignUpThree() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="left-[297px] top-[141px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Tell us about your work</div>
    <div className="w-20 h-10 left-[895px] top-[621px] absolute bg-sky-600 rounded-2xl overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-white text-base font-normal font-['Inter']">Next →</div>
    </div>
    <div className="w-32 h-10 left-[297px] top-[621px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-400 overflow-hidden">
        <div className="left-[20px] top-[10px] absolute justify-start text-zinc-400 text-base font-normal font-['Inter']">← Previous</div>
    </div>
    <div className="w-[686px] h-80 left-[297px] top-[227px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="left-[56px] top-[49px] absolute justify-start text-black text-xl font-normal font-['Inter']">Select the services that you do</div>
        <div className="w-96 h-10 left-[56px] top-[254px] absolute">
            <div className="w-[573px] h-10 left-0 top-0 absolute rounded-2xl border-[0.77px] border-black" />
            <div className="left-0 top-[-36px] absolute justify-start text-black text-lg font-normal font-['Inter']">Other</div>
        </div>
    </div>
    <div className="w-32 h-24 left-[365px] top-[327px] absolute">
        <div className="w-32 h-24 left-0 top-0 absolute rounded-[20px] border border-zinc-400" />
        <div className="left-[43px] top-[65px] absolute text-center justify-start text-black text-xs font-normal font-['Inter']">Repair</div>
        <img className="w-16 h-14 left-[25px] top-[11px] absolute" src="https://placehold.co/72x54" />
    </div>
    <div className="w-32 h-24 left-[647px] top-[327px] absolute">
        <div className="w-32 h-24 left-0 top-0 absolute rounded-[20px] border border-zinc-400" />
        <div className="left-[37px] top-[65px] absolute text-center justify-start text-black text-xs font-normal font-['Inter']">Electrical</div>
        <img className="w-16 h-14 left-[29px] top-[11px] absolute" src="https://placehold.co/72x54" />
    </div>
    <div className="w-32 h-24 left-[788px] top-[327px] absolute">
        <div className="w-32 h-24 left-0 top-0 absolute rounded-[20px] border border-zinc-400" />
        <div className="left-[36px] top-[65px] absolute justify-start text-black text-xs font-normal font-['Inter']">Plumbing</div>
        <img className="w-16 h-14 left-[27px] top-[11px] absolute" src="https://placehold.co/72x54" />
    </div>
    <div className="w-32 h-24 left-[506px] top-[327px] absolute">
        <div className="w-32 h-24 left-0 top-0 absolute rounded-[20px] border border-zinc-400" />
        <div className="left-[40px] top-[65px] absolute text-center justify-start text-black text-xs font-normal font-['Inter']">Painting</div>
        <img className="w-16 h-14 left-[29px] top-[11px] absolute" src="https://placehold.co/72x54" />
    </div>
</div>
    )
}

export default CsignUpThree