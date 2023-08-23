import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import ChangePass from './pages/ChangePass';
import CancelTicket from './pages/CancelTicket';
import Account from './pages/Account';
import PrintReceipt from './pages/PrintReceipt';
import RePrint from './pages/RePrint';
import WinGame from './pages/WinGame';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        {/* <Route path='/' element={<SignIn />}/> */}
        <Route path='/' element ={<Home />} />
        <Route path='/change-password' element ={<ChangePass />} />
        <Route path='/cancel-ticket' element ={<CancelTicket />} />
        <Route path='/account' element ={<Account />} />
        <Route path='/print' element ={<PrintReceipt />} />
        <Route path='/reprint' element ={<RePrint />} />
        <Route path='/won' element ={<WinGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
