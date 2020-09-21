import React from 'react';
import '../styles/hero.css';
import AUTHOR_IMG from '../../static/author-image.png'

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Thank you for visiting my blog! <br />
                Please enjoy your stay <br />
            </h1>
            <div className="hero-author">
                <img src={AUTHOR_IMG} className="hero-author-image" alt="avatar" />
                <p className="hero-author-text">
                    Written by YouJ <br />
                    Student of UTokyo!
                </p>
            </div>
        </div>
    )
}