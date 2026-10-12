import React, { useState } from "react";
import cssstyle from "./AllProducts.module.css";
import fleurDeLune from "../../assets/fleur-de-lune.webp";
import santalParchment from "../../assets/santal-parchment.webp";
import noirCocoon from "../../assets/noir-cocoon.webp";
import solDor from "../../assets/sol-dor.webp";
import perfume1 from "../../assets/perfume1.webp";
import roseAbsolute from "../../assets/rose-absolute.webp";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function AllProducts() {
    const { addToCart, setShowCart } = useContext(AppContext);
    const products = [
        {
            id: 1,
            name: "Fleur de Lune",
            price: 195,
            category: "Floral",
            description: "A luminous floral composition of jasmine.",
            image: fleurDeLune,
        },
        {
            id: 2,
            name: "Santal Parchment",
            price: 220,
            category: "Woody",
            description: "Warm sandalwood layered with cardamom.",
            image: santalParchment,
        },
        {
            id: 3,
            name: "Noir Cocoon",
            price: 240,
            category: "Oriental",
            description: "An oriental blend of tobacco and amber.",
            image: noirCocoon,
        },
        {
            id: 4,
            name: "Sol d'Or",
            price: 185,
            category: "Fresh",
            description: "A fresh coastal blend of bergamot.",
            image: solDor,
        },
        {
            id: 5,
            name: "Midnight Bloom",
            price: 210,
            category: "Floral",
            description: "A delicate fragrance with a floral heart.",
            image: perfume1,
        },
        {
            id: 6,
            name: "Rose Absolute",
            price: 230,
            category: "Floral",
            description: "An elegant rose fragrance with soft notes.",
            image: roseAbsolute,
        },
    ];
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const categories = ["All", "Floral", "Woody", "Oriental", "Fresh"];
    const filteredProducts = products
        .filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory =
                category === "All" || product.category === category;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            if (sort === "name") return a.name.localeCompare(b.name);
            return 0;
        });

    return (
        <div className={cssstyle.allProducts}>
            <section className={cssstyle.pageHeader}>
                <div className="container text-center">
                    <p className={cssstyle.eyebrow}>OUR COLLECTION</p>
                    <h1>All Fragrances</h1>
                    <p className={cssstyle.headerDescription + " mx-auto"}>
                        Discover your signature scent from our curated
                        collection of unique fragrances.
                    </p>
                </div>
            </section>

            <section className={cssstyle.productsSection}>
                <div className="container">
                    <div className={cssstyle.toolbar}>
                        <div className={cssstyle.searchBox}>
                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Search fragrances..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className={cssstyle.filterRow}>
                            <span className={cssstyle.filterLabel}>
                                FILTER BY:
                            </span>

                            <div className={cssstyle.filterButtons}>
                                {categories.map((item) => (
                                    <button
                                        key={item}
                                        className={
                                            category === item
                                                ? cssstyle.activeFilter
                                                : ""
                                        }
                                        onClick={() => setCategory(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* <div className={cssstyle.sortRow}>
                            <label htmlFor="sortProducts">SORT BY:</label>
                            <select
                                id="sortProducts"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="default">Featured</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                            </select>
                        </div> */}
                    </div>

                    <p className={cssstyle.resultsCount}>
                        SHOWING {filteredProducts.length} PRODUCTS
                    </p>

                    <div className="row g-4">
                        {filteredProducts.map((product) => (
                            <div
                                className="col-6 col-md-4 col-lg-3"
                                key={product.id}
                            >
                                <div className={cssstyle.productCard}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={cssstyle.productImage}
                                    />

                                    <div className={cssstyle.productInfo}>
                                        <div className={cssstyle.productTop}>
                                            <span className={cssstyle.category}>
                                                {product.category}
                                            </span>

                                            <span className={cssstyle.price}>
                                                ${product.price}
                                            </span>
                                        </div>

                                        <h2>{product.name}</h2>

                                        <p className={cssstyle.description}>
                                            {product.description}
                                        </p>

                                        <div className={cssstyle.productActions}>
                                            <button
                                                className={cssstyle.detailsButton}
                                                onClick={() =>
                                                    alert(
                                                        `${product.name}\n${product.description}\nPrice: $${product.price}`
                                                    )
                                                }
                                            >
                                                VIEW DETAILS
                                            </button>

                                            <button
                                                className={cssstyle.cartButton}
                                                onClick={() => {
                                                    addToCart(product);
                                                    setShowCart(true);
                                                }}
                                            >
                                                <i className="bi bi-bag"></i> ADD
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredProducts.length === 0 && (
                            <div className="col-12 text-center py-5">
                                <h3>No fragrances found</h3>
                                <p>Try another search or category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
