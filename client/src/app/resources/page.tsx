import React from "react";
import WingCard from "@/components/cards/WingCard";
import { WingData } from "@/utils";

const page = () => {
  return (
    <div className="flex flex-col gap-8 py-6 pb-10 container mx-auto">
      <h1 className="font-semibold md:text-lg lg:text-xl sm:text-base text-sm">
        Resources
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {WingData.map((item) => (
          <WingCard
            key={item.id}
            title={item.title}
            description={item.description}
            wingId={item.id}
          />
        ))}
      </section>
    </div>
  );
};
export default page;
