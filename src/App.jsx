import Header from "./components/Header/Header"
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<p>This is the home</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
