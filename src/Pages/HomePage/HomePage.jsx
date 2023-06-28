import './HomePage.css'
import { useState } from "react";
import Posts from '../../Components/Posts/Posts';
import Suggestions from '../../Components/Suggestions/Suggestions';

const HomePage = () =>{
    return(
        <div className="container">
          <div className="postsDiv">
            <Posts />
          </div>
          <div className="suggestionsDiv">
            <Suggestions />
          </div>
        </div>
    )

}

export default HomePage;