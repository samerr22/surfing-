import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyfinancialPrivateRoute from "./components/OnlyfinancialPrivateRoute";
import Crt from "./pages/Createpaysheet";
import Tab from "./pages/Table";
import Update from "./pages/Update";
import SupplierAdd from "./pages/supplierAdd";
import Supupdate from "./pages/Supdate";
import Order from "./pages/order";

export default function App() {
  return (
    <BrowserRouter>
     
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
        <Route path="/table" element={<Tab />} />
        <Route path="/add" element={<SupplierAdd/>} />
        <Route path="/update/:upId" element={<Supupdate/>} />
        <Route path="/order" element={<Order/>} />
        </Route>

        <Route element={<OnlyfinancialPrivateRoute />}>
          <Route path="/crt" element={<Crt />} />
          
          <Route path="/update/:PayId" element={<Update />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
