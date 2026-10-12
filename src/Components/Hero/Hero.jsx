import React, { useState, useEffect } from "react";
import cssstyle from '../Hero/Hero.module.css'
import solDor from "../../assets/sol-dor.webp";
import noirCocoon from "../../assets/noir-cocoon.webp";
import santalParchment from "../../assets/santal-parchment.webp";
import { NavLink } from "react-router-dom";

export default function Hero() {
    const slides = [
        {
            image: solDor,
            subtitle: "PURE-EXTRACTIONS",
            title: "BREATHE IN THE HORIZON.",
            description:
                "A fresh coastal blend of sun-drenched bergamot and sea salt — invigorating from the very first note.",
            button: "DISCOVER THE COLLECTION",
        },
        {
            image: noirCocoon,
            subtitle: "PRIVATE RESERVE",
            title: "MYSTERY IN EVERY DROP.",
            description:
                "An oriental blend of tobacco blossom, dark cacao, and golden amber — opulent and unforgettable.",
            button: "EXPLORE THE RESERVE",
        },
        {
            image: santalParchment,
            subtitle: "ATELIER OILS",
            title: "WARMTH THAT LINGERS.",
            description:
                "Warm sandalwood layered with cardamom and iris — a grounding accord for the discerning.",
            button: "EXPLORE WOODY ACCORDS",
        },
    ];
    const [activeSlide, setActiveSlide] = useState(0);
    function nextSlide() {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    }
    function prevSlide() {
        setActiveSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[activeSlide];

    return (
        <section className={cssstyle.heroSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={cssstyle.heroImageWrapper}>
                            <img
                                key={currentSlide.image}
                                src={currentSlide.image}
                                alt={currentSlide.subtitle}
                                className={cssstyle.heroImage}
                            />
                            <button
                                className={`${cssstyle.heroArrow} ${cssstyle.heroPrev}`}
                                onClick={prevSlide}
                                aria-label="Previous slide"
                            >
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <button
                                className={`${cssstyle.heroArrow} ${cssstyle.heroNext}`}
                                onClick={nextSlide}
                                aria-label="Next slide"
                            >
                                <i className="bi bi-arrow-right"></i>
                            </button>

                            <div className={cssstyle.heroCounter}>
                                {activeSlide + 1} / {slides.length}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className={cssstyle.heroContent}
                            key={currentSlide.subtitle}
                        >
                            <p className={cssstyle.heroSubtitle}>
                                {currentSlide.subtitle}
                            </p>
                            <h1 className={cssstyle.heroTitle}>
                                {currentSlide.title}
                            </h1>
                            <p className={cssstyle.heroDescription}>
                                {currentSlide.description}
                            </p>
                            <NavLink
                                to="/products"
                                className={cssstyle.heroBtn}
                            >
                                {currentSlide.button}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}