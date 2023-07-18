import { Link, useLocation } from "react-router-dom";

export default function Tile({ id, title, summary, date, tags, cover, alt, index }) {
  let location = useLocation();
  const path = `/${id}`;

  if (location.pathname === "/") {
    return (
      <article
        key={id}
        className="ligne tile"
      >
        <figure className="image">
          <img
            src={cover}
            alt={alt}
          />
        </figure>

        <div className="texte">
          <div className="caps">
            {tags
              .map((tag, tagIndex) => {
                let key = `${index}-${tagIndex}`;
                console.log(key);
                return <span key={key}>{tag} </span>;
              })
              .concat("● ")}
            {date}
          </div>
          <h2>{title}</h2>
          <p className="descriptif">{summary}</p>
        </div>
        <Link
          className="tile-link"
          to={path}
        ></Link>
      </article>
    );
  } else if (location.pathname === "/index") {
    return (
      <article
        key={id}
        className="ligne tile"
      >
        <div className="index_image">
          <img
            src={cover}
            alt={alt}
          />
        </div>

        <div className="index_titre">
          <div className="caps">
            {tags
              .map((tag, tagIndex) => {
                let key = `${index}-${tagIndex}`;
                console.log(key);
                return <span key={key}>{tag} </span>;
              })
              .concat("● ")}
            {date}
          </div>
          <h2>{title}</h2>
        </div>

        <div className="index_description">
          <p className="index_descriptif">{summary}</p>
          <p className="voir">voir le projet ➜</p>
        </div>
        <Link
          className="tile-link"
          to={path}
        ></Link>
      </article>
    );
  }
}
