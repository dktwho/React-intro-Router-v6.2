import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contacts from './Contacts/Contats'
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='*' element={<h1><NotFound/></h1>}/>
          <Route path='/' element={<h1><Home/></h1>}/>
          <Route path='about' element={<h1><About/></h1>}/>
          <Route path='contacts' element={<h1><Contacts/></h1>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
