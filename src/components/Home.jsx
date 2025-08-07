

import React from "react";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function Home({ articles }) {
  

  return (
    <>
    
<main  className="container-fluid p-0  mt-5">
  <img src="images/bloghome2.jpeg" alt="Espace de travail" className="hero-image" />
 
</main>

<div className="mt-4">
        <ArticleList articles={articles} />
      </div>
      
    </>
  );
}


     
  