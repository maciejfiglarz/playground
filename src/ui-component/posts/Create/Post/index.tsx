// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     useQuery,
// } from 'react-query';

//project imports
import { TextField} from '@mui/material';

const CreatePost = () => {
    // const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();


    return (
        <>
            <TextField
                id="outlined-multiline-flexible"
                label="Tytuł"
                multiline
                rows={2}
                fullWidth
                sx={{ mb: 3 }}
                // value={value}
                // onChange={handleChange}
            />

            <TextField
                id="outlined-multiline-flexible"
                label="Opis"
                multiline
                rows={5}
                fullWidth
                sx={{ mb: 3 }}
                // value={value}
                // onChange={handleChange}
            />

        </>
    );
};

export default CreatePost;
