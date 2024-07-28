import React from 'react';
import {Intro} from "../screens/Intro";
import {Pricing} from "../screens/Pricing";
import {Advantages} from "../screens/Advantages";
import {Contact} from "../screens/Contact";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Main = () => {
    return (
        <div className = "flex flex-col min-h-dvh justify-center" >
            <Header/>
            <main className="flex-1">
                <Intro />
                <Advantages />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};