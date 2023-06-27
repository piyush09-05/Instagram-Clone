import { Avatar } from "@mui/material";
import './Suggestions.css'

const Suggestions = () =>{
    return (
        <div className="suggestions">
           <div className="suggestions_title">Suggestions for you</div>
           <div className="suggestions_usernames">

            <div className="suggestion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">Piyush</span>
                        <span className = 'relation'>New to instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>

            <div className="suggestion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">Piyush</span>
                        <span className = 'relation'>New to instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>

            <div className="suggestion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">Piyush</span>
                        <span className = 'relation'>New to instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>

            <div className="suggestion_username">
                <div className="username_left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                        <span className="username">Piyush</span>
                        <span className = 'relation'>New to instagram</span>
                    </div>
                </div>
                <button className="follow_button">Follow</button>
            </div>
           </div>
        </div>
    )
}
export default Suggestions;