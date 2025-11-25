import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import APPROUTES from "./routes/routes";

function App() {
  return (
    <>
        <RouterProvider router={APPROUTES}></RouterProvider>
    </>
  );
}

export default App;
