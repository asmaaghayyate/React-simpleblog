import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  return (


<div className="container ">
    <h2 class="m-5 text-center" id="tarif">Nos Articles</h2>

    
      {/* Liste des articles centrée */}
      <div className="row justify-content-center">
        {articles.map((a) => (
          <div key={a.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-90 shadow-lg m-2">
              {a.image && (
                <img
                  src={a.image}
                  className="card-img-top"
                  alt={a.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
    <h5 className="card-title fs-8">  {a.title.split(" ").slice(0, 6).join(" ") + (a.title.split(" ").length > 6 ? "..." : "")}
</h5>
                <p className="card-text text-truncate ">{a.content}</p>
                <div className="mt-auto">
                  <Link
                    to={`/article/${a.id}`}
                    className=" btn-voir-plus btn-sm"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}


