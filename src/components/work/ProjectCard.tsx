import { ProjectDataType } from "../../lib/types";

export default function ProjectCard({project}:  {project: ProjectDataType}) {
    const {title, stack, type, year, tailwindBg, repo, url} = project   
    
  return (
    <>
      <a
        href={repo}
        target="_blank"
        className="w-full flex flex-col md:flex-row md:hover:bg-slate-200 transition-all z-0"
      >
        <div className="left md:w-1/2 flex flex-col justify-between text-black">
          <p className="w-full flex justify-between items-start lg:items-center px-[14px] md:px-[22px] pt-[18px] text-[18px] md:text-xl">
            <span className="uppercase">{type && (<>{type}<br/></>)}{stack}</span>
            <span className="ml-4">©{year}</span>
          </p>
          <h2 className="uppercase flex justify-between items-center pt-4 md:pt-0 pl-4 pr-[22px] whitespace-nowrap pb- md:pb-4 lg:pb-10">
            <span className=" text-[2rem] md:text-4xl lg:text-[5.4rem]">{title}.</span>
            <span className="text-xs md:text-sm lg:text-lg leading-[1.2] flex flex-col gap-2 z-10">
              <a href={url} target="_blank" className="block hover:text-red">LIVE DEMO</a>
              <a href={repo} target="_blank" className="block hover:text-green">GITHUB</a>
            </span>
          </h2>
        </div>
        <div className={`right md:w-1/2 pt-[56.2%] md:pt-[33%] bg-cover bg-center bg-hero ${tailwindBg}`}></div>
      </a>
    </>
  );
}
