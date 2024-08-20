
export default function ContactLinks() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center bg-white">
        <a
          className="font-medium hover:text-red"
          href="mailto:julianaguero@gmail.com"
        >
          EMAIL ME
        </a>
        <a
          href=""
          download
          className="font-small md:mr-40"
        >
          GET MY CV
        </a>
      </div>
  )
}
