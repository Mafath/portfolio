import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
    </>
   
  );
}


export default App
