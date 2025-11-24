
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;