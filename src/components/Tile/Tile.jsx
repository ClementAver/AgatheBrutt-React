import { Link, useLocation } from "react-router-dom";

export default function Tile({ id, title, summary, date, tags, covers, alt, index }) {
  let location = useLocation();
  const path = `projects/${id}`;

  if (location.pathname === "/") {
    return (
      <article
        key={id}
        className="ligne tile"
      >
        {covers.map((cover, coverIndex) => {
          let key = `${index}-${coverIndex}`;
          return (
            <div
              key={key}
              className="image"
            >
              <img
                src={cover.src}
                alt={cover.alt}
              />
            </div>
          );
        })}

        <div className="texte">
          <div className="caps">
            {tags
              .map((tag, tagIndex) => {
                let key = `${index}-${tagIndex}`;
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
        {covers.map((cover, coverIndex) => {
          let key = `cover-${index}-${coverIndex}`;
          console.log(key);
          return (
            <div
              key={key}
              className="index_image"
            >
              <img
                src={cover.src}
                alt={cover.alt}
              />
            </div>
          );
        })}
        <div className="index_titre">
          <div className="caps">
            {tags
              .map((tag, tagIndex) => {
                let key = `tag-${index}-${tagIndex}`;
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
