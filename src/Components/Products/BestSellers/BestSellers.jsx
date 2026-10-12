import cssstyle from "../BestSellers/BestSellers.module.css";
import fleurDeLune from "../../../assets/fleur-de-lune.webp";
import santalParchment from "../../../assets/santal-parchment.webp";
import noirCocoon from "../../../assets/noir-cocoon.webp";
import solDor from "../../../assets/sol-dor.webp";
import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { NavLink } from "react-router-dom";

export default function BestSellers() {
    const { addToCart, setShowCart } = useContext(AppContext);
    const products = [
        {
            id: 1,
            name: "Fleur de Lune",
            price: 195,
            image: fleurDeLune,
        },
        {
            id: 2,
            name: "Santal Parchment",
            price: 220,
            image: santalParchment,
        },
        {
            id: 3,
            name: "Noir Cocoon",
            price: 240,
            image: noirCocoon,
        },
        {
            id: 4,
            name: "Sol d'Or",
            price: 185,
            image: solDor,
        },
    ];
    return (
        <section className={cssstyle.bestSellers}>
            <div className="container">
                <div className={cssstyle.sectionHeader}>
                    <div>
                        <p className={cssstyle.subtitle}>
                            MOST LOVED
                        </p>
                        <h2 className={cssstyle.title}>
                            BEST SELLERS
                        </h2>
                    </div>
                    <NavLink to="products" className={cssstyle.viewAll}>
                        VIEW ALL PRODUCTS
                        <span>→</span>
                    </NavLink>
                </div>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-6 col-lg-3" key={product.id}>
                            <div className={cssstyle.productCard}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={cssstyle.productImage}
                                />
                                <div className={cssstyle.productInfo}>
                                    <div className={cssstyle.productHeading}>
                                        <h3>{product.name}</h3>
                                        <span>
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <p className={cssstyle.productSize}>
                                        50ml • Eau de Parfum
                                    </p>
                                    <button
                                        className={cssstyle.addToCart}
                                        onClick={() => {
                                            addToCart(product);
                                            setShowCart(true);
                                        }}
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}