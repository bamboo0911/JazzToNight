import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Venues from './pages/Venues';
import Musicians from './pages/Musicians';
import Articles from './pages/Articles';
import VenueDetail from './pages/VenueDetail';
import MusicianDetail from './pages/MusicianDetail';
import ArticleDetail from './pages/ArticleDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venues/:id" element={<VenueDetail />} />
        <Route path="/musicians" element={<Musicians />} />
        <Route path="/musicians/:id" element={<MusicianDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
