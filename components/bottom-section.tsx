import React from "react";
import player from "@/public/Ticket_Mockup 3.png";
import BottomSectionCards from "./bottom-section-cards";
import CarouselBtns from "./carousel-btns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BottomSection = () => {
  const tickets = [
    {
      img: player,
      name: "Herbie",
      date: {
        monthDate: "oct 15",
        day: "sun",
        time: "4:30 pm",
      },
      place: "34 Events",
    },
    {
      img: player,
      name: "Herbie",
      date: {
        monthDate: "oct 15",
        day: "sun",
        time: "4:30 pm",
      },
      place: "34 Events",
    },
    {
      img: player,
      name: "Herbie",
      date: {
        monthDate: "oct 15",
        day: "sun",
        time: "4:30 pm",
      },
      place: "34 Events",
    },
  ];
  return (
    <section className="my-20 sm:w-[90%] mx-auto">
      <h2 className="text-5xl font-bold text-center">Collection Spotlight</h2>
      <p className="text-[13px] text-center mt-6">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      <div className="flex items-center gap-x-4">
        <CarouselBtns arrow={<ChevronLeft />} />
        <div className="grid md:grid-cols-3 2xs:grid-cols-1 gap-4  my-6  w-full">
          {tickets.map((card, index) => (
            <BottomSectionCards
              key={index}
              img={card.img}
              place={card.place}
              name={card.name}
              monthDate={card.date.monthDate}
              day={card.date.day}
              time={card.date.time}
              index={index}
            />
          ))}
        </div>
        <CarouselBtns arrow={<ChevronRight />} />
      </div>
    </section>
  );
};

export default BottomSection;
