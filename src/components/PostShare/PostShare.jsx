import React ,{ useState, useRef } from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from '@iconscout/react-unicons'


const PostShare = () => {

    const [image,setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) =>{
        
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }

  return (
    <div className='PostShare'>
        <img src={ProfileImage} alt=''/>
        <div>
            <input type='text' placeholder="What's happening "/>
        <div className="postOptions">
            <div className="option photo" onClick={() => imageRef.current.click()}>
                <UilScenery/>
                Photo
            </div>
            <div className="option video">
                <UilPlayCircle/>
                Video
            </div>
            <div className="option location">
                <UilLocationPoint/>
                Location
            </div>
            <div className="option schedule">
                <UilSchedule/>
                Schedule
            </div>
            <button className='button ps-button'>
                Share
            </button>
            <div style={{ display: "none"}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image && (
            <div className="previewImage">
                <UilTimes onClick={()=> setImage(null)} />
                <img src={image.image}/>
            </div>
        )}
        </div>
    </div>
  )
}

export default PostShare