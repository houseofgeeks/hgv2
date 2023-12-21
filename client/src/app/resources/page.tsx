import React from "react";
import WingCard from "@/components/cards/WingCard";

const WingData = [
  {
    id: '1',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: '2',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: '3',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: '4',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: '5',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
  {
    id: '6',
    title: "Software Development Wing",
    description:
      "Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus",
  },
];

const page = () => {

  return (
    <div className="px-6 flex flex-col gap-8 py-6 container mx-auto">
      <h1 className="font-semibold md:text-lg lg:text-xl sm:text-base text-sm">
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