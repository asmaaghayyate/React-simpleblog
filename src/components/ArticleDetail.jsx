import { useParams, Link } from "react-router-dom";

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id);

  if (!article) {
    return <p>Article introuvable</p>;
  }

  return (
   <div className="container mt-5 mb-5 ">

    <div className="card  w-75  m-3 p-4 mx-auto rounded-0 " style={{ borderColor: "rgba(190, 178, 178, 0.2)" }}>
                <h5 className="card-title">{article.title}</h5>

    {article.image && (
      <img
        src={article.image}
        alt={article.title}
        className="card-img-top mt-5 ml-5"
      />
    )}
    <div className="card-body">
      <p className="card-text">{article.content}</p>

      {/* Affichage de la date (si elle existe) */}
      {article.date && (
        <p className="text-muted">
          Publié le : {article.date}
        </p>
      )}

      <Link to="/" className="btn btn-secondary mt-2 ">
        Retour
      </Link>
    </div>
  </div>
</div>



  );
}

export default ArticleDetail;
