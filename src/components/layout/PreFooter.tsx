import FooterNav from "./FooterNav";

export default function PreFooter() {
  return (
    <section className="w-full h-screen relative bg-dark flex items-center">
      <div className="grow">
        <FooterNav />
      </div>
    </section>
  );
}
