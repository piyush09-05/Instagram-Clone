import React,{useState} from 'react';
import { menu } from './SidebarConfig';
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import CreatePostModel from '../Post/CreatePostModel';
import { useDisclosure } from "@chakra-ui/react";

const Sidebar = () => {
    const [activeTab,setActiveTab]=useState();
    const navigate=useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleTabClick=(title)=>{
        setActiveTab(title);
        if(title==="Profile"){
            navigate("/username");
        }
        else if(title==="Home"){
            navigate("/");
        }
        else if(title==="Create")
        {
          onOpen()
        }
       
    }
  return (
    <div id="sideHeader">
      <div id="containerdiv">
       <div > 

       <div id="compName">
          VSOCIAL
        </div>
        <div id="navlinksparent">
          {menu.map((item) => (
            <div id="navlinks" onClick={()=>handleTabClick(item.title)}>
              {activeTab=== item.title? item.activeIcon : item.icon}
              {activeTab=== item.title? <b >{item.title}</b> : item.title}
              {/* <nobr>{item.title}</nobr> */}
            </div>
          ))}
        </div>

       </div>
      </div>
      <CreatePostModel onClose={onClose} isOpen={isOpen}></CreatePostModel>
    </div>
  );
};

export default Sidebar;
