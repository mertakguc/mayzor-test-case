import Login from './components/Login'
import AnaSayfa from './components/AnaSayfa'

import { BrowserRouter as Router, Switch, 
  Route, Redirect, redirect, useNavigate, Link, Routes} from "react-router-dom";
import KullaniciIslemleri from './components/KullaniciIslemleri';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/kullaniciislemleri' element={<KullaniciIslemleri/>}></Route>
      <Route path='/anasayfa' element={<AnaSayfa/>}></Route>
    </Routes>
  );
}

export default App;
