import { useEffect, useState } from 'react';
import getNews  from '../../apiCalls';
import './Homepage.css';
import HomepageList from '../HomepageList/HomepageList';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!articles.length) {
        getNews().then(data => setArticles(data.articles));
      }
  }, []);

  return (
    <div className='page'>
      <main>
        <h2 className='h2'>Latest Top Stories</h2>
        <HomepageList articles={articles}/>
      </main>
    </div>
  );
}