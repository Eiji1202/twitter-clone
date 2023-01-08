import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    // firebaseのデータベースにデータを追加する
    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "Shin_Engineer",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            value={tweetMessage}
            type="text"
            placeholder="いまどうしてる？"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox_imageInput"
          type="text"
          placeholder="画像のURLを入力してください"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button className="tweetBox_tweetButton" type="submit" onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
