import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/common/Footer";
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
