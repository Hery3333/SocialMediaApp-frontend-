import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png"
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div className="navIcons">
            <img src={Home}/>
            <UilSetting/>
            <img src={Noti}/>
            <img src={Comment}/>
        </div>
        <TrendCard/>

        <button className='button r-button'>
            Share
        </button>
    </div>
  )
}

export default RightSide