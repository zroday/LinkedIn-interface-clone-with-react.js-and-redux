import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./Firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "@firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "posts")).onSnapshot = (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "DevMurilo",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: getFirestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            ></input>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
      <Post
        name="DevMurilo"
        description="This is a test"
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
