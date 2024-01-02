import React from 'react';
import './navbar.module.css';
export default function Navbar() {
    return (
        <nav>
           
                {/*Normalement c'est ça mais on utilise pas Dom donc je commente pour mettre des trucs qui marchent
                 <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/contact">Contact</a> */}
                <a href="https://fr.wiktionary.org/wiki/home">Home </a>
                <a href="https://dictionary.cambridge.org/fr/dictionnaire/anglais-francais/about">About </a>
                <a href="https://www.allocine.fr/film/fichefilm_gen_cfilm=15753.html">Contact</a>
            
        </nav>
    );
}