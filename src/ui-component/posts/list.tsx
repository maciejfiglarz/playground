import { useState } from 'react';
//import project
import Navigation from './Navigation';
import InfiniteList from 'ui-component/InfinityList';

//material ui
import { Box } from '@mui/material';

const PostsList = () => {
    const [tab, setTab] = useState(0);
    return (
        <>
            <Navigation setTab={setTab} tab={tab} />
            <Box>
                {tab === 0 && <InfiniteList />}
                {tab === 1 && <InfiniteList />}
                {/* {tab === 2 && <>Grupy</>} */}
            </Box>
        </>
    );
};

export default PostsList;
