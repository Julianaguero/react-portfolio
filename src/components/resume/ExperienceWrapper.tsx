import { educationData, experiencesData } from "../../lib/data";

export default function ExperienceWrapper() {
  return (
    <section className='w-full h-full lg:h-screen flex flex-col lg:grid lg:grid-cols-[1fr,2fr] '>
        <div className='bg-white pt-20 lg:pt-28 px-6'>
            <h2 className="font-small-variable font-neue-bold mb-8">EDUCATION</h2>
            {educationData.map((item, i) => (
                <li key={"educ"+i} className="flex flex-col font-small-variable leading-none mb-8">
                    <span className="mb-2">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.site}</p>
                    <span>{item.location}</span>

                </li>
            ))}
        </div>
        <div className='bg-magenta pt-20 lg:pt-28 px-6 lg:px-0'>
            <h2 className="font-small-variable font-neue-bold mb-8">EXPERIENCE</h2>
            {experiencesData.map((item, i) => (
                <li key={"exp"+i} className="flex flex-col font-small-variable leading-none mb-8">
                    <span>{item.title}</span>
                    <h3>{item.position}</h3>
                    <span>{item.location}</span>

                </li>
            ))}

        </div>
    </section>
  )
}
