import frame from "../assets/frame.png";
import WingCard from "../components/resources/WingCard";

const Resources = () => {
  return (
    <div className="bg-[#010203] text-white pt-4 pb-6">
      <div className="px-24 mx-auto">
        <h1 className="font-normal text-2xl mb-6">Resources</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3, 4, 5, 6].map(({ title, description,id, image }) => (
            <WingCard
              title="Software Development Wing"
              description="Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus"
              id={1}
              image={frame}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Resources;
