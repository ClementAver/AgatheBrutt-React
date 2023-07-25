import { useEffect, useState } from "react";
import Tile from "../../components/Tiles/IndexTile";
import { projects } from "../../data/data";

export default function Index() {
  const [processed, setProcessed] = useState([]);

  useEffect(() => {
    setProcessed(projects);
  }, []);

  return (
    <main className="index_main">
      <div className="contenu">
        <div className="intro"></div>
        {processed.map((project, index) => (
          <Tile
            key={project.id.concat(`-${index.toString()}`)}
            index={index}
            id={project.id}
            title={project.title}
            summary={project.summary}
            date={project.date}
            tags={project.tags}
            covers={project.covers}
          />
        ))}
      </div>
    </main>
  );
}
