import { Link, useLocation } from "react-router-dom";
import MediaFactory from "../../factories/MediaFactory";

export default function Tile({ id, title, summary, date, tags, covers, index }) {
  let location = useLocation();
  const path = `projects/${id}`;

  if (location.pathname === "/") {
    return (
      <div
        key={id}
        className="ligne tile"
      >
        {covers.map((cover, coverIndex) => {
          let key = `${index}-${coverIndex}`;

          if (cover.type) {
            return (
              <div key={key}>
                <MediaFactory media={cover} />
              </div>
            );
          } else {
            return (
              <div
                key={key}
                className="image"
              >
                <MediaFactory media={cover} />
              </div>
            );
          }
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
      </div>
    );
  } else if (location.pathname === "/index") {
    return (
      <div
        key={id}
        className="ligne tile"
      >
        {covers.map((cover, coverIndex) => {
          let key = `${index}-${coverIndex}`;

          if (cover.type) {
            return (
              <div
                key={key}
                className="index_image"
              >
                <MediaFactory media={cover} />
              </div>
            );
          } else {
            return (
              <div
                key={key}
                className="index_image"
              >
                <MediaFactory media={cover} />
              </div>
            );
          }
        })}
        <div className="index_titre">
          <div className="caps">
            {tags
              .map((tag, tagIndex) => {
                let key = `tag-${index}-${tagIndex}`;
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
      </div>
    );
  }
}
