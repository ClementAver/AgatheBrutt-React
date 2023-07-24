import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Tile from "../../components/Tiles/HomeTile";
import MediaFactory from "../../factories/MediaFactory";
import { Link } from "react-router-dom";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        let all = data.projets;
        let custom = all.filter((projet) => projet.id === "animations")[0];
        let key = `custom-animations`;
        let customElement = (
          <div
            key={key}
            className="home_galerie"
          >
            <div className="photos_trois">
              {custom.medias.map((media, index) => {
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
        let customFiltered = all.filter((projet) => projet.id !== "animations");
        let customFilteredElements = customFiltered.map(({ id, title, summary, date, tags, covers }, index) => {
          return (
            <Tile
              key={id.concat(`-${index.toString()}`)}
              index={index}
              id={id}
              title={title}
              summary={summary}
              date={date}
              tags={tags}
              covers={covers}
            />
          );
        });

        customFilteredElements.splice(1, 0, customElement);
        setProjects(customFilteredElements);
      });
  }, []);

  return (
    <main className="home_main">
      <div className="contenu">
        <Hero
          title={
            <h1 className="intro_texte">
              Design graphique, <br />
              design éditorial <br />& design interactif.
            </h1>
          }
          labor={
            <p className="caps">
              Toulouse & Paris ➜ <a href="mailto:agathe.brutt@gmail.com">agathe.brutt@gmail.com</a>
            </p>
          }
        />
        {projects.map((project) => project)}
      </div>
    </main>
  );
}
