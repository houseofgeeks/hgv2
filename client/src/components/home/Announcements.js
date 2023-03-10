import AnnounceSection from "./AnnounceSection";

const Announcements = ({ feed, details }) => {
  console.log(details);
  console.log(feed);
  return (
    <div
      className={`min-h-[400px] ml-10 rounded-lg bg-[#0F1010] p-4 ${
        feed && "mt-10"
      }`}
    >
      {feed ? (
        <h1 className="text-slate-300 text-xl">HG Feed</h1>
      ) : (
        <h1 className="text-slate-300 text-xl">HG Announcements</h1>
      )}
      {feed ? (
        <div className="mt-4">
          {feed.map((items, i) => {
            if (i < 5) {
              return <AnnounceSection key={i} feed items={items} />;
            }
          })}
        </div>
      ) : (
        <div className="mt-4">
          {details.map((items, i) => {
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
