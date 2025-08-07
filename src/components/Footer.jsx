
import React  from "react";

export default  function Footer(){
    return (
        <footer className="">
        <div className="container text-center ">
            <p>&copy; {new Date().getFullYear()} SimpleBlog. Tous droits réservés.</p>
            <p>
            <a href="/about" className="text-white">À propos</a> | 
            <a href="/contact" className="text-white"> Contact</a>
            </p>
        </div>
        </footer>
    );
}


