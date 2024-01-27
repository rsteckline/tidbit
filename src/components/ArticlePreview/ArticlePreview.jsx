export default function ArticlePreview({ article }) {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = article;
  
    return <div>
        <p>{article.source.name}</p>
        <p>{article.title}</p>
        <p>{article.description}</p>
    </div>;
  }