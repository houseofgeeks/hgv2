import React from "react";
import RatingCard from "./RatingCard";
import { ratingData } from "@/utils";

const ContestRating = () => {
  return (
    <div className="flex scrollbar-hide gap-3 overflow-scroll">
      {ratingData.map((item, index) => {
        return <RatingCard key={index} item={item} />;
      })}
    </div>
  );
};

export default ContestRating;
