import { useParams, Link } from "react-router-dom";

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id);

  if (!article) {
    return <p>Article introuvable</p>;
  }

  return (
    <div className="container mt-5 ">
      {article.image && <img src={article.image} alt={article.title} className="img-fluid mb-3 " />}
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to="/" className="btn btn-secondary">Retour</Link>
    </div>
  );
}

export default ArticleDetail;
