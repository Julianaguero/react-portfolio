import { contactLinks } from "../../lib/data"

export default function SocialLinks() {
  return (
    <div className="flex flex-col justify-center mb-20 ">
      <p className="font-small">or contact me on</p>
      {contactLinks.slice(0,3).map((link) => (<a
      key={link.name}
        href={link.link}
        className="font-medium hover:text-red leading-[0.9]"
        target="_blank"
      >
        {link.name}
      </a>))}
   
    </div>
  );
}
