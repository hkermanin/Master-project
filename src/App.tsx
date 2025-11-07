import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/main/Header"
import Footer from "./components/main/Footer"


function App() {

  return (

      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow">

      <Routes>
        <Route/>
      </Routes>
      </main>

      <Footer/>
      </div>

      </BrowserRouter>


  )
}

export default App
