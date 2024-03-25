import React from "react";

interface CarouselBtnsProps {
  arrow: any;
}
const CarouselBtns: React.FC<CarouselBtnsProps> = ({ arrow }) => {
  return <button className="border p-3 py-4 z-10 border-[#2C9CF0] text-[#2C9CF0]">{arrow}</button>;
};

export default CarouselBtns;
