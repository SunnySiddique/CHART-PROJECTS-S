import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom"
import Blog from "./components/Blog/Blog"
import Home from "./components/DasBord/Home"
import GoogleSignInPage from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Product from "./components/Product/Product"
import User from "./components/User/User"

function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<GoogleSignInPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
  )
}

export default App
