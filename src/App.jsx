import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import NewArticleForm from "./components/NewArticleForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Apropos from "./components/Apropos.jsx"; // ou le chemin correct
import Contact from "./components/Contact.jsx"; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger API + LocalStorage
  useEffect(() => {
    const savedArticles = localStorage.getItem("articles");
    const localArticles = savedArticles ? JSON.parse(savedArticles) : [];

    const apiKey = "2f37f1a02ceb4a0a94d8b9c7d5b0e124";
    fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const apiArticles = data.articles.map((art, index) => ({
          id: index + 1,
          title: art.title,
          image: art.urlToImage && !art.urlToImage.includes("axios.com") 
    ? art.urlToImage 
    : "https://picsum.photos/seed/400/200",
          content: art.description || art.content || "",
          date: art.publishedAt
        ? new Date(art.publishedAt).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : "Date inconnue"
    }));
     
        setArticles([...apiArticles, ...localArticles]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAddArticle = (title, content, imageFile) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    const base64Image = reader.result;

    const newArticle = {
      id: Date.now(),
      title,
      content,
      image: base64Image,
      date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);

    const savedArticles = localStorage.getItem("articles");
    const localArticles = savedArticles ? JSON.parse(savedArticles) : [];
    localStorage.setItem("articles", JSON.stringify([...localArticles, newArticle]));

   {successMessage && (
  <div className="alert alert-success mt-3">
    {successMessage}
  </div>
)}

  };

  reader.readAsDataURL(imageFile); // Convertit l’image en Base64
  
};


  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Chargement des articles...</p>
      </div>
    );
  }

  return (
   
     <Router >
   
       <Navbar />
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />

           <Route path="/article/:id" element={
        <main className="container my-4">
          <ArticleDetail articles={articles} />
        </main>
      } />
      <Route path="/about" element={
        <main className="container my-4">
          <Apropos />
        </main>
      } />

       <Route path="/contact" element={
        <main className="container my-4">
          <Contact />
        </main>
      } />
      <Route path="/new" element={
        <main className="container my-4">
          <NewArticleForm onAddArticle={handleAddArticle} />
        </main>
      } />

     

        </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;