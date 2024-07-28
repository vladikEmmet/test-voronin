import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Logo} from "./UI/Logo";

export const Header = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link to="/" className="flex items-center justify-center">
                <Logo className="size-6"/>
                <span className="sr-only">Transcribe</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
                    Features
                </Link>
                <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
                    Pricing
                </Link>
                <Link to="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                </Link>
            </nav>
        </header>
    );
};