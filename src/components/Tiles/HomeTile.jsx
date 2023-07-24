import { Link } from "react-router-dom";
import MediaFactory from "../../factories/MediaFactory";

export default function Tile({ id, title, summary, date, tags, covers, index }) {
  const path = `projects/${id}`;

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
              let key = `tag-${index}-${tagIndex}`;
              if (tagIndex !== 0) {
                return <span key={key}>, {tag}</span>;
              }
              return <span key={key}>{tag}</span>;
            })
            .concat(" ● ")}
          {date}
        </div>
        <h2>{title}</h2>
        <p className="descriptif">{summary}</p>
      </div>
      <Link to={path}></Link>
    </div>
  );
}
