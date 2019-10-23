import React from 'react';
import NavBar from './components/NavBar.js'
import SideBar from './components/SideBar.js'
import AppRouter from './components/AppRouter.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App" id="page-top">
      <NavBar />
      <div id="wrapper">
        <SideBar />
        <div className="container-fluid">
          <AppRouter />
        </div>
          <Footer />
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;