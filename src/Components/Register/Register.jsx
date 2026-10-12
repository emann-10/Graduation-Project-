import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import cssstyle from "../Register/Register.module.css";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setIsLoading(true);

            const { data } = await axios.post(
                "https://fakestoreapi.com/users",
                {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                }
            );

            console.log(data);

            toast.success("Registration Successful!");

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {
            toast.error("Registration Failed!");
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className={`container py-5 ${cssstyle.registerPage}`}>
            <Toaster position="top-right" />

            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className={`card shadow p-4 ${cssstyle.registerCard}`}>

                        <h2 className={`text-center mb-4 ${cssstyle.registerTitle}`}>
                            Create Account
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="username"
                                className={`form-control mb-3 ${cssstyle.registerInput}`}
                                placeholder="Username"
                                value={user.username}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                className={`form-control mb-3 ${cssstyle.registerInput}`}
                                placeholder="Email Address"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="password"
                                name="password"
                                className={`form-control mb-3 ${cssstyle.registerInput}`}
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                            />
                            <button
                                type="submit"
                                className={`btn btn-dark w-100 ${cssstyle.registerButton}`}
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Registering..."
                                    : "Create Account"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}