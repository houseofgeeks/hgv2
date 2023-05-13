import AnnounceSection from "./AnnounceSection";

const Announcements = ({ feed, details }) => {

  return (
    <div
      className={`xs:min-h-[400px] sm:ml-10 rounded-lg bg-[#0F1010] p-5 ${
        feeds && "mt-10"
      }`}
    >
      {feeds ? (
        <h1 className="text-slate-300 text-xl">HG Feed</h1>
      ) : (
        <h1 className="text-slate-300 text-xl">HG Announcements</h1>
      )}
      {feeds ? (
        <div className="mt-4">
          {feeds?.map((items, i) => {
            if (i < 5) {
              return <AnnounceSection key={i} feed items={items} />;
            }
          })}
        </div>
      ) : (
        <div className="mt-4">
          {details?.map((items, i) => {
            if (i < 5) {
              return <AnnounceSection key={i} items={items} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
export default Announcements;
