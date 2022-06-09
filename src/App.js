
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import Header from './components/header';
import Home from './views/home';
import Footer from './components/footer';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Footer />

    </>
  );
}

export default App;
