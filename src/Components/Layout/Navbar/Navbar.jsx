import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import cssstyle from "./Navbar.module.css";
import { AppContext } from "../../../Context/AppContext";

export default function Navbar() {
    const {
        cartItems,
        cartCount,
        cartTotal,
        removeFromCart,
        changeQuantity,
        showCart,
        setShowCart
    } = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={`navbar navbar-expand ${cssstyle.navbarStore}`}>
                <div className="container-fluid px-4 px-md-5">
                    <NavLink to="/" className={cssstyle.storeLogo}>ÉLORA</NavLink>
                    <div className={cssstyle.navLinksStore}>
                        <NavLink to="/" end className={({ isActive }) => `${cssstyle.navLinkStore} ${isActive ? cssstyle.active : ""}`}>
                            HOME
                        </NavLink>
                        <NavLink to="/products" className={({ isActive }) => `${cssstyle.navLinkStore} ${isActive ? cssstyle.active : ""}`}>
                            PRODUCTS
                        </NavLink>
                        <NavLink to="/contacts" className={({ isActive }) => `${cssstyle.navLinkStore} ${isActive ? cssstyle.active : ""}`}>
                            CONTACT
                        </NavLink>
                    </div>
                    <div className={cssstyle.navActions}>
                        <NavLink to="/products" className={cssstyle.navIconBtn} aria-label="Search" title="Search">
                            <i className="bi bi-search"></i>
                        </NavLink>

                        <button className={cssstyle.navIconBtn} aria-label="Shopping bag" onClick={() => setShowCart(true)} >
                            <i className="bi bi-bag"></i>
                            {cartCount > 0 && (
                                <span className={cssstyle.cartBadge}>
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <NavLink
                            to="/register"
                            className={`${cssstyle.navIconBtn} ${cssstyle.registerBtn}`}
                            aria-label="Register"
                            title="Register"
                        >
                            <i className="bi bi-person-circle"></i>
                        </NavLink>
                        <button
                            className={cssstyle.menuToggle}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <div
                    className={cssstyle.menuOverlay}
                    onClick={() => setMenuOpen(false)}>
                    <div
                        className={cssstyle.sideMenu}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={cssstyle.sideMenuHeader}>
                            <h5>MENU</h5>
                            <button
                                className={cssstyle.closeMenu}
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className={cssstyle.sideMenuLinks}>
                            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                                HOME
                            </NavLink>
                            <NavLink to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</NavLink>
                            <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
                            <NavLink to="/register" onClick={() => setMenuOpen(false)}>REGISTER</NavLink>
                        </div>
                    </div>
                </div>
            )}
            {showCart && (
                <div
                    className={cssstyle.cartOverlay}
                    onClick={() => setShowCart(false)}>
                    <div
                        className={cssstyle.cartDrawer}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={cssstyle.cartHeader}>
                            <h5>Shopping Cart <span>{cartCount} items</span></h5>
                            <button
                                className={cssstyle.closeCart}
                                onClick={() => setShowCart(false)}
                                aria-label="Close cart">
                                <i className="bi bi-x-circle-fill"></i>
                            </button>
                        </div>

                        <div className={cssstyle.cartBody}>
                            {cartItems.length === 0 ? (
                                <p>Your cart is Empty</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className={cssstyle.cartItem}>
                                        <img src={item.image} alt={item.name} />
                                        <div className={cssstyle.cartItemInfo}>
                                            <h6>{item.name}</h6>
                                            <p>${item.price.toFixed(2)} each</p>

                                            <div className={cssstyle.quantityControls}>
                                                <button onClick={() =>
                                                    changeQuantity(item.id, -1)
                                                }>
                                                    -
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button onClick={() =>
                                                    changeQuantity(item.id, 1)
                                                }>
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className={cssstyle.cartItemRight}>
                                            <strong>
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </strong>

                                            <button
                                                className={cssstyle.removeItem}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className={cssstyle.cartFooter}>
                            <div className={cssstyle.total}>
                                <strong>Total Price</strong>
                                <strong>${cartTotal.toFixed(2)}</strong>
                            </div>

                            <button
                                className={cssstyle.continueShopping}
                                onClick={() => setShowCart(false)}
                            >
                                CONTINUE SHOPPING
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
