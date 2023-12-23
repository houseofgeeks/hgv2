import React from "react";
import WingCard from "@/components/cards/WingCard";
import { WingData } from "@/utils";

const page = () => {

  return (
    <div className="px-6 flex flex-col gap-8 py-6 container mx-auto">
      <h1 className="font-semibold text-2xl">
        Resources
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          WingData.map((item) => (
            <WingCard
              key={item.id}
              title={item.title}
              description={item.description}
              wingId={item.id}
            />
          ))
        }
      </section>
    </div>
  );
};
export default page;