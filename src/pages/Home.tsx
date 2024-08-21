import { About, Intro, StripesBackground, FooterNav } from "../components/";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto">
      <Intro />
    <About />
    <StripesBackground>
      <FooterNav />
    </StripesBackground>
    </main>
  );
}
