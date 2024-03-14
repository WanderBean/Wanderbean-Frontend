import { Link } from "react-router-dom";
import github from "../img/github-logo.png";
import coffeeMaking from "../img/coffee-making.jpg";

function AboutPage() {
  return (
    <div>
      <div className="mx-3">
        <h1 className="bg-black text-white uppercase text-center text-3xl m-1 px-0.5 py-0.5 font-extrabold italic">
          The Story behind.
        </h1>
      </div>

      <div className="flex flex-wrap mt-10">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl uppercase font-bold italic py-7">
            Two Coffee Lovers. Two Cities.
            <br />
            One Place to find the Best Coffee.
          </h2>
          <p>
            When it comes to coffee, we are serious. Especially during Ironhack
            bootcamp as coffeine turned out to be an elixir of survival.{" "}
          </p>
          <p>
            This web app should be a collection of the best coffee places around
            the world - sharing experiences with friends and like-minded
            coffeine addicts.
          </p>
          <br />
          <p>
            How it works: Add a new cafe to a city, give details what makes them
            special and share your personal experience in a review.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full mx-auto"
            src={coffeeMaking}
            alt="Coffee making"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full md:w-1/2 p-10 bg-black">
          <h2 className="text-3xl text-white white uppercase font-bold italic py-10">
            The Coffee Lovers behind.
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <p className="pt-10">Find uns on Github! Simona & Ari.</p>
          <Link to="https://github.com/WanderBean">
            <img className="max-h-6" src={github} alt="Coffee making" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
