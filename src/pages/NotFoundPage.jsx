import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <div>
                <h1 className="text-5xl p-10 flex justify-center">
                    Meow, we ran out of coffeine!</h1>
                <p className="text-3xl p-10 flex justify-center">Please make your way back and discover another beautiful café.</p>
                <Link to="/cafes" className="flex justify-center bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-black-200 shadow">
                    Explore all Cafés
                </Link>
            </div>
        </>
    )
}

export default NotFoundPage;