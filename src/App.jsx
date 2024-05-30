import Register from "./pages/Register"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Profile from "./pages/Profile"
import List from "./pages/List"




function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
