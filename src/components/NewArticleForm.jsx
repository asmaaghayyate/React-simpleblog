import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewArticleForm({ onAddArticle }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Champs obligatoires !");
    onAddArticle(title, content);
    navigate("/"); // retour à la liste
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Publier un nouvel article</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="form-control mb-3" rows="4" placeholder="Contenu" value={content} onChange={e => setContent(e.target.value)}></textarea>
        <button className="btn btn-success me-2" type="submit">Publier</button>
        <button className="btn btn-secondary" type="button" onClick={() => navigate("/")}>Annuler</button>
      </form>
    </div>
  );
}

export default NewArticleForm;
