import CafeList from "../components/CafeList";
import { useNavigate } from "react-router-dom";

function CafeListPage() {
  const storedToken = localStorage.getItem("authToken");
  const isLoggedIn = storedToken !== null;
  const navigate = useNavigate();

  return (
    <>
      <div className="m-3">
        <h1 className="bg-black text-white uppercase text-center text-3xl m-1 px-0.5 py-0.5 font-extrabold italic">
          Your Cafes
        </h1>
        {/* {isLoggedIn === true ? (
          <>
            <button onClick={() => navigate(`/cafes/add`)}>Add Café</button>
          </>
        ) : null} */}
        <CafeList className="m-10" />
      </div>
    </>
  );
}

export default CafeListPage;
