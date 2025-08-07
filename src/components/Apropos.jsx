import { useParams, Link } from "react-router-dom";

export default function Apropos(){

return(
 <div className="container my-5">
<div className="row">

    <div className="col-md-6">
        
        <h2>À propos de SimpleBlog</h2>
      <p>
        SimpleBlog est une application web conçue pour permettre aux utilisateurs de lire et publier des articles facilement.
        Notre objectif est d'offrir une interface simple et intuitive pour partager des idées, des histoires et des informations.
      </p>
      <p>
        Cette application a été développée avec React et Bootstrap pour garantir une expérience utilisateur fluide et moderne.
        Que vous soyez un lecteur passionné ou un auteur en herbe, SimpleBlog est fait pour vous.
      </p>
      <p>
        N'hésitez pas à explorer, commenter, et surtout, à publier vos propres articles !
      </p>
        
        </div>
    <div className="col-md-6 justify-content-end">
        <img
                  src="./public/images/apropos.avif"
                  style={{ height: "300px",width:"500px", objectFit: "cover" }}
                />
        </div>
</div>
</div>
);


}