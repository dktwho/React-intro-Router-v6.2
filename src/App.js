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
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contacts' element={<Contacts/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
