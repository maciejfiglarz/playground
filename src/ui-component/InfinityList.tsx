import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

//project imports
import { useAppDispatch, useAppSelector } from 'store';
import { pagination, selectPosts } from 'store/postsSlice';
import SinglePost from './posts/Single';
// import Loader from './Loader';

const InfiniteList = () => {
    const [page, setPage] = useState(1);
    const { data: items } = useAppSelector(selectPosts);
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
            <InfiniteScroll
                dataLength={items.length}
                next={updateData}
                hasMore={true}
                pullDownToRefreshThreshold={50}
                // todo
                // loader={<Loader />}
                loader={<div style={{ clear: 'both' }}>Loading...</div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map((post, index) => (
                    <SinglePost key={index} {...post} />
                ))}
            </InfiniteScroll>
        </>
    );
};

export default InfiniteList;
