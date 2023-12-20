import Announcements from "./Announcements";

interface RightbarProps {
  announcements?: string;  // it will be an array added string for now
  feeds?: string; // it will be an array added string for now
  loading: boolean;
  error: any;
}

const feeds=[
  {
    id:1,
    feedDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. ",
    upVotes:[1,2,3,4,5]
  },
  {
    id:2,
    feedDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes:[1,2,3,4,5]
  },
  {
    id:3,
    feedDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes:[1,2,3,4,5]
  },
  {
    id:4,
    feedDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    upVotes:[1,2,3,4,5]
  }
]

const details=[
  {
    id:1,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem",
  },
  {
    id:2,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id:3,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem",
  },
  {
    id:4,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id:5,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    id:6,
    announcementDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  }
]


const Rightbar = () => {
  return (
    <div className="flex-[0.75] mt-8 sm:mt-0">
      <div>
        <Announcements details={details} />
        <Announcements feeds={feeds} />
      </div>
    </div>
  );
};

export default Rightbar;
