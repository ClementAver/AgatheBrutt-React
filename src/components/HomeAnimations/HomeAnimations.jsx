import { Link } from "react-router-dom";
import MediaFactory from "../../factories/MediaFactory";

export default function HomeAnimations({ project }) {
  return (
    <div className="home_galerie">
      <div className="photos_trois">
        {project.medias.map((media, index) => {
          let key = `animation-${index}`;
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
