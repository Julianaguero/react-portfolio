import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center bg-transparent">
      <a
        href="https://open.spotify.com/user/jaguero664"
        className="font-small hover:text-green"
        target="_blank"
      >
        SPOTIFY
      </a>
      <Link to="/" className="font-small hover:text-black">
        Julian Agüero / Front-end Developer / Madrid, Spain
      </Link>
    </div>
  );
}
