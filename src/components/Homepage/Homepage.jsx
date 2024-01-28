import { useEffect, useState } from 'react';
import getNews from '../../apiCalls';
import './Homepage.css';
import HomepageList from '../HomepageList/HomepageList';

export default function Homepage({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!articles.length) {
      getNews().then(data => setArticles(data.articles));
    }
  }, []);

  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();
    const titleMatches = article.title.toLowerCase().includes(query);
    const descriptionMatches = article.description && article.description.toLowerCase().includes(query);
    return titleMatches || descriptionMatches;
  });

  return (
    <div className='page'>
      <main>
        <h2 className='h2'>Latest Top Stories</h2>
        <HomepageList articles={filteredArticles}/>
      </main>
    </div>
  );
}
