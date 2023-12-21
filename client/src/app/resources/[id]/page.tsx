import LevelCard from '@/components/cards/LevelCard';
import Link from 'next/link'
import React from 'react'

const levels = [
  {
    title: "Level1 | Introduction to Frontend Development",
    img: [1, 2, 3, 4],
    img_count: 84,
    id: '1'
  },
  {
    title: "Level2 | Introduction to Backend Development",
    img: [1, 2, 3, 4],
    img_count: 50,
    id: '2'
  },
  {
    title: "Level3 | Devops",
    img: [1, 2, 3, 4],
    img_count: 16,
    id: '3'
  },
];

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="px-6 flex flex-col gap-8 py-6 container mx-auto">
      <h1 className="font-base md:text-lg lg:text-xl sm:text-base text-sm flex items-center gap-1">
      <Link
          href={'/resources'}
          className='hover:text-primary-color'
        >
          <span className='hidden sm:flex underline'>Resources</span>
          <span className='flex sm:hidden'>..</span>
        </Link>
        <span>
          / Software Development Wing
        </span>
      </h1>

      <section className="flex flex-col gap-6">
        {
          levels.map((item) => (
            <LevelCard
              key={item.id}
              title={item.title}
              count={item.img_count}
              levelId={item.id}
              resourceId={params.id}
            />
          ))
        }
      </section>
    </div>
  )
}

export default page
