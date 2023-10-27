import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Dashboard from "./components/Home/Dashboard";
import Footer from "./components/Footer/Footer";
import Brands from "./components/Brands/Brands";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
