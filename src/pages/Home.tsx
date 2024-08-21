import { Helmet } from "react-helmet-async";
import { About, Intro, StripesBackground, FooterNav } from "../components/";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Julian Aguero | Portfolio</title>
        <meta name="description" content="Im a Front-End developer with 1 year of experience and this is my portfolio."/>
        <link rel="canonical" href="https://julianaguero.netlify.app/" />
      </Helmet>
      <main className="flex flex-col items-center mx-auto">
        <Intro />
        <About />
        <StripesBackground>
          <FooterNav />
        </StripesBackground>
      </main>
    </>
  );
}
