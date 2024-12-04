"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export enum navbarStates { SOLID = "bg-white", TRANSPARENT = "bg-transparent", INVISIBLE = "hidden"};

export default function NavBar() {
    const [ navbarState, setNavbarState ] = useState<navbarStates>(navbarStates.TRANSPARENT);

    const onScroll = () => {
        var scroll = window.scrollY;
        let newNavbarState;

        if (scroll > 0) {
            if (scroll < 300) {
                newNavbarState = navbarStates.SOLID;
            } else {
                newNavbarState = navbarStates.INVISIBLE;
            }
        } else {
            newNavbarState = navbarStates.TRANSPARENT;
        }
        setNavbarState(newNavbarState);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`sticky top-0 w-screen px-20 py-3 flex justify-between ${navbarState} transition-all`}>
            <select name="languageSelect" id="languageSelect" defaultValue="pt-br" className="bg-white px-4 py-3 w-32 border border-black">
                <option value="pt-br">PT</option>
                <option value="en-us">EN</option>
            </select>
            <div className="flex gap-2 items-center">
                <div className="w-5 h-5 relative">
                <Image src="/logo_arrow.svg" alt="Logo Impulse BPO" fill/>
                </div>
                <h1 className="font-questrial text-xl tracking-widest">impulse</h1>
            </div>

            <div className="flex gap-3 items-center">
                <Link href={""} className="text-sm">LinkedIn</Link>
                <Link href={""} className="text-sm">Instagram</Link>
                <Link href={""} className="text-sm">Facebook</Link>
            </div>
        </nav>
    );
}