import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Dashboard from "./components/Home/Dashboard";
import Footer from "./components/Footer/Footer";
import Brands from "./components/Brands/Brands";
import { Route, Routes } from "react-router-dom";
import BrandDetails1 from "./components/BrandDetails/BrandDetails1";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import BrandDetails2 from "./components/BrandDetails/BrandDetails2";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/brand-details" element={<BrandDetails1 />}></Route>
        <Route path="/brand-details2" element={<BrandDetails2 />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
