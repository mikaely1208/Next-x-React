// création d'un header qui contient notre navbar 
import React from 'react';
import Navbar from '../Navbar/navbar';
import './header.module.css';

export default function Header() {

    return (
        <>
        <header>
            <h1>TP React</h1>
            <Navbar/>
        </header>
        
        </>
    );
}