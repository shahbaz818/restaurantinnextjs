"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Reserve = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log("Button clicked!"); // Debugging log
        router.push('/BookTable');
    };

    return (
        <button onClick={handleClick}>BOOK A TABLE</button>
    );
};

export default Reserve;
