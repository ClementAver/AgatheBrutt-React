import { useEffect, useState } from "react";
import Tile from "../../components/Tiles/IndexTile";

export default function Index() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        let all = data.projets.map(({ id, title, summary, date, tags, covers }, index) => {
          return (
            <Tile
              key={id.concat(`-${index.toString()}`)}
              index={index}
              id={id}
              title={title}
              summary={summary}
              date={date}
              tags={tags}
              covers={[covers[0]]}
            />
          );
        });
        setProjects(all);
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
