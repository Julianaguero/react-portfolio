import { Helmet } from "react-helmet-async";
import { ExperienceWrapper, PreFooter, ResumeIntro } from "../components";
import { useSectionInView } from "../lib/hooks";

export default function Resume() {
  const { ref } = useSectionInView("Resume", 0.25);

  return (
    <>
      <Helmet>
        <title>Resume | Julian Aguero</title>
        <meta
          name="description"
          content="In this section you will find my job experience."
        />
        <link rel="canonical" href="https://julianaguero.netlify.app/resume" />
      </Helmet>
      <main
        ref={ref}
        className="relative w-full flex flex-col mx-auto"
        id="resume"
      >
        <ResumeIntro />
        <ExperienceWrapper />
        <PreFooter />
      </main>
    </>
  );
}
