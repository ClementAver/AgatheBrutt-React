import { useEffect, useState } from "react";
import Tile from "../../components/Tiles/IndexTile";
import { projects } from "../../data/data";

export default function Index() {
  const [processed, setProcessed] = useState([]);

  useEffect(() => {
    setProcessed(projects);
  }, []);

  return (
    <>
      {processed.map((project, index) => (
        <Tile
          key={project.id.concat(`-${index.toString()}`)}
          id={project.id}
          title={project.title}
          summary={project.summary}
          date={project.date}
          tags={project.tags}
          covers={project.covers}
        />
      ))}
    </>
  );
}
