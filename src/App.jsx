import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className='container'style={{border: '1px solid black'}}>
    <Header handlePageChange = {handlePageChange} currentPage = {currentPage}/>
    <main className="mx-3">{renderPage()}</main>
      <Footer/>
  </div>
  )
}


export default App
