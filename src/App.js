import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import Footer2 from './components/footer/Footer2';

export default function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Section />
        <Footer />
        <Footer2 />
    </div>
  );
}