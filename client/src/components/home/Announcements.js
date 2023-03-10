import AnnounceSection from "./AnnounceSection";

const Announcements = ({ feed }) => {
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
      <div className="mt-4">
        {[1, 2, 3, 4].map((items) => {
          return feed ? <AnnounceSection feed /> : <AnnounceSection />;
        })}
      </div>
    </div>
  );
};
export default Announcements;
