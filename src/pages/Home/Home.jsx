import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Tile from "../../components/Tile/Tile";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        let custom = <p key="custom">Ma tuile d'animation.</p>;
        let customIncluded = data.projets.map(({ id, title, summary, date, tags, covers, alt }, index) => {
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
              alt={alt}
            />
          );
        });
        customIncluded.splice(1, 0, custom);
        setProjects(customIncluded);
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
