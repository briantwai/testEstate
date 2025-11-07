import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  const [message, setMessage] = useState("");
  const [company_name, setCompanyName] = useState("")

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {

  }, [company_name])

  const changeCompanyName = () => {
    setCompanyName("New Company Name");
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      {message && <p>{message}</p>}
      <button onClick={changeCompanyName}>Change Company Name to get info on</button>
    </div>
  );
}

export default App;
