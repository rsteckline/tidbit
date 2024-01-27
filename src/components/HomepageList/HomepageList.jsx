import './HomepageList.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

export default function HomepageList({ articles }) {
  
  const list = articles.map(article => (
    <ArticlePreview key={article.title} article={article} />
  ))

  return <div className='news-grid'>{list}</div>
}