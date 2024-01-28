import './ArticlePreview.css'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export default function ArticlePreview({ article }) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
  } = article;

  const navigate = useNavigate()

  const date = dayjs(publishedAt).format('MMMM D, YYYY');

  return <article className="ArticlePreview" onClick={() => navigate("/article", {state: {article: article}})}>
    <img className="ArticlePreview-img" src={urlToImage}/>
    <h3 className="">{title}</h3>
    <p className="ArticlePreview-text">{date}</p>
  </article>;
}