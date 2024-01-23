'use client';

import React from 'react';
import { Person, PersonCircle } from "react-bootstrap-icons";

const buttonStyle = `
    fixed
    top-0
    left-0
    p-4
    bg-gray-800
`;

const imageStyle = `
    flex-initial
    w-[80px]
    border-none
`;

const GoldElephantButton = ({}) => {
    return <button
        className={buttonStyle}
        onClick={()=>null}
    >
        <img src={"/buddha-elephant.png"} className={`${imageStyle} w-[80px]`} alt={"Golden Elephant"} />
    </button>;
};

const sidebarBaseStyle = `
    bg-gray-800
    fixed
    top-0
    left-0
    h-full
    w-64
    shadow-md
    transform
    transition-transform
    duration-300
`;

export const SideBar = ({}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const toggleShowMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return <>
        <GoldElephantButton />
        <aside className={`${sidebarBaseStyle} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <Person />
            <PersonCircle />
        </aside>
    </>;
};
