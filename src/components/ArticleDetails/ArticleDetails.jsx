import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';
import './ArticleDetails.css'

export default function ArticleDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  const {state} = useLocation()
  const {article} = state;
  const navigate = useNavigate()
  const {
    source,
    author,
    url,
    title,
    description,
    urlToImage,
    publishedAt,
    content,
  } = article;
  
  const date = dayjs(publishedAt).format('dddd, MMMM D, YYYY h:mm A	');

  return (
    <main className='article-page'>
      <article className='article-body'>
      <div className='back-button' onClick={() => navigate('/')}> ⬅️ Back Home
      </div>
        <h2 className='title'>{title.split(' -')[0]}</h2>
        <p>{description}</p>
        <p className='author'>{author.toLowerCase()}</p>
        <p className='date'>{date}</p>
        <p className='source'>{source.name}</p>
        <p>{content}</p>
        <img className='article-img' src={urlToImage} />
      </article>
    </main>
  );
}