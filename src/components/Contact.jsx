import { useParams, Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <section className="container mt-5 mb-5">
        <h3 className="mb-4" id="contact">Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nom" name="nom" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Prenom" name="prenom" />
          </div>
        
          
          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Votre message" name="message"></textarea>
          </div>
          <button type="submit" className="btn-envoye">Envoyer</button>
        </form>
      </section>
    </div>
  );
}
