import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewArticleForm({ onAddArticle }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
   const [imageFile, setImageFile] = useState(null);  
     const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   

    onAddArticle(title, content,imageFile);
        setSuccessMessage("Article ajouté avec succès !");
setTimeout(() => {
    setSuccessMessage("");
    navigate("/"); // retour à la liste
  }, 3000);
  };
const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };
  return (
    <div className="card p-4 shadow-sm">
      <h4>Publier un nouvel article</h4>
       {successMessage && (
        <div className="alert alert-success mt-3">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Titre" required value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="form-control mb-3" rows="4" placeholder="Contenu" required value={content} onChange={e => setContent(e.target.value)}></textarea>
        <input
          type="file"
          accept="image/*"
          required
          className="form-control mb-3"
          onChange={handleImageChange}
        />
        <button className="btn btn-success me-2" type="submit">Publier</button>
        <button className="btn btn-secondary" type="button" onClick={() => navigate("/")}>Annuler</button>
      </form>
    </div>
  );
}

export default NewArticleForm;
