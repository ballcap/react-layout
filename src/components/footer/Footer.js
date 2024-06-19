import React from 'react';
import styles from './Footer.css';

export default function Footer() {
    return (
        <footer className="footer1">
            <div>
                <p>&copy; FancyFeast Studios 2024</p>
            </div>
            <div className="icons">
                <span className="material-symbols-outlined">done_outline</span>
                <span className="material-symbols-outlined">arrow_circle_down</span>
                <span className="material-symbols-outlined">favorite</span>
                <span className="material-symbols-outlined">delete</span>
            </div>
        </footer>
    );
}