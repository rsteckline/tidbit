import { useEffect, useState } from 'react';
import getNews from '../../apiCalls';
import './Homepage.css';
import HomepageList from '../HomepageList/HomepageList';

export default function Homepage({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews().then(data => {
      if (data && data.articles) {
        const filteredArticles = data.articles.filter(article => {
          return article.author && article.title && article.publishedAt && article.description;
        });
        setArticles(filteredArticles);
      }
    });
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
        {filteredArticles.length > 0 ? (
          <HomepageList articles={filteredArticles}/>
        ) : searchQuery !== '' && (
          <div className="no-results">No matching results</div>
        )}
      </main>
    </div>
  );
}
