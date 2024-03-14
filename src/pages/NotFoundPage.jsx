import React from "react";
import { Link, useNavigate } from "react-router-dom";
import coffeeCups from "../img/empty-coffee-cups.jpg";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="ml-3">
                <h1 className="bg-black text-white uppercase text-center text-3xl m-1 px-0.5 py-0.5 font-extrabold italic">
                    Oooops. Something went wrong.
                </h1>
            </div>

            <div className="flex flex-wrap mt-10">
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl uppercase font-bold italic py-7">
                        Ran out of coffeine?
                        <br />
                        We got You!
                    </h2>
                    <p className="pb-10">
                        Don't worry, there are still thousands of happy coffee beans waiting for you. Time to find your new favorite coffee shop!
                    </p>
                    <button
                        className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-12 border border-black-200 shadow"
                        onClick={() => navigate(`/cafes`)}
                    > Discover all Cafés
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        className="mh-auto"
                        src={coffeeCups}
                        alt="Empty coffee cups"
                    />
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;