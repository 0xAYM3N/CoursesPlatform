import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Categories from "./components/Categories/Categories.jsx";
import TopCourses from "./components/TopCourses/TopCourses.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <TopCourses />
              <Footer />
            </>
          }
        />

        {/* <Route path="*" element={<NotFoundPage />} />  */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
