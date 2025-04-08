import {  Mail, Phone, } from "lucide-react";
import React from "react";
export default function Header() {
    return (
        <header className=" flex justify-between items-center w-full h-[58px] p-4 bg-[#23856D] text-white">
        <div className="flex items-center space-x-2 justify-start">
            <Phone />
            <p>0 554 139 25 82</p>
            <Mail />
            <p>best.closet@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 justify-center">
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex items-center space-x-2 justify-end">
                <p>Follow us :</p>
             
            </div>
        </header>
    );
}