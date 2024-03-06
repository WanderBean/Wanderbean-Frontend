import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.ORIGIN;

const DEFAULT_CAFE_FORM_VALUES = {
  title: "",
  image: "",
  description: "",
  location: [], //nicht sicher ob es ein array ist
  specs: [],
};

function CafeAddPage() {
  const [cafe, setCafe] = useState({ ...DEFAULT_CAFE_FORM_VALUES });
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { ...cafe };

    setSubmit(true);

    axios
      .post(`${API_URL}/api/cafes`, requestBody)
      .then(() => {
        setCafe({ ...DEFAULT_CAFE_FORM_VALUES });
        setSubmit(false);
        callback();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setCafe({ ...DEFAULT_CAFE_FORM_VALUES }); //<==== Weitermachen
  }, []);

  return (
    <>
      <h1>I am a Cafe Add Page</h1>
    </>
  );
}

export default CafeAddPage;
