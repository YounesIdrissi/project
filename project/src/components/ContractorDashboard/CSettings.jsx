import { useState, useEffect } from 'react'

/* service type selection */

function CSettings() {
    return (
    <div className="w-[1280px] h-[832px] relative bg-white overflow-hidden">
    <img className="w-14 h-14 left-[64px] top-[28px] absolute" src="https://placehold.co/55x57" />
    <div className="w-32 h-36 left-[584px] top-[187px] absolute">
        <img className="w-32 h-36 left-0 top-0 absolute" src="https://placehold.co/130x144" />
    </div>
    <div className="left-[265px] top-[427px] absolute justify-start text-black text-lg font-normal font-['Inter']">Name</div>
    <div className="left-[737px] top-[428px] absolute justify-start text-black text-lg font-normal font-['Inter']">Payment Methods</div>
    <div className="left-[265px] top-[499px] absolute justify-start text-black text-lg font-normal font-['Inter']">Email</div>
    <div className="left-[265px] top-[571px] absolute justify-start text-black text-lg font-normal font-['Inter']">Password</div>
    <div className="left-[265px] top-[645px] absolute justify-start text-black text-lg font-normal font-['Inter']">Phone number</div>
    <div className="left-[595px] top-[334px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">Member since<br/>August 2025</div>
    <div className="left-[171px] top-[88px] absolute justify-start text-black text-4xl font-normal font-['Inter']">Profile Settings</div>
    <div className="left-[426px] top-[428px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">Linda Oak</div>
    <div className="left-[960px] top-[430px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">VISA 1234</div>
    <div className="left-[737px] top-[458px] absolute text-center justify-start text-zinc-400 text-base font-normal font-['Inter']">Edit cards</div>
    <div className="left-[426px] top-[502px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">loak@gmail.com</div>
    <div className="left-[430px] top-[575px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">***********</div>
    <div className="left-[426px] top-[648px] absolute text-center justify-start text-black text-base font-normal font-['Inter']">215-456-7890</div>
    <div className="w-80 h-0 left-[265px] top-[473px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-80 h-0 left-[265px] top-[545px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-80 h-0 left-[265px] top-[619px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />
    <div className="w-[955px] h-[545px] left-[171px] top-[174px] absolute rounded-[20px] border border-zinc-300" />
    <div className="left-[976px] top-[648px] absolute justify-start text-orange-700 text-base font-normal font-['Inter']">Sign out</div>
</div>
    )
}

export default CSettings