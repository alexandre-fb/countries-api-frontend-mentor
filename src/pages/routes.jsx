import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { CountryDetail } from "./country-detail";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:code" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
