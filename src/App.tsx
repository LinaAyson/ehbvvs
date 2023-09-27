import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="karriar" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}