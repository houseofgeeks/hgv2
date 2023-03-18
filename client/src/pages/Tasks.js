// import React from 'react'
import LevelTrack from "../components/resources/LevelTrack";
import { NavLink } from 'react-router-dom';
import AssignmentCard from "../components/resources/AssignmentCard";
import badge1 from '../assets/Resources/sdelevel1.svg'

const Tasks = () => {

  const levelData = [
    {
        index: 1,
        header: "HTML",
        text:["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    },
    {
        index: 2,
        header: "CSS 3",
        text:["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    },
    {
        index: 3,
        header: "Vanilla JavaScript",
        text:["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    },
    {
        index: 4,
        header: "React JS || JavaScript Framework",
        text:["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    },
    {
        index: 5,
        header: "Tailwind CSS",
        text:["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    },
    {
        index: 6,
        header: "Graph Animation Framework",
        text: ["Basic Systax","Basic Systax","Basic Systax","Basic Systax"]
    }
  ] 

  const assignmentData = [
    {
      index: 1,
      submission_link:"",
      description: "description link",
      status:"orange",
    },
    {
      index: 2,
      submission_link:"",
      description: "description link",
      status:"green",
    },
    {
      index: 3,
      submission_link:"",
      description: "description link",
      status:"red",
    },
    {
      index: 4,
      submission_link:"",
      description: "Description link",
      status:"orange",
    },
  ]

  return (
    <>
      <div className="bg-[#010203] text-white pt-4 pb-6">
        <div className="px-24 mx-auto">
        <h1 className="font-normal text-xl mb-6">
                <NavLink className='underline' to={`/resources`}>Resources</NavLink> /  
                <NavLink className='underline' to={`/resources/levels`} > Software Development Wing</NavLink> / 
                <NavLink className='' to={`/resources/levels/level`} > Level - 1</NavLink>
        </h1>
          <div className="grid gap-8 mb-8">
            {levelData.map(({index,header,text }) => (
              <>
              <LevelTrack 
                key={index}
                index={index}
                title={header}
                items={text}
              />
              </>
            ))}
          </div>

          {/* Assignment Section  */}
          <h1 className="font-semibold text-2xl mb-6">Assignments</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {assignmentData.map(({status}) => (
              <>
              <AssignmentCard status={status}/>
              </>
            ))}
          </div>

          {/* Skill Section */}
          <h1 className="font-semibold text-2xl mb-6">Skill Badge</h1>
        
          <div className="pt-[10px]">
            <div className="bg-[#131414] py-[20px] px-[50px] flex justify-left items-center"> 
              <div className="py-4 w-32">
                <img src={badge1} alt="badge" className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"></img>
              </div> 
              <div className="py-12  ml-12 pl-[4px]">
                <p className="text-[20px] font-semibold">Congratulation! You have Completed the Level 1 of SDE Wing Learning Resources.</p>
                <p className="text-[16px] ">Your hardwork and dedication have paid off. Keep up the great learning and continue to expand your knowledge and skills. Well Done! 👏</p>
              </div>  
            </div> 
          </div>

        </div>
      </div>
    </>
  )
}

export default Tasks