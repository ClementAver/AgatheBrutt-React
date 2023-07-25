import { Link } from "react-router-dom";
import MediaFactory from "../../factories/MediaFactory";

export default function HomeAnimations({ index, project }) {
  return (
    <div
      key={index}
      className="home_galerie"
    >
      <div className="photos_trois">
        {project.medias.map((media, mediaIndex) => {
          let key = `animation-${mediaIndex}`;
          return (
            <div key={key}>
              <MediaFactory media={media} />
            </div>
          );
        })}
      </div>
      <div className="home_lien">
        <Link to="/projects/animations">voir tous les travaux d’animation ➜</Link>
      </div>
    </div>
  );
}
