import { useState, useEffect } from 'react'

/* service type selection */

function ApplicationsExist() {
    return (
        <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="left-[170px] top-[120.70px] absolute justify-start text-black text-4xl font-normal font-['Inter']">Welcome, Linda</div>
    <div className="w-52 h-12 left-[594px] top-[117px] absolute">
        <div className="left-[57.83px] top-[12.60px] absolute justify-start text-black text-xl font-normal font-['Inter']">Request a job</div>
        <img className="w-11 h-9 left-[8.02px] top-[7.44px] absolute" src="https://placehold.co/42x35" />
        <div className="w-52 h-12 left-0 top-0 absolute rounded-lg border-[0.57px] border-zinc-300" />
    </div>
    <div className="left-[931px] top-[132.70px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Previous</div>
    <div className="left-[1012px] top-[456.70px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Statements</div>
    <div className="left-[923px] top-[530.70px] absolute justify-start text-black text-lg font-normal font-['Inter']">This Month</div>
    <div className="left-[923px] top-[611.70px] absolute justify-start text-black text-lg font-normal font-['Inter']">Last Month</div>
    <div className="left-[931px] top-[196.70px] absolute justify-start text-black text-lg font-normal font-['Inter']">Plumbing</div>
    <div className="left-[931px] top-[222.70px] absolute justify-start text-zinc-400 text-sm font-normal font-['Inter']">Completed on July 25</div>
    <div className="left-[1087px] top-[132.70px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Confirmed</div>
    <div className="left-[923px] top-[563.70px] absolute justify-start text-neutral-500 text-sm font-normal font-['Inter']">Jobs Done: 2</div>
    <div className="left-[923px] top-[644.70px] absolute justify-start text-neutral-500 text-sm font-normal font-['Inter']">Jobs Done: 0</div>
    <div className="left-[1184px] top-[196.70px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$250</div>
    <div className="left-[1192px] top-[530.70px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$250</div>
    <div className="left-[1214px] top-[611.70px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$0</div>
    <div className="w-40 h-7 left-[1087px] top-[702.70px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[16px] top-[5px] absolute justify-start text-sky-600 text-base font-normal font-['Inter']">View Statements</div>
    </div>
    <div className="w-32 h-7 left-[1120px] top-[372.70px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[16px] top-[5px] absolute justify-start text-sky-600 text-base font-normal font-['Inter']">View Details</div>
    </div>
    <div className="w-80 h-0 left-[911.50px] top-[685.20px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-80 h-0 left-[911.50px] top-[355.20px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-96 h-64 left-[897px] top-[502.70px] absolute rounded-[20px] border border-zinc-300" />
    <div className="w-96 h-64 left-[897px] top-[172.70px] absolute rounded-[20px] border border-zinc-300" />
    <div className="w-20 h-5 left-[1027px] top-[196.70px] absolute bg-lime-600/70 rounded-2xl outline outline-1 outline-offset-[-1px] outline-lime-600 overflow-hidden">
        <div className="left-[9px] top-[3px] absolute justify-start text-white text-xs font-normal font-['Inter']">Completed</div>
    </div>
    <div className="w-24 h-0 left-[936.50px] top-[172.70px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-sky-600" />
    <div className="left-[181px] top-[199.70px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Your Posted Jobs</div>
    <div className="left-[181px] top-[231.70px] absolute justify-start text-neutral-500 text-base font-normal font-['Inter']">Start your next project</div>
    <div className="w-32 h-5 left-[682px] top-[232px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="left-[55px] top-[4px] absolute justify-start text-neutral-500 text-[10px] font-normal font-['Inter']">Filter </div>
        <img className="w-8 h-2.5 left-[27px] top-[5px] absolute" src="https://placehold.co/33x10" />
    </div>
    <div className="w-[633px] h-36 left-[170px] top-[263.70px] absolute overflow-hidden">
        <div className="w-36 h-7 left-[453px] top-[97px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="left-[16px] top-[5px] absolute justify-start text-white text-base font-normal font-['Inter']">View Applicants</div>
        </div>
        <div className="left-[26px] top-[21px] absolute justify-start text-black text-lg font-normal font-['Inter']">Kitchen Renovation</div>
        <div className="left-[37px] top-[47px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Beverly Hills, CA 90210</div>
        <div className="left-[44px] top-[110px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">ASAP</div>
        <div className="left-[540px] top-[28px] absolute justify-start text-black text-lg font-normal font-['Inter']">$5,000</div>
        <div className="left-[26px] top-[77px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Open for applicants </div>
        <div className="left-[203px] top-[47px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">2 hours ago</div>
        <img className="w-9 h-3 left-[11px] top-[50px] absolute" src="https://placehold.co/38x12" />
        <img className="w-10 h-3 left-[171px] top-[50px] absolute" src="https://placehold.co/39x12" />
        <img className="w-11 h-3.5 left-[11px] top-[110px] absolute" src="https://placehold.co/45x15" />
        <div className="w-[633px] h-36 left-0 top-[2px] absolute rounded-[20px] border border-zinc-300" />
    </div>
    <div className="w-14 h-16 left-[1184px] top-[25px] absolute">
        <img className="w-14 h-16 left-0 top-0 absolute" src="https://placehold.co/57x63" />
    </div>
    <div className="left-[956px] top-[375.70px] absolute justify-start text-zinc-400 text-xs font-normal font-['Inter']">1/1</div>
    <div className="left-[929px] top-[375.70px] absolute justify-start text-zinc-400 text-xs font-normal font-['Inter']"></div>
    <div className="left-[999px] top-[391.70px] absolute origin-top-left rotate-180 justify-start text-zinc-400 text-xs font-normal font-['Inter']"></div>
    <div className="w-16 h-16 left-[1103px] top-[27px] absolute overflow-hidden">
        <div className="w-10 h-12 left-[11.93px] top-[5.96px] absolute bg-black" />
        <div className="w-3.5 h-3.5 left-[38.17px] top-[8.35px] absolute bg-sky-600 rounded-full" />
    </div>
</div>
    )
}

export default ApplicationsExist