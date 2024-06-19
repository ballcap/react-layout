import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <div><a href="/">Home</a></div>
            <div><a href="/link">Link</a></div>
            <div><a href="/portfolio">Portfolio</a></div>
            <div><a href="/blog">Blog</a></div>
            <div><a href="/products">Products</a></div>
            <div><a href="/about">About</a></div>
            <div><a href="/contact">Contact</a></div>
            <div><a href="/info">Information</a></div>
        </nav>
    );
}