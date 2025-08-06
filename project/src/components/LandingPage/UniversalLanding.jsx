import { useState, useEffect } from 'react'

/* service type selection */

function UniversalLanding() {
    return (
    <div className="w-[1280px] h-[4553px] relative bg-white overflow-hidden">
    <div className="w-[1286px] h-32 left-[-6px] top-[4419px] absolute bg-sky-600 rounded-2xl overflow-hidden">
        <div className="left-[1159px] top-[107px] absolute justify-start text-white text-xs font-normal font-['Inter']">© Team Jey 2025</div>
    </div>
    <div className="w-[1280px] h-[724px] left-[-6px] top-[3712px] absolute overflow-hidden">
        <div className="w-[1280px] h-44 left-0 top-[423px] absolute outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
            <div className="left-[1234px] top-[17px] absolute justify-start text-black text-3xl font-normal font-['Inter']">^</div>
            <div className="left-[71px] top-0 absolute justify-start text-black text-3xl font-normal font-['Inter'] leading-[60px]">What types of jobs do contractors offer</div>
        </div>
        <div className="w-[1146px] left-[70px] top-[494px] absolute justify-start text-black text-lg font-normal font-['Inter'] leading-loose">Contractors offer a wide range of services, with jobs spanning from skilled trades like plumbing and electrical work to professional services like project management and design. They can be found in various industries, including construction, IT, and healthcare, often hired for specific projects or tasks. (according to Google)</div>
        <div className="w-[1280px] h-16 left-0 top-[360px] absolute outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
            <div className="left-[1249px] top-[44px] absolute origin-top-left -rotate-180 justify-start text-black text-3xl font-normal font-['Inter']">^</div>
        </div>
        <div className="w-[1280px] h-16 left-0 top-[298px] absolute outline outline-1 outline-offset-[-1px] outline-neutral-900 overflow-hidden">
            <div className="left-[1249px] top-[41px] absolute origin-top-left -rotate-180 justify-start text-black text-3xl font-normal font-['Inter']">^</div>
        </div>
        <div className="w-[1280px] h-14 left-0 top-[241px] absolute outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
            <div className="left-[1249px] top-[41px] absolute origin-top-left -rotate-180 justify-start text-black text-3xl font-normal font-['Inter']">^</div>
            <div className="left-[70px] top-[-63px] absolute justify-start text-black text-3xl font-normal font-['Inter'] leading-[60px]"><br/>Do homeowners have to pay to use the platform?</div>
        </div>
        <div className="w-[1280px] h-14 left-0 top-[183px] absolute outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
            <div className="left-[1249px] top-[41px] absolute origin-top-left -rotate-180 justify-start text-black text-3xl font-normal font-['Inter']">^</div>
            <div className="w-[743px] h-16 left-[70px] top-0 absolute justify-start text-black text-3xl font-normal font-['Inter'] leading-[60px]">How does Job Berry verify contractors?</div>
        </div>
        <div className="left-[70px] top-[59px] absolute justify-start text-black text-6xl font-normal font-['Inter']">FAQ (Frequently Asked Questions) </div>
    </div>
    <div className="w-[1280px] h-[686px] left-[-4px] top-[2969px] absolute overflow-hidden">
        <div className="w-80 h-44 left-[92px] top-[319px] absolute overflow-hidden">
            <div className="left-[28px] top-[17px] absolute justify-start text-black text-4xl font-normal font-['Inter']">For Contractors</div>
            <div className="w-72 left-[28px] top-[83px] absolute justify-start text-black text-xl font-normal font-['Inter']">Join a network trusted by real clients and stop paying for empty leads</div>
        </div>
        <div className="w-96 h-36 left-[797px] top-[325px] absolute overflow-hidden">
            <div className="left-[29px] top-[6px] absolute justify-start text-black text-4xl font-normal font-['Inter']">For Homeowners</div>
            <div className="w-80 left-[29px] top-[73px] absolute justify-start text-black text-xl font-normal font-['Inter']">Find a verified contractor you can trust in minutes with full transparency.</div>
        </div>
        <div className="left-[264px] top-[172px] absolute justify-start text-black text-6xl font-normal font-['Inter']">Let’s Get You Connected.</div>
        <img className="w-80 h-40 left-[468.73px] top-[338.57px] absolute origin-top-left rotate-[-13.78deg] opacity-10" src="https://placehold.co/315x161" />
        <div className="w-36 h-11 left-[535px] top-[469px] absolute bg-sky-600 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white overflow-hidden">
            <div className="left-[31px] top-[8px] absolute justify-start text-white text-2xl font-normal font-['Inter']">Sign Up</div>
        </div>
    </div>
    <div className="w-[1280px] h-[521px] left-[-4px] top-[2451px] absolute bg-white overflow-hidden">
        <img className="w-[1284px] h-[521px] left-0 top-0 absolute" src="https://placehold.co/1284x521" />
        <div className="w-96 left-[85px] top-[124px] absolute justify-start text-white text-3xl font-normal font-['Inter']">Job Berry is the only contractor platform that guarantees leads, protects payments, and helps both contractors and homeowners build trust. </div>
        <div className="w-[471px] left-[730px] top-[124px] absolute text-right justify-start text-white text-3xl font-normal font-['Inter']">No hidden fees, wasted time, or marketing gimmicks. </div>
    </div>
    <div className="w-[1280px] h-[635px] left-[-4px] top-[1823px] absolute overflow-hidden">
        <div className="w-96 left-[798px] top-[66px] absolute text-right justify-start text-black text-3xl font-normal font-['Inter']">“I used to spend $300 a month on bad leads. Now I only pay when someone actually books me.”<br/>— Sean R., Carpenter, NY</div>
        <div className="w-96 left-[69px] top-[273px] absolute justify-start text-black text-3xl font-normal font-['Inter']">“I was nervous to hire someone online. Job Berry showed me reviews, photos, and gave me peace of mind.”     — Lisa T., Homeowner, NJ</div>
        <img className="w-80 h-96 left-[120px] top-[191px] absolute opacity-10" src="https://placehold.co/345x359" />
        <img className="w-80 h-96 left-[820px] top-[-16px] absolute opacity-10" src="https://placehold.co/345x359" />
    </div>
    <div className="w-[1280px] h-[582px] left-[-4px] top-[1237px] absolute overflow-hidden">
        <div className="left-[70px] top-[77px] absolute justify-start text-black text-6xl font-normal font-['Inter']">Why Job Berry Works Better for Everyone</div>
        <div className="w-96 h-80 left-[28px] top-[190px] absolute overflow-hidden">
            <div className="w-24 h-24 left-[168px] top-[29px] absolute overflow-hidden">
                <img className="w-24 h-24 left-0 top-0 absolute" src="https://placehold.co/96x96" />
            </div>
            <div className="left-[47px] top-[174px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Only pay for real leads</div>
            <div className="w-80 left-[47px] top-[230px] absolute justify-start text-black text-xl font-normal font-['Inter']">Homeowners only pay for verified<br/>contractors, no wasted fees</div>
        </div>
        <div className="w-96 h-80 left-[887px] top-[197px] absolute overflow-hidden">
            <div className="w-24 h-24 left-[131px] top-[23px] absolute overflow-hidden">
                <div className="w-24 h-24 left-0 top-0 absolute" />
                <div className="w-20 h-20 left-[8px] top-[8px] absolute bg-lime-600" />
                <div className="w-6 h-9 left-[44px] top-[28px] absolute bg-lime-600" />
            </div>
            <div className="w-80 left-[20px] top-[223px] absolute justify-start text-black text-xl font-normal font-['Inter']">Message and schedule directly through the platform </div>
            <div className="left-[47px] top-[167px] absolute justify-start text-black text-3xl font-normal font-['Inter']">On your own time</div>
        </div>
        <div className="w-96 h-80 left-[470px] top-[188px] absolute overflow-hidden">
            <div className="w-24 h-24 left-[130px] top-[31px] absolute overflow-hidden">
                <div className="w-24 h-24 left-0 top-0 absolute" />
                <div className="w-4 h-4 left-[40px] top-[8px] absolute bg-lime-600" />
                <div className="w-16 h-20 left-[16px] top-[8px] absolute bg-lime-600" />
            </div>
            <div className="w-80 left-[36px] top-[231px] absolute justify-start text-black text-xl font-normal font-['Inter']">Background checks, reviews, and<br/>job portfolios help homeowners</div>
            <div className="left-[36px] top-[175px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Quality contractors</div>
        </div>
        <div className="w-[1280.45px] h-0 left-0 top-[586px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
    </div>
    <div className="w-[1280px] h-[589px] left-0 top-[12px] absolute overflow-hidden">
        <div className="w-[1280px] h-[589px] left-0 top-0 absolute bg-white" />
        <div className="w-[559px] h-[589px] left-[721px] top-0 absolute bg-white" />
        <div className="w-[726px] h-80 left-0 top-[149px] absolute overflow-hidden">
            <div className="w-[640px] left-[52px] top-[42px] absolute justify-start text-black text-5xl font-normal font-['Inter']">We provide home service jobs to those who want to do the job</div>
            <div className="w-36 h-11 left-[48px] top-[250px] absolute bg-sky-600 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white overflow-hidden">
                <div className="left-[31px] top-[8px] absolute justify-start text-white text-2xl font-normal font-['Inter']">Sign Up</div>
            </div>
        </div>
        <img className="w-[573px] h-[600px] left-[707px] top-[-11px] absolute rounded-2xl" src="https://placehold.co/573x600" />
    </div>
    <div className="w-44 h-32 left-[10px] top-[18px] absolute bg-white overflow-hidden">
        <div className="w-44 h-9 left-0 top-[93.99px] absolute bg-white" />
        <img className="w-24 h-2 left-[49.45px] top-[75.12px] absolute" src="https://placehold.co/90x8" />
        <img className="w-44 h-24 left-0 top-0 absolute" src="https://placehold.co/171x95" />
        <img className="w-16 h-9 left-[26.24px] top-[94.01px] absolute" src="https://placehold.co/71x37" />
        <img className="w-14 h-[5.14px] left-[80.01px] top-[125.67px] absolute" src="https://placehold.co/60x5" />
        <img className="w-7 h-8 left-[91.18px] top-[96.89px] absolute" src="https://placehold.co/30x31" />
        <img className="w-7 h-8 left-[109.66px] top-[97.01px] absolute" src="https://placehold.co/28x31" />
        <img className="w-6 h-9 left-[89.46px] top-[94.18px] absolute" src="https://placehold.co/24x37" />
    </div>
    <div className="w-[1280px] h-[648px] left-0 top-[589px] absolute overflow-hidden">
        <div className="left-[495px] top-[71px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Our Services</div>
        <div className="w-24 h-24 left-[951px] top-[213px] absolute overflow-hidden">
            <div className="w-24 h-24 left-0 top-0 absolute" />
            <div className="w-16 h-20 left-[12.44px] top-[6px] absolute bg-black" />
        </div>
        <div className="w-24 h-24 left-[582px] top-[213px] absolute overflow-hidden">
            <div className="w-24 h-24 left-0 top-0 absolute" />
            <div className="w-9 h-7 left-[46px] top-[8.90px] absolute bg-black" />
            <div className="w-5 h-5 left-[20.19px] top-[36.68px] absolute bg-black" />
            <div className="w-14 h-16 left-[15.38px] top-[22.19px] absolute bg-black" />
        </div>
        <div className="w-24 h-24 left-[578px] top-[420px] absolute overflow-hidden">
            <div className="w-24 h-24 left-0 top-0 absolute" />
            <div className="w-16 h-20 left-[12px] top-[4px] absolute bg-black" />
        </div>
        <div className="w-24 h-24 left-[197px] top-[213px] absolute overflow-hidden">
            <div className="w-20 h-20 left-[3px] top-[4px] absolute bg-black" />
        </div>
        <div className="w-24 h-24 left-[162px] top-[504px] absolute overflow-hidden">
            <div className="w-24 h-24 left-0 top-0 absolute" />
        </div>
        <div className="w-14 h-14 left-[979px] top-[436px] absolute bg-black" />
        <div className="w-9 h-9 left-[1024.07px] top-[480px] absolute bg-black" />
        <div className="left-[174px] top-[324px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Electrical</div>
        <div className="left-[184px] top-[533px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Painting</div>
        <div className="left-[564px] top-[533px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Cleaning</div>
        <div className="left-[917px] top-[533px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Miscellaneous</div>
        <div className="left-[565px] top-[324px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Plumbing</div>
        <div className="left-[930px] top-[324px] absolute justify-start text-black text-3xl font-normal font-['Inter']">Carpentry</div>
    </div>
    <div className="w-32 h-11 left-[1140px] top-[21px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-white overflow-hidden">
        <div className="left-[27px] top-[8px] absolute justify-start text-white text-2xl font-normal font-['Inter']">Log in</div>
    </div>
</div>
    )
}

export default UniversalLanding