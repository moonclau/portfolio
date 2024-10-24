import './App.css'
import {Routes, Route} from 'react-router-dom';
import Template from "./PortfolioContainer/Templates/template.jsx";
import { ThemeProvider } from './imports/ThemeContext';

function App() {

  return (
    <div className='app'>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Template />}>
          </Route>
        </Routes> 
      </ThemeProvider>

    </div>
  )
}

export default App;
