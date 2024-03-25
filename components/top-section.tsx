import React from "react";
import player from "@/public/277307281_10158751675643224_148609460173032344_n.png";
import ad from "@/public/unnamed (1) 1.png";
import TopSectionCards from "./top-section-cards";
import AdCard from "./ad-card";
import ThemeToggle from "./theme-toggle";

const TopSection = () => {
  const playerCards = [
    {
      img: player,
      name: "Herbie",
      totalEvents: "34 Events",
      sport: "baseball",
    },
    {
      img: player,
      name: "Herbie",
      totalEvents: "34 Events",
      sport: "baseball",
    },
    {
      img: player,
      name: "Herbie",
      totalEvents: "34 Events",
      sport: "baseball",
    },
    {
      img: player,
      name: "Herbie",
      totalEvents: "34 Events",
      sport: "baseball",
    },
  ];
  return (
    <section className="">
      <div className="flex items-center justify-between my-4 ">
        <div className="">
          <h1 className="font-bold text-2xl mb-2">Sports</h1>
          <hr className="border border-[#738FFF]" />
        </div>{" "}
        <ThemeToggle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-x-1 items-center">
        <div className="grid md:grid-cols-4 2xs:grid-cols-1 gap-y-4 xs:grid-cols-2 my-6 w-full lg:w-[80%]">
          {playerCards.map((card, index) => (
            <TopSectionCards
              key={index}
              img={card.img}
              name={card.name}
              totalEvents={card.totalEvents}
              sport={card.sport}
            />
          ))}
        </div>
        <div className="sm:w-[40%] 2xs:w-full xs:w-3/4 sticky top-5 lg:w-[20%] my-6">
          <AdCard
            img={ad}
            head="advertistment heading"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <p className="bg-[#2C9CF0] text-white py-[10px] px-[30px] w-max mt-6 mx-auto">See More</p>
    </section>
  );
};

export default TopSection;
