import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//project imports
import { useAppDispatch, useAppSelector } from "store";
import { pagination, selectPosts } from "store/postsSlice";
import SinglePost from "./posts/Single";
// import Loader from './Loader';

const InfiniteList = () => {
  const [page, setPage] = useState(0);
  const { data } = useAppSelector(selectPosts);
  const { posts,  total } = data;
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
    <>
      {posts.length > 0 ? (
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
            console.log("post", post);
            return <SinglePost key={index} {...post} />;
          })}
        </InfiniteScroll>
      ) : (
        <div>Brak rezultatów</div>
      )}
    </>
  );
};

export default InfiniteList;
