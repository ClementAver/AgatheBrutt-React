import { useEffect, useState } from "react";
import Tile from "../../components/Tile/Tile";

export default function Index() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projets);
      });
  }, []);

  return (
    <main className="index_main">
      <div className="contenu">
        <div className="intro"></div>
        {projects.map(({ id, title, summary, date, tags, cover, alt }, index) => {
          return (
            <Tile
              key={id.concat(`-${index.toString()}`)}
              index={index}
              id={id}
              title={title}
              summary={summary}
              date={date}
              tags={tags}
              cover={cover}
              alt={alt}
            />
          );
        })}
      </div>
    </main>
  );
}
