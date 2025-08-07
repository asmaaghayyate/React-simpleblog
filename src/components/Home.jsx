

import React from "react";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function Home({ articles }) {
  

  return (
    <>
    
<div className=" position-relative mt-5">
  <img src="images/bloghome2.jpeg" alt="Espace de travail" className="hero-image" />
 
</div>

<div className="mt-4">
        <ArticleList articles={articles} />
      </div>
      
    </>
  );
}


     
  