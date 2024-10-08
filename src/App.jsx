import './App.css'
import {Routes, Route} from 'react-router-dom';
// import AboutMe from "./PortfolioContainer/AboutMe/AboutMe.jsx"
// import CertificatesPage from "./PortfolioContainer/Certificates/Certificates.jsx";
// import ContactMe from './PortfolioContainer/ContactMe/ContactMe.jsx';
// import Experience from "./PortfolioContainer/Experience/Experience.jsx";
// import Projects from "./PortfolioContainer/Projects/Projects.jsx";
// import Skills from "./PortfolioContainer/Skills/Skills.jsx";
 import Template from "./PortfolioContainer/Templates/template.jsx";
import { ThemeProvider } from './imports/ThemeContext';

function App() {

  return (
    <div className='app'>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Template />}>
            {/* <Route path="/" element={<AboutMe />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} /> 
            <Route path="/Projects" element={<CertificatesPage />} /> */}
          </Route>
        </Routes> 
      </ThemeProvider>

    </div>
  )
}

export default App
