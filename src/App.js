import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';
import Contact from './contact';  // Importing the Contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />  {/* Adding route for Contact page */}
      </Routes>
    </Router>
  );
}

export default App;
