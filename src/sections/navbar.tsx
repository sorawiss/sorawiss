'use client'
import { useEffect, useState } from "react";


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-primary">
                        sorawiss
                    </a>

                    {/* Hamburger Menu Icon - Consider using an SVG icon library */}
                    <button
                        aria-label="Toggle menu"
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-primary text-2xl" // Style the button
                        onClick={() => setMenuOpen((prev: boolean) => !prev)}
                    >
                        &#9776;
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-primary hover:opacity-50 transition-opacity duration-300 "
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-primary hover:opacity-50 transition-opacity duration-300 "
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-primary hover:opacity-50 transition-opacity duration-300 "
                        >
                            Works
                        </a>
                        <a
                            href="#design"
                            className="text-primary hover:opacity-50 transition-opacity duration-300 "
                        >
                            Personal Projects
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};
