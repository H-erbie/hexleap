import React from "react";
import TopSection from "./top-section";
import BottomSection from "./bottom-section";

const MainSection = () => {
  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default MainSection;