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
import BrandDetails3 from "./components/BrandDetails/BrandDetails3";
import Accounts from "./components/Accounts/Accounts";
import OrderNow from "./components/OrderNow/OrderNow";
import ListingAccordion from "./components/Listing Accordion/ListingAccordion";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import OrderStatus from "./components/OrderStatus/OrderStatus";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/brand-details" element={<BrandDetails1 />}></Route>
        <Route path="/brand-details2" element={<BrandDetails2 />}></Route>
        <Route path="/brand-details3" element={<BrandDetails3 />}></Route>
        <Route path="/accounts" element={<Accounts />}></Route>
        <Route path="/customer-support" element={<CustomerSupport />}></Route>
        <Route path="/order-now" element={<OrderNow />}></Route>
        <Route path="/order-status" element={<OrderStatus />}></Route>
        <Route path="/listing-accordion" element={<ListingAccordion/>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
