import './App.css';
import CustomNavbar from './Pages/Components/Home/Navbar/CustomNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Components/Home/Home';
import Profile from './Pages/Components/Home/Profile/Profile';
import CustomBlogs from './Pages/Components/Home/Blogs/CustomBlogs';
import Skills from './Pages/Components/Home/Skills/Skills';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/blogs' element={<CustomBlogs/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
