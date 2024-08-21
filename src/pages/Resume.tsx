import { ExperienceWrapper, PreFooter, ResumeIntro } from "../components";
import { useSectionInView } from "../lib/hooks";

export default function Resume() {
  const { ref } = useSectionInView("Resume", 0.5);

  return (
    <main
      ref={ref}
      className="relative w-full flex flex-col mx-auto"
      id="resume"
    >
        <ResumeIntro />
        <ExperienceWrapper />
        <PreFooter />
    </main>
  );
}
