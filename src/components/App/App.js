import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Header from '../Header/Header';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Routes>
        <Route path="/" element={<Homepage searchQuery={searchQuery}/>} />
        <Route path='/article' element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;