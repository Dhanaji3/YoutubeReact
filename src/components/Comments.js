import React, { useEffect, useState } from "react";
import { YOUTUBECOMMENTS } from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = ({ vId }) => {
  //apicall
  //.replace video id
  //useState
  //list (items)
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const data = await fetch(YOUTUBECOMMENTS.replace("VIDEO_ID", vId));
    const json = await data.json();
    setComments(json.items);
  };
  return (
    <div>
      {comments &&
        comments.map((comment, index) => {
          return <CommentCard key={index} info={comment} />;
        })}
    </div>
  );
};

export default Comments;
