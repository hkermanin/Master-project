import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/main/Header"
import Footer from "./components/main/Footer"
import Home from "./components/home/home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import About from "./components/contact/About"
import Contact from "./components/contact/Contact"
import Buy from "./components/buy/Buy"


function App() {

  return (

      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/card" element={<Buy/>}/>
      </Routes>
      </main>

      <Footer/>
      </div>

      </BrowserRouter>


  )
}

export default App
