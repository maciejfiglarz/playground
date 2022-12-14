import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//project imports
import { useAppDispatch, useAppSelector } from "store";
import { pagination, selectPosts } from "store/postsSlice";
import SinglePost from "./posts/Single";
import Loader from "./loaders/Content";
import { Box } from "@mui/system";
// import Loader from './Loader';

const InfiniteList = () => {
  const [page, setPage] = useState(0);
  const { data } = useAppSelector(selectPosts);
  const { posts, total } = data;
  const dispatch = useAppDispatch();

  const updateData = () => {
    dispatch(pagination({ page }));
    setPage((prev) => page + 1);
  };
  useEffect(() => {
    dispatch(pagination({ page }));
    setPage((prev) => page + 1);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {/* {posts.length > 0 ? ( */}
        <InfiniteScroll
          dataLength={total}
          next={updateData}
          hasMore={true}
          pullDownToRefreshThreshold={150}
          loader={<div style={{ clear: "both" }}>Loading...</div>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>To już koniec...</b>
            </p>
          }
        >
          {posts.map((post, index) => {
            return <SinglePost key={index} {...post} />;
          })}
        </InfiniteScroll>
      {/* ) : (
        <Loader />
      )} */}
    </Box>
  );
};

export default InfiniteList;
