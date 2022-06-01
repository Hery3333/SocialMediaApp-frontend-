import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './home.css'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide />
        <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home