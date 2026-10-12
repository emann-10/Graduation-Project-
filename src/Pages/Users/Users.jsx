import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function getUsers() {
        try {
            setIsLoading(true);
            setError("");

            const { data } = await axios.get(
                "https://fakestoreapi.com/users"
            );

            setUsers(data);
        } catch (err) {
            setError("Failed to load users!");
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Users</h2>

            {isLoading && (
                <p className="text-center">Loading users...</p>
            )}

            {error && (
                <p className="alert alert-danger text-center">
                    {error}
                </p>
            )}

            <div className="row g-4">
                {users.map((user) => (
                    <div
                        className="col-12 col-md-6 col-lg-4"
                        key={user.id}
                    >
                        <div className="card shadow p-3 h-100">
                            <h5>
                                {user.name.firstname} {user.name.lastname}
                            </h5>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
