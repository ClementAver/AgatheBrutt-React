import { useEffect, useState } from "react";
import IntroProject from "../../components/IntroProjects/IntroProject";
import { Link } from "react-router-dom";

export default function LuneBleue() {
  const [project, setProject] = useState(null);

  const id = "lune-bleue";

  const furtherInformation = ["sous la direction artistique de Thomas Guillaumot", <Link to="https://lunebleue.coop/">lunebleue.coop</Link>];

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        let project = data.projets.filter((project) => (project.id = id))[0];
        setProject(project);
      });
  }, []);

  if (project !== null) {
    return (
      <>
        <IntroProject
          title={project.title}
          summary={project.summary}
          date={project.date}
          tags={project.tags}
          furtherInformation={furtherInformation}
        />
      </>
    );
  }
}
