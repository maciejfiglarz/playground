import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import PostsList from 'ui-component/posts/list';
import axios from 'utils/axios';
import { Post } from 'types';
// import { fetchById } from 'store/singlePostSlice';
// import { useAppDispatch } from 'store';
import { gridSpacing } from 'config/theme';
import SidebarTitle from 'ui-component/sidebars/Title';
import SidebarComments from 'ui-component/sidebars/comments';
import SidebarCategories from 'ui-component/sidebars/categories';
import { useParams } from 'react-router-dom';
import Single from 'ui-component/posts/Single';

const SinglePost = () => {
    const { id: idParam } = useParams();
    // const dispatch = useAppDispatch();
    const [post, setPost] = useState<Post | null>(null);

    const getPost = async () => {
        const response = await axios.get(`/api/post/${idParam}`);
        setPost(response.data);
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <Grid container justifyContent="space-between" spacing={gridSpacing}>
            <Grid item xs={3}>
                <SidebarCategories />
            </Grid>
            <Grid item xs={4}>
                {post && <Single {...post} />}
            </Grid>
            <Grid item xs={3}>
                <SidebarTitle text={'Komentarze'} />
                <SidebarComments />
            </Grid>
        </Grid>
    );
};

export default SinglePost;
