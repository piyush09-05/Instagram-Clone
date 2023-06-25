import React,{useState} from 'react'
import {BsBookmark,BsBookmarkFill,BsGrid3X3Gap,BsGrid3X3GapFill} from 'react-icons/bs'
import './UserPost.css'
import UserPostCard from './UserPostCard'

const UserPost = () => {
    const [activeTab,setActiveTab]=useState();
    const tabs=[
        {
            tab:"Post",
            icon:<BsGrid3X3Gap></BsGrid3X3Gap>,
            activeicon: <BsGrid3X3GapFill></BsGrid3X3GapFill>
        },
        {
            tab:"Saved",
            icon: <BsBookmark></BsBookmark>,
            activeicon:<BsBookmarkFill></BsBookmarkFill>
        }
    ]

    const handleTabClick=(title)=>{
        setActiveTab(title);
    }

  return (
    <div>
      <div id="tabswrapper">
        {tabs.map((item)=> <div id="pwrapper" onClick={()=>handleTabClick(item.tab)}>
        {activeTab=== item.tab? <b style={{marginLeft: '10vw'}}>{item.tab}</b> : <p style={{marginLeft: '10vw'}}>{item.tab}</p>}
        {activeTab=== item.tab? <p style={{marginRight: '5vw'}}>{item.activeicon} </p>: <p style={{marginRight: '5vw'}}>{item.icon}</p>}
            
            
        </div>)}

        
      </div>
      <div>
        <div style={{display: 'flex',flexWrap: 'wrap'}}>
            {[1,1,1].map((item)=><UserPostCard></UserPostCard>)}
        </div>
      </div>
    </div>
  )
}

export default UserPost
