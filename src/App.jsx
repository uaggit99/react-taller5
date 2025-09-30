import "./App.css";
import { Navbar } from "./comnponents/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Editar } from "./pages/Editar";
import { Login } from "./pages/Login";
import { Footer } from "./comnponents/Footer";


function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    
      <Navbar />
   
      <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/lista" element={<Home />} />      
        <Route exact path="/user/edit/:id" element={<Editar />} />
      </Routes>
      </main>
      <Footer/>
     
      </div>
    </>
  );
}

export default App;
