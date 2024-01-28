import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Header from '../Header/Header';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/article' element={<ArticleDetails />} />
    </Routes>
    </>
  );
}

export default App;