import Image from "next/image";
import React from "react";

interface AdCard {
  img: any;
  desc: string;
  head: string;
  
}
const AdCard: React.FC<AdCard> = ({
  img,
  desc,
  head,
  
}) => {
  return (
    <div className="  p-3 bg-white dark:bg-[#3B3E47]">
      <div className="relative">
      <Image src={img} alt="player card" width={180} height={150} className='w-full lg:h-[180px]'/>
      <p className='absolute top-0 right-0 py-1 px-4 text-white bg-black'>Ad</p>
      </div>
      <div className=" capitalize p-2 border-[0.2px] border-[#006555]">
        <h3 className="lg:text-[1.4vw] text-[20px] font-semibold">{head}</h3>
        <p className="lg:text-[1.04vw] text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default AdCard;
