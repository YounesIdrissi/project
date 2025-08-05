import { useState, useEffect } from 'react'

/* service type selection */

function ViewApplicants() {
    return (
        <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="w-14 h-16 left-[1184px] top-[25px] absolute">
        <img className="w-14 h-16 left-0 top-0 absolute" src="https://placehold.co/57x63" />
    </div>
    <div className="w-10 h-11 left-[1115px] top-[34px] absolute bg-zinc-400" />
    <div className="left-[128px] top-[138px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Kitchen Renovation</div>
    <div className="w-[1065px] h-36 left-[119px] top-[167px] absolute overflow-hidden">
        <div className="w-36 h-7 left-[453px] top-[53px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="p-2.5 left-[6px] top-[-5px] absolute inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-base font-normal font-['Inter']">Accept</div>
            </div>
        </div>
        <div className="left-[26px] top-[13px] absolute justify-start text-black text-lg font-normal font-['Inter']">Contractor</div>
        <div className="left-[191px] top-[13px] absolute justify-start text-black text-lg font-normal font-['Inter']">Rating</div>
        <div className="left-[317px] top-[13px] absolute justify-start text-black text-lg font-normal font-['Inter']">Experience</div>
        <div className="left-[26px] top-[51px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Sean Smith</div>
        <div className="left-[185px] top-[51px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">4.8</div>
        <div className="left-[323px] top-[51px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">5 years</div>
        <div className="left-[323px] top-[82px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">3 years</div>
        <div className="left-[185px] top-[80px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">4.5</div>
        <div className="left-[26px] top-[83px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">David Jones</div>
        <div className="w-[582px] h-80 left-0 top-[2px] absolute rounded-[20px] border border-zinc-300" />
        <div className="w-80 h-0 left-[26px] top-[43px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
        <div className="w-80 h-0 left-[26px] top-[75px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    </div>
</div>
    )
}

export default ViewApplicants