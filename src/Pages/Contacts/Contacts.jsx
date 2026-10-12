import { useState } from "react";
import cssstyle from "./Contacts.module.css";
import perfumeImage from "../../assets/logoo.png";

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [sent, setSent] = useState(false);
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setSent(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSent(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }
    return (
        <main className={cssstyle.contactPage}>
            <div className={cssstyle.pageHeader}>
                <div className={cssstyle.eyebrow}>
                    <span></span>
                    CONTACT US
                    <span></span>
                </div>

                <h1>GET IN TOUCH</h1>

                <p>
                    We'd love to hear from you. Let us help you
                    find your signature scent.
                </p>
            </div>

            <div className={cssstyle.contactContainer}>
                <section className={cssstyle.formCard}>
                    <h2>SEND US A MESSAGE</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={cssstyle.inputGroup}>
                            <i className="bi bi-person"></i>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cssstyle.inputGroup}>
                            <i className="bi bi-envelope"></i>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={cssstyle.inputGroup}>
                            <i className="bi bi-list-ul"></i>

                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Subject
                                </option>
                                <option value="Order Inquiry">
                                    Order Inquiry
                                </option>
                                <option value="Product Inquiry">
                                    Product Inquiry
                                </option>
                                <option value="Returns">
                                    Returns & Exchanges
                                </option>
                                <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>
                        <div
                            className={`${cssstyle.inputGroup} ${cssstyle.messageGroup}`}
                        >
                            <i className="bi bi-chat"></i>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={cssstyle.submitBtn}
                        >
                            SEND MESSAGE
                            <i className="bi bi-arrow-right"></i>
                        </button>

                        {sent && (
                            <p className={cssstyle.successMessage}>
                                Thank you for contacting ÉLORA!
                                Your message has been received.
                            </p>
                        )}
                    </form>
                </section>
                <section className={cssstyle.imageCard}>
                    <img
                        src={perfumeImage}
                        alt="ÉLORA luxury perfume"
                    />
                </section>
            </div>
        </main>
    );
}
