import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contacts from './Contacts/Contats'
import NotFound from './NotFound/NotFound';
import MainLayout from './MainLayout/MainLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
