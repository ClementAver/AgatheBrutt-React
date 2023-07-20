import { useEffect, useState } from "react";
import Tile from "../../components/Tile/Tile";

export default function Index() {
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
    <main className="index_main">
      <div className="contenu">
        <div className="intro"></div>
        {projects.map((project) => project)}
      </div>
    </main>
  );
}
