import {AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlinePlusCircle, AiFillPlusCircle} from "react-icons/ai"
import {BsFilePerson, BsFilePersonFill} from "react-icons/bs"
import {FaSearch} from "react-icons/fa"
import React from 'react';


export const menu = [
    { title: 'Home', icon: <nobr className="icon-container"><AiOutlineHome className="text-2xl" /></nobr>, activeIcon: <span className="icon-container"><AiFillHome className="text-2xl" /></span>},
    { title: 'Search', icon: <nobr className="icon-container"><AiOutlineSearch className="text-2xl" /></nobr>, activeIcon: <span className="icon-container"><FaSearch className="text-2xl" /></span> },
    { title: 'Create', icon: <nobr className="icon-container"><AiOutlinePlusCircle className="text-2xl" /></nobr>, activeIcon: <span className="icon-container"><AiFillPlusCircle className="text-2xl" /></span> },
    { title: 'Profile', icon: <nobr className="icon-container"><BsFilePerson className="text-2xl" /></nobr>, activeIcon: <span className="icon-container"><BsFilePersonFill className="text-2xl" /></span> }
  ];