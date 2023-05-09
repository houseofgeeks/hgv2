import frame from "../../assets/Resources/Frame2.svg";
import frame2 from "../../assets/Resources/FrameSub.svg";
import frame3 from "../../assets/Resources/green.svg";

const AssignmentCard = ({ status }) => {
  return (
    <>
      <div className="first:mt-0 my-3 xs:my-0">
        <img
          src={
            status === "orange" ? frame2 : status === "green" ? frame3 : frame
          }
          alt={`title`}
          className="w-full"
        />
        <div className="relative mb-4 flex w-full flex-wrap items-stretch pt-[8px] text-xs ss:text-base">
          {status === "red" && (
            <button
              type="button"
              class="relative m-0 block w-[1px] min-w-0 flex-auto bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mr-2"
            >
              + Add Links
            </button>
          )}

          <button
            type="button"
            class="relative m-0 block w-[1px] min-w-0 flex-auto bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 ml-2"
          >
            Read Description
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignmentCard;
