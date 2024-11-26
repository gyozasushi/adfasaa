import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/navbar/netflix.png";
import Icons from "./icons/icons"; // Assuming your icons are in this directory

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const Navigations = [
        { label: "Home", path: "/" },
        { label: "Take Ur Cake", path: "/cake" },
        { label: "Message", path: "/message" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false); // Close the mobile menu when a link is clicked
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Netflix Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src={logo}
                            alt="Netflix Logo"
                            width={120}
                            height={60}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        {Navigations.map(({ path, label }) => (
                            <div key={label}>
                                <Link href={path} className="hover:text-red-500 px-3 py-2 text-md font-medium">
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center ">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <div className="space-y-1.5">
                                <span className="block w-6 h-0.5 rounded-md bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-[10rem] space-y-2 text-center h-[24rem]">
                        {Navigations.map(({ path, label }) => (
                            <div key={label}>
                                <Link
                                    href={path}
                                    onClick={handleLinkClick} // Close the menu on click
                                    className="block px-4 py-2 text-lg font-bold text-white hover:text-red-500"
                                >
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Icons and User Info for Mobile View */}
                {isMobileMenuOpen && (
                    <div className="md:hidden flex justify-between items-center space-x-4 mt-4 pb-[3rem]">
                        {/* Notification, Gift, Search Icons */}
                        <div className="flex items-center space-x-2">
                            <Icons.NotifIcon className="text-white" />
                            <Icons.GiftIcon className="text-white" />
                            <Icons.SearchIcon className="text-white" />
                        </div>
                        {/* User Info */}
                        <div>
                            <a href="https://www.instagram.com/adfasaaa/" className="text-white">Hii adfasaaa</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
