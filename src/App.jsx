import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Parcours from './component/Parcours';
import Oeuvres from './component/Oeuvres';
import Contact from './component/Contact';


function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/parcours" element={<Parcours/>} />
        <Route path="/oeuvres" element={<Oeuvres/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App
