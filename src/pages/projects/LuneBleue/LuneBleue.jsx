import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/data";
import IntroProject from "../../../components/IntroProjects/IntroProject";
import PageStart from "../../../components/PageStart/PageStart";
import Media from "../../../layouts/Media/Media";
import Index from "../../../components/Index/Index";

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
        <main className="projet_main">
          <div className="contenu">
            <IntroProject
              title={project.title}
              summary={project.summary}
              date={project.date}
              tags={project.tags}
              furtherInformation={furtherInformation}
            />
            <div className="photos">
              <Media
                customClass="deux"
                children={[project.medias[0], project.medias[1]]}
              />
              <Media
                customClass="une"
                children={[project.medias[2]]}
              />
              <Media
                customClass="deux"
                children={[project.medias[3], project.medias[4]]}
              />
              <Media
                customClass="deux_droite"
                children={[project.medias[5]]}
              />
              <Media
                customClass="une"
                children={[project.medias[6]]}
              />
              <Media
                customClass="deux"
                children={[project.medias[7]]}
              />
            </div>
          </div>
        </main>
        <PageStart />
        <Index />
      </>
    );
  }
}
