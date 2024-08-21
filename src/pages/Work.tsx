import { Helmet } from "react-helmet-async";
import { PreFooter, ProjectCard, WorkIntro } from "../components";
import { projectsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";

export default function Work() {
  const { ref } = useSectionInView("Work", 0.1);

  return (
    <>
      <Helmet>
        <title>Works | Julian Aguero</title>
        <meta
          name="description"
          content="In this section you will find all my projects, hope you enjoy them."
        />
        <link rel="canonical" href="https://julianaguero.netlify.app/work" />
      </Helmet>
      <main
        ref={ref}
        className="relative w-full h-full mx-auto  pt-20 lg:pt-28 flex flex-col"
        id="work"
      >
        <WorkIntro />
        {projectsData.map((project, i) => (
          <ProjectCard key={"proj" + i} project={project} />
        ))}
        <PreFooter />
      </main>
    </>
  );
}
