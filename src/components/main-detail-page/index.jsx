import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCode } from "../../services";

export const MainCountryDetail = () => {
  const [dataCountry, setDataCountry] = useState();
  const { code } = useParams();

  //=====set data country=====
  useEffect(() => {
    const fetchDataCountry = async () => {
      const apiData = await getCountryByCode(code);
      setDataCountry(apiData);
    };
    fetchDataCountry();
  }, [code]);

  console.log("code", code);
  console.log("DataCountry", dataCountry);

  return (
    <main>
      <h1>{code}</h1>
    </main>
  );
};
