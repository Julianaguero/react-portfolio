import { useSectionInView } from "../../lib/hooks";
import { ContactLinks, FooterLinks, SocialLinks } from "../index";

export default function Footer({customStyle} : {customStyle?: string}) {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <footer
      ref={ref}
      id="contact"
      className={`-scroll-mt-36 px-[30px] pt-40 md:48 lg:pt-40 pb-2 h-screen  lg:h-screen flex flex-col justify-between lg:justify-end ${customStyle}`}
    >
      <div className="my-auto">
        <ContactLinks />
        <SocialLinks />
      </div>
   
      <FooterLinks />
    </footer>
  );
}
