import './Posts.css';
import Post from '../Post/Post';
import { useState } from 'react';

const Posts = () =>{

  const [posts, setPosts] = useState([{
    user:"kaun_piyush",
    postImage:"https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png",
    likes:37,
    timestamp:"2d"
  },
{
  user:"coolTiru123",
  postImage:"https://cdn.pixabay.com/photo/2023/05/29/16/48/horses-8026521_1280.jpg",
  likes:21,
  timestamp:"3hrs"
},
{
  user:"pooja_s",
  postImage:"https://cdn.pixabay.com/photo/2023/06/14/11/47/carnival-8062929_1280.jpg",
  likes:41,
  timestamp:"4d"
},
 
  {
    user:"anjali_jha",
    postImage:"https://cdn.pixabay.com/photo/2023/05/11/13/11/man-7986401_1280.jpg",
    likes:22,
    timestamp:"4d"
 }]);
    return (
      <div>
        {posts.map((post) => (
          <Post 
          user = {post.user}
           postImage = {post.postImage}
            likes = {post.likes}
             timestamp = {post.timestamp} />
        ))}
      </div>
    )

}
export default Posts;