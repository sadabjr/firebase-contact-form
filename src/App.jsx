import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import ContactList from './components/ContactList'
import Contact from "./components/contact";
import RegisterAndLogin from "./components/RegisterAndLogin/RegisterAndLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/contact-form" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
