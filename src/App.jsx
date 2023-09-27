import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="tjanster" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
