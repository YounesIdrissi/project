import { useState, useEffect } from 'react'

/* service type selection */

function CDefaultDash() {
    return (
    <div className="w-[1280px] h-[1343px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="w-14 h-16 left-[1184px] top-[25px] absolute">
        <img className="w-14 h-16 left-0 top-0 absolute" src="https://placehold.co/57x63" />
    </div>
    <div className="left-[182px] top-[158px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Available Jobs</div>
    <div className="left-[939px] top-[164px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Applied</div>
    <div className="left-[1012px] top-[488px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Statements</div>
    <div className="left-[923px] top-[562px] absolute justify-start text-black text-lg font-normal font-['Inter']">This Month</div>
    <div className="left-[923px] top-[643px] absolute justify-start text-black text-lg font-normal font-['Inter']">Last Month</div>
    <div className="left-[931px] top-[228px] absolute justify-start text-black text-lg font-normal font-['Inter']">Plumbing</div>
    <div className="left-[931px] top-[268px] absolute justify-start text-black text-lg font-normal font-['Inter']">Repair</div>
    <div className="left-[931px] top-[308px] absolute justify-start text-black text-lg font-normal font-['Inter']">Repair</div>
    <div className="left-[931px] top-[347px] absolute justify-start text-black text-lg font-normal font-['Inter']">Plumbing</div>
    <div className="left-[1087px] top-[164px] absolute justify-start text-black text-2xl font-normal font-['Inter']">Confirmed</div>
    <div className="left-[182px] top-[190px] absolute justify-start text-neutral-500 text-base font-normal font-['Inter']">Find your next project</div>
    <div className="left-[923px] top-[595px] absolute justify-start text-neutral-500 text-sm font-normal font-['Inter']">Completed Jobs: 3</div>
    <div className="left-[923px] top-[676px] absolute justify-start text-neutral-500 text-sm font-normal font-['Inter']">Completed Jobs: 5</div>
    <div className="left-[1184px] top-[228px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$650</div>
    <div className="left-[1184px] top-[268px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$250</div>
    <div className="left-[1184px] top-[308px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$100</div>
    <div className="left-[1184px] top-[347px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$400</div>
    <div className="left-[1171px] top-[562px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$7,700</div>
    <div className="left-[1159px] top-[643px] absolute justify-start text-neutral-500 text-lg font-normal font-['Inter']">$10,390</div>
    <div className="w-32 h-5 left-[669px] top-[190px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
        <div className="left-[55px] top-[4px] absolute justify-start text-neutral-500 text-[10px] font-normal font-['Inter']">Filter </div>
        <img className="w-8 h-2.5 left-[27px] top-[5px] absolute" src="https://placehold.co/33x10" />
    </div>
    <div className="w-[633px] h-[471px] left-[171px] top-[222px] absolute overflow-hidden">
        <div className="w-20 h-7 left-[527px] top-[97px] absolute bg-sky-600 rounded-2xl overflow-hidden">
            <div className="left-[16px] top-[5px] absolute justify-start text-white text-base font-normal font-['Inter']">Apply</div>
        </div>
        <div className="left-[26px] top-[21px] absolute justify-start text-black text-lg font-normal font-['Inter']">Kitchen Renovation</div>
        <div className="left-[37px] top-[47px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Beverly Hills, CA 90210</div>
        <div className="left-[44px] top-[110px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">ASAP</div>
        <div className="left-[540px] top-[28px] absolute justify-start text-sky-600 text-lg font-bold font-['Inter']">$5,000</div>
        <div className="left-[26px] top-[77px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Complete kitchen remodel including cabinets, countertops, and appliances</div>
        <div className="left-[203px] top-[47px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">2 hours ago</div>
        <div className="left-[517px] top-[51px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">2.5 miles away</div>
        <img className="w-9 h-3 left-[11px] top-[50px] absolute" src="https://placehold.co/38x12" />
        <img className="w-10 h-3 left-[171px] top-[50px] absolute" src="https://placehold.co/39x12" />
        <img className="w-11 h-3.5 left-[11px] top-[110px] absolute" src="https://placehold.co/45x15" />
        <div className="w-[575px] h-72 left-[26px] top-[142px] absolute rounded-2xl border border-zinc-400" />
        <div className="left-[218px] top-[284px] absolute justify-start text-neutral-500 text-base font-normal font-['Inter']">[Job Preview Image]</div>
        <div className="w-[633px] h-[469px] left-0 top-[2px] absolute rounded-[20px] border border-zinc-300" />
    </div>
    <div className="w-40 h-7 left-[1087px] top-[734px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[16px] top-[5px] absolute justify-start text-sky-600 text-base font-normal font-['Inter']">View Statements</div>
    </div>
    <div className="w-32 h-7 left-[1120px] top-[404px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[16px] top-[5px] absolute justify-start text-sky-600 text-base font-normal font-['Inter']">View Details</div>
    </div>
    <div className="w-80 h-0 left-[911.50px] top-[716.50px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-80 h-0 left-[911.50px] top-[386.50px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="left-[171px] top-[88px] absolute justify-start text-black text-4xl font-normal font-['Inter']">Welcome, Sean</div>
    <div className="w-[633px] h-[471px] left-[171px] top-[739px] absolute overflow-hidden">
        <div className="w-20 h-7 left-[527px] top-[97px] absolute bg-blue-400/40 rounded-2xl overflow-hidden">
            <div className="left-[9px] top-[5px] absolute justify-start text-white text-base font-normal font-['Inter']">Applied</div>
        </div>
        <div className="left-[26px] top-[21px] absolute justify-start text-black text-lg font-normal font-['Inter']">Residential Plumbing</div>
        <div className="left-[39px] top-[49px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">West Hollywood, CA 90046</div>
        <div className="left-[44px] top-[110px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">ASAP</div>
        <div className="left-[556px] top-[28px] absolute justify-start text-sky-600 text-lg font-bold font-['Inter']">$650</div>
        <div className="left-[26px] top-[77px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">Repair and addressing leaks in the kitchen sink</div>
        <div className="left-[238px] top-[50px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">5 hours ago</div>
        <div className="left-[517px] top-[51px] absolute justify-start text-neutral-500 text-xs font-normal font-['Inter']">8.3 miles away</div>
        <img className="w-9 h-3 left-[11px] top-[50px] absolute" src="https://placehold.co/38x12" />
        <img className="w-10 h-3 left-[203px] top-[51px] absolute" src="https://placehold.co/39x12" />
        <img className="w-11 h-3.5 left-[11px] top-[110px] absolute" src="https://placehold.co/45x15" />
        <div className="w-[575px] h-72 left-[26px] top-[142px] absolute rounded-2xl border border-zinc-400" />
        <div className="left-[218px] top-[284px] absolute justify-start text-neutral-500 text-base font-normal font-['Inter']">[Job Preview Image]</div>
        <div className="w-[633px] h-[469px] left-0 top-[2px] absolute rounded-[20px] border border-zinc-300" />
    </div>
    <div className="w-96 h-64 left-[897px] top-[534px] absolute rounded-[20px] border border-zinc-300" />
    <div className="w-96 h-64 left-[897px] top-[204px] absolute rounded-[20px] border border-zinc-300" />
    <div className="w-16 h-5 left-[1027px] top-[228px] absolute bg-blue-400/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[9px] top-[3px] absolute justify-start text-sky-600 text-xs font-normal font-['Inter']">Pending</div>
    </div>
    <div className="w-16 h-5 left-[1027px] top-[268px] absolute bg-blue-400/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[9px] top-[3px] absolute justify-start text-sky-600 text-xs font-normal font-['Inter']">Pending</div>
    </div>
    <div className="w-16 h-5 left-[1027px] top-[308px] absolute bg-blue-400/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[9px] top-[3px] absolute justify-start text-sky-600 text-xs font-normal font-['Inter']">Pending</div>
    </div>
    <div className="w-16 h-5 left-[1027px] top-[347px] absolute bg-blue-400/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-sky-600 overflow-hidden">
        <div className="left-[9px] top-[3px] absolute justify-start text-sky-600 text-xs font-normal font-['Inter']">Pending</div>
    </div>
    <div className="w-24 h-0 left-[936.50px] top-[204px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-sky-600" />
</div>
    )
}

export default CDefaultDash