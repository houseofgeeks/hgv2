import React from 'react'
import RatingCard from './RatingCard'

const ContestRating = () => {

    const ratingData = [
        {
            name :'Leetcode',
            rating : 1740,
            problemSolved :350,
            contest :12
        },
        {
            name :'Codeforces',
            rating : 1220,
            problemSolved :144,
            contest :36
        },
        {
            name :'Github',
            rating : 1740,
            problemSolved :350,
            contest :12
        },
    ]
  return (
    <div className='text-white flex justify-between items-center mt-6 '>
        {
            ratingData.map((item,i)=>{
                return(
                    <RatingCard key={i} item={item} />
                )
            })
        }
    </div>
  )
}

export default ContestRating