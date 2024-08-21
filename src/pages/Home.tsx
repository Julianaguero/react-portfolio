import { Helmet } from "react-helmet-async";

import { About, Intro, StripesBackground, FooterNav } from "../components/";
import { useSectionInView } from "../lib/hooks";

export default function Home() {
  const { ref } = useSectionInView("Home", 0.25);

  return (
    <>
      <Helmet>
        <title>Julian Aguero | Portfolio</title>
        <meta
          name="description"
          content="Im a Front-End developer with 1 year of experience and this is my portfolio."
        />
        <link rel="canonical" href="https://julianaguero.netlify.app/" />
      </Helmet>
      <main ref={ref} className="flex flex-col items-center mx-auto">
        <Intro />
        <About />
        <StripesBackground>
          <FooterNav />
        </StripesBackground>
      </main>
    </>
  );
}
