import CafeAdd from "../components/CafeAdd";

function CafeAddPage() {
  return (
    <div className="mx-3">
      <h1 className="bg-black text-white uppercase text-center text-3xl m-1 px-0.5 py-0.5 font-extrabold italic">
        Add a Cafe to your list
      </h1>
      <div className="flex justify-center">
        <CafeAdd />
      </div>
    </div>
  );
}

export default CafeAddPage;
