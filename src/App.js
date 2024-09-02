import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './componet/Aboutus';
import Contact from './componet/Contact';
import Skills from './componet/Skills';
import Project from './componet/Project';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


