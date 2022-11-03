import React from "react";

//project imports
import { Post as PostType } from "types";
import Post from "./Post";
import Link from "./Link";

//material ui

const Content = (props: PostType) => {
  const { type } = props;
  console.log("postX", props);
  return (
    <>
      {type === "post" && <Post {...props} />}
      {type === "link" && <Link {...props} />}
    </>
  );
};

export default Content;
