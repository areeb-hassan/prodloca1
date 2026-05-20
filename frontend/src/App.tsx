import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <div className="bg-[#080808] min-h-screen text-white overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App