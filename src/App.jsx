import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import RootLayout from "./layout/RootLayout";
import Gallery from "./Components/Gallery/Gallery";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import NotFound from "./Components/NotFound";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
