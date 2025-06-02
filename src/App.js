import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Banner from "./components/banner/Banner";
import About from "./pages/About/About.js";
import Contact from "./pages/contact/Contact.js";
import Courses from "./pages/courses/Courses.js";
import EnquiryForm from "./pages/enquiry/Enquiry.js";

function App() {
  return (
    <div className="App">
      <div className="">
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<EnquiryForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
