import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Ken Adams",
      caption: "A beautiful flower",
      imageUrl:
        "https://live.staticflickr.com/65535/48550523206_0fa0295a97_z.jpg"
    },
    {
      username: "Joe Goldberg",
      caption: "A cute little puppy",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/The_Puppy.jpg"
    },
    {
      username: "Beck",
      caption: "Today is a great day!",
      imageUrl:
        "https://thumbs.dreamstime.com/b/vertical-shot-beautiful-scenery-autumn-trees-river-leading-to-stone-bridge-162521395.jpg"
    }
  ]);
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="images/logo.png"
          alt=""
        />
      </div>

      <h1>Hello</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
export default App;