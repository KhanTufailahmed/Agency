import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

const APPROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path:"/projects",
    element:<Projects></Projects>
  },
  {
    path:"/services",
    element:<Services></Services>
  }
]);
export default APPROUTES;
