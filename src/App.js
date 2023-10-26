import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/js/bootstrap";
// import Dashboard from "./components/Home/Dashboard";
import Footer from "./components/Footer/Footer";
import Brands from "./components/Brands/Brands";
function App() {
  return (
    <>
      <Header />
      {/* <Dashboard/> */}
      <Brands />
      <Footer />
    </>
  );
}

export default App;
