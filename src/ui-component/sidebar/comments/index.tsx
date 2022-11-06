import { useEffect, useState } from "react";

//projec
import axios from "utils/axios";
import SidebarTitle from "../Title";
import { List } from "@mui/material";

// import { useAppDispatch, useAppSelector } from 'store';
// import {
//     fetchRecent
//     // selectRecentComments
// } from 'store/commentsSlice';
import { Comment } from "types";
import NavItem from "./NavItem";
// import { Comment } from 'types';;

type PropsType = {
  text: string;
};

const CommentsList = ({ text }: PropsType) => {
  const [comments, setComments] = useState<Comment[] | []>([]);
  console.log("comments", comments);
  // const { recent: comments } = useAppSelector(selectRecentComments);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //     dispatch(fetchRecent());
  // }, [dispatch]);

  const getPost = async () => {
    const response = await axios.get(`/api/comments`);
    console.log("repsonse", response);
    setComments(response.data);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {/* <SidebarTitle text={text} />
      {comments.map((comment, i) => (
        <Item key={i} {...comment} />
      ))} */}

      <List subheader={<SidebarTitle text={text} />}>
        {comments.map((item: Comment) => (
          <NavItem key={item.id} {...item} />
        ))}
      </List>
    </>
  );
};
export default CommentsList;
