import CafeEdit from "../components/CafeEdit";

function CafeEditPage() {
  return (
    <div className="mx-3">
      <h1 className="bg-black text-white uppercase text-center text-3xl m-1 px-0.5 py-0.5 font-extrabold italic">
        Not correct? Edit it!
      </h1>
      <div className="flex justify-center">
        <CafeEdit />
      </div>
    </div>
  );
}

export default CafeEditPage;
