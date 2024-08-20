export default function StripesBackground({children} : {children: React.ReactNode}) {
  return (
    <div className="relative w-full z-0">
      <div className="w-full h-screen bg-white relative overflow-x-hidden mt-24">
        <div className="flex sm:px-0 justify-between sm:justify-evenly w-full h-full">
          <div className="w-[30px] h-full bg-[#4cd4e6]"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6]"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6]"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6]"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6] hidden sm:block"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6] hidden sm:block"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6] hidden sm:block"></div>
          <div className="w-[30px] h-full bg-[#4cd4e6] hidden sm:block"></div>
        </div>
      </div>
      <div className="absolute top-[60%] left-[45%] -translate-y-1/2 -translate-x-1/2 ">
        {children}
      </div>
    </div>
  );
}
