import Image from "next/image";
import React from "react";

interface BottomSectionCardsProps {
  img: any;
  name: string;
  index: number;
  day: string;
  monthDate: string;
  time: string;
  place: string;
}
const BottomSectionCards: React.FC<BottomSectionCardsProps> = ({
  img,
  index,
  name,
  monthDate,
  day,
  time,
  place,
}) => {
  return (
    <div className={`p-3 shadow-md bg-white dark:bg-[#3B3E47] mx-2 ${index > 0 && "hidden md:block"} `}>
      <Image
        src={img}
        alt="player card"
        width={200}
        height={355}
        className="w-full"
      />
          <div className="flex w-[90%] mx-auto corner relative border-dashed pt-3 border-t border-gray-400 gap-y-2 flex-col justify-evenly">
          <p className="font-medium sm:text-lg text-center">{name}</p>

          <div className="flex text-center xs:flex-col sm:flex-row md:text-sm lg:text-base justify-center items-center gap-x-2">
          <p className="uppercase">
              {monthDate}
            </p>
            <p className=" uppercase px-2 border-x xs:border-y xs:border-x-0 sm:border-x sm:border-y-0">{day}</p>
            <p className=" uppercase">{time}</p>
          </div>
            <p className="text-base text-[#A9ACB2] text-center">{place}</p>
            <button className='p-3 bg-[#1D1D1F] 2xl:text-sm sm:text-base text-white'>Take Flight Collection</button>
         
      </div>
    </div>
  );
};

export default BottomSectionCards;
