import Nav from './components/Nav';
// import './App.css';
import Header from './components/Header';
import ReferEarn from './pages/ReferEarn';
import FriendsRefel from './pages/FriendsReferral';
import { Routes, Route } from 'react-router-dom';
import Desktop from './components/Desktop';

function App() {
  return (
    <>
      <Desktop />
      <Nav />
      <Header />
      <Routes>
        <Route path='/ReferEarnDesktop1' element={ <ReferEarn /> } />
        <Route path='/ReferEarnDesktop2' element={ <FriendsRefel /> } />
      </Routes>
      {/* <ReferEarn />
      <FriendsRefel /> */}
    </>
  );
}

export default App;
