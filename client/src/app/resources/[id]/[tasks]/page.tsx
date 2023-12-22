
import AssignmentCard from '@/components/cards/AssignmentCard';
import TaskCard from '@/components/cards/TaskCard';
import Link from 'next/link'
import React from 'react'

const tasks = [
  {
    title: "HTML",
    subtitles: [
      {
        title: 'Basic Syntax',
      },
      {
        title: 'Hyperlinks & Images',
      },
      {
        title: 'Forum Input',
      },
    ],
    id: '1'
  },
  {
    title: "CSS",
    subtitles: [
      {
        title: 'Basic Syntax',
      },
      {
        title: 'Hyperlinks & Images',
      },
      {
        title: 'Forum Input',
      },
    ],
    id: '2'
  },
  {
    title: "React Js | Javascript Framework",
    subtitles: [
      {
        title: 'Basic Syntax',
      },
      {
        title: 'Hyperlinks & Images',
      },
      {
        title: 'Forum Input',
      },
    ],
    id: '3'
  },
];

const page = ({ params }: { params: { tasks: string } }) => {
  return (
    <div className="px-6 flex flex-col gap-8 py-6 pb-10 container mx-auto">
      <h1 className="font-base md:text-lg lg:text-xl sm:text-base text-sm flex items-center gap-1">
        <Link
          href={'/resources'}
          className='hover:text-primary-color'
        >
          <span className='hidden sm:flex underline'>Resources</span>
          <span className='flex sm:hidden'>..</span>
        </Link>
        <span>
          /
        </span>
        <Link
          href={'/resources'}
          className='hover:text-primary-color'
        >
          <span className='hidden sm:flex underline'>Software Development Wing</span>
          <span className='flex sm:hidden'>..</span>
        </Link>
        <span>
          /
        </span>
        <span className='whitespace-nowrap'>
          Level 1
        </span>
      </h1>

      <section className="flex flex-col gap-6">
        {
          tasks.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              subtitles={item.subtitles}
              id={item.id}
            />
          ))
        }
      </section>

      {/* assignment section  */}

      <section className='flex flex-col gap-6'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>
          Assignments
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7'>
          {
            [1, 2, 3, 4, 5].map((item, index) => (
              <AssignmentCard
                key={'assignment' + index}
                isSubmitted={item % 3 === 0 ? 'NOT_SUBMITTED' : item % 3 === 1 ? 'SUBMITTED' : 'VERIFIED'}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default page
