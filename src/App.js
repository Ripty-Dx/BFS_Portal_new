import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Dashboard from "./components/Home/Dashboard";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <Footer/>
    </>
  );
}

export default App;
