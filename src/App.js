import Nav from './components/Nav';
// import './App.css';
import Header from './components/Header';
import Header1 from './components/Header1';
import ReferEarn from './pages/ReferEarn';
import FriendsRefel from './pages/FriendsReferral';
import { Routes, Route } from 'react-router-dom';
import Desktop from './components/Desktop';

function App() {
  return (
    <>
      <Desktop />
      <Nav />      
      <Routes>
        <Route path='/ReferEarnDesktop1' element={ <><Header1 /> <ReferEarn /></> } />
        <Route path='/ReferEarnDesktop2' element={ <><Header /> <FriendsRefel /></> } />
      </Routes>
      {/* <ReferEarn />
      <FriendsRefel /> */}
    </>
  );
}

export default App;
