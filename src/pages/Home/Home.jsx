import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Tile from "../../components/Tiles/HomeTile";
import { projects } from "../../data/data";
import HomeAnimations from "../../components/HomeAnimations/HomeAnimations";

export default function Home() {
  const [processed, setProcessed] = useState([]);

  useEffect(() => {
    const animations = projects.filter((project) => project.id === "animations")[0];
    const projectsFiltered = projects.filter((project) => project.id !== "animations");
    projectsFiltered.splice(1, 0, animations);
    setProcessed(projectsFiltered);
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
        {processed.map((project, index) =>
          project.id !== "animations" ? (
            <Tile
              key={project.id.concat(`-${index.toString()}`)}
              id={project.id}
              title={project.title}
              summary={project.summary}
              date={project.date}
              tags={project.tags}
              covers={project.covers}
            />
          ) : (
            <HomeAnimations
              key={project.id.concat(`-${index.toString()}`)}
              project={project}
            />
          )
        )}
      </div>
    </main>
  );
}
