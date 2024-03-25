import Image from "next/image";
import React from "react";

interface TopSectionCardsProps {
  img: any;
  name: string;
  sport: string;
  totalEvents: string;
}
const TopSectionCards: React.FC<TopSectionCardsProps> = ({
  img,
  name,
  sport,
  totalEvents,
}) => {
  return (
    <div className="p-3 bg-white dark:bg-[#3B3E47] mx-2">
      <Image src={img} alt="player card" width={200} height={355} className='w-full'/>
      <div className="mt-3 capitalize">
        <p className="font-medium sm:text-lg">{name}</p>
        <div className="bg-[#F7F7F8] dark:bg-[#292B32] items-start lg:items-center justify-start flex-col sm:flex-row md:flex-col lg:flex-row mt-3 flex text-sm gap-x-6 p-2">
          <div className="">
            <p className="text-[#525965] lg:text-[1.1vw] dark:text-[#DFDFDF]">Total Events</p>
            <p className="text-base lg:text-[1.2vw]">{totalEvents}</p>
          </div>
          <div className="">
            <p className="text-[#525965] lg:text-[1.1vw] dark:text-[#DFDFDF]">Sport</p>
            <p className="text-base lg:text-[1.2vw]">{sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSectionCards;
