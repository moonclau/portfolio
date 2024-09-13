import './App.css'
import {Routes, Route} from 'react-router-dom';
import Homepage from "./PortfolioContainer/Home/home.jsx"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe.jsx"
import Template from "./PortfolioContainer/Templates/template.jsx";
import ContactMe from './PortfolioContainer/ContactMe/ContactMe.jsx';
function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Homepage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
