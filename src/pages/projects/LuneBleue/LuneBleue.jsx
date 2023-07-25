import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/data";
import IntroProject from "../../../components/IntroProjects/IntroProject";

export default function LuneBleue() {
  const [project, setProject] = useState(null);

  const id = "lune-bleue";

  const furtherInformation = ["sous la direction artistique de Thomas Guillaumot", <Link to="https://lunebleue.coop/">lunebleue.coop</Link>];

  useEffect(() => {
    let project = projects.filter((project) => project.id === id)[0];
    setProject(project);
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
