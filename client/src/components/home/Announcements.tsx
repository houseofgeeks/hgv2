import React from "react";
import AnnounceSection from "./AnnounceSection";

interface AnnouncementsProps {
  feeds?: any[];
  details?: any[];
}

const Announcements: React.FC<AnnouncementsProps> = ({
  feeds,
  details,
}: AnnouncementsProps) => {
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
              return <AnnounceSection key={i} feed={items} items={items} />;
            }
            return null;
          })}
        </div>
      ) : (
        <div className="mt-4">
          {details?.map((items, i) => {
            if (i < 5) {
              return <AnnounceSection key={i} items={items} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default Announcements;
