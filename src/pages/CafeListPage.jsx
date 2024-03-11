import CafeList from "../components/CafeList";
import { useNavigate } from "react-router-dom";

function CafeListPage() {
  const storedToken = localStorage.getItem("authToken");
  const isLoggedIn = storedToken !== null;
  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn === true ? (
        <>
          <button onClick={() => navigate(`/cafes/add`)}>Add Café</button>
        </>
      ) : null}
      <CafeList />
    </>
  );
}

export default CafeListPage;
