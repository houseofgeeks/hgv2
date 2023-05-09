import React from 'react'
import ContestRating from '../components/profile/ContestRating'
import MainProfile from '../components/profile/MainProfile'
import ProfileBlogs from '../components/profile/ProfileBlogs'
import ProfileProjects from '../components/profile/ProfileProjects'

const Profile = () => {
  return (
    <div className='bg-[#010203] px-12 ss:px-24 py-8'>
        <MainProfile />
        <ContestRating />
        <ProfileProjects />
        <ProfileBlogs />
    </div>
  )
}

export default Profile