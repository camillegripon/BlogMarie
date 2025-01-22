import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './component/header';
import Parcours from './component/Parcours';
import Oeuvres from './component/Oeuvres';
import Contact from './component/Contact';


function App() {  
  const [selectionOeuvre, setselectionOeuvre] = useState('');

  return (
    <Router>
      <Header setselectionOeuvre={setselectionOeuvre}/>
      <Routes>
        <Route path="/parcours" element={<Parcours/>} />
        <Route path="/oeuvres" element={<Oeuvres selectionOeuvre={selectionOeuvre}/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App
