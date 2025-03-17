import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './Views/LoginPage.jsx'
import HomePage from './Views/HomePage.jsx'
import AboutPage from './Views/AboutPage.jsx'
import ContactPage from './Views/ContactPage.jsx'
import RegisterPage from './Views/RegisterPage.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wow/contact" element={<ContactPage />} />
        <Route path="/sau/dti/regis" element={<RegisterPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
