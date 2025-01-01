
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LiveStream from "./pages/LiveStream";
import Pooja from "./pages/Pooja";
import Donation from "./pages/Donation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-stream" element={<LiveStream/>}/>
        <Route path="/pooja" element={<Pooja/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
