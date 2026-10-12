import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import cssstyle from "../Footer/Footer.module.css";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
        setEmail("");
    };

    return (
        <footer className={cssstyle.footer}>
            <div className={cssstyle.footerContainer}>
                <div className={cssstyle.footerBrand}>
                    <h3 className={cssstyle.footerLogo}>ÉLORA</h3>
                    <p className={cssstyle.footerTagline}>THE ART OF FRAGRANCE</p>
                    <p className={cssstyle.footerText}>
                        Luxury perfumes crafted to tell your story. Discover
                        scents that stay with you long after you leave.
                    </p>
                    <div className={cssstyle.footerSocial}>
                        <a href="#" aria-label="#"><i className="bi bi-instagram"></i></a>
                        <a href="#" aria-label="#"><i className="bi bi-facebook"></i></a>
                        <a href="#" aria-label=""><i className="bi bi-tiktok"></i></a>
                        <a href="#" aria-label="#"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
                <div className={cssstyle.footerCol}>
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contacts">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={cssstyle.footerCol}>
                    <h4>CUSTOMER CARE</h4>
                    <ul>
                        <li><NavLink to="#">Shipping & Delivery</NavLink></li>
                        <li><NavLink to="#">Returns & Exchange</NavLink></li>
                        <li><NavLink to="#">FAQ</NavLink></li>
                        <li><NavLink to="#">Track Order</NavLink></li>
                    </ul>
                </div>

                <div className={cssstyle.footerCol}>
                    <h4>GET IN TOUCH</h4>
                    <ul className={cssstyle.footerContact}>
                        <li><i className="bi bi-envelope"></i> hello@elora.com</li>
                        <li><i className="bi bi-telephone"></i> +20 100 000 0000</li>
                    </ul>
                    <form className={cssstyle.newsletter} onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" aria-label="Subscribe">
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>
                    {subscribed && (
                        <p className={cssstyle.newsletterSuccess}>Thank you for subscribing!</p>
                    )}
                </div>
            </div>
            <div className={cssstyle.footerBottom}>
                <p>© 2026 ÉLORA. All rights reserved.</p>
                <div className={cssstyle.footerLegal}>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
}