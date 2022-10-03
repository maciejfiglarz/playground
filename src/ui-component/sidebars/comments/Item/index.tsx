import { Comment } from 'types';

//project import
import Avatar from 'ui-component/extended/Avatar';

//material ui
import { Box, Grid, Typography } from '@mui/material';

const Item = ({ id, profile, data }: Comment) => {
    const { avatar, name } = profile;
    const { text } = data;
    return (
        <Box>
            <Grid container wrap="nowrap" alignItems="center" sx={{ mb: 1.5 }}>
                <Avatar
                    sx={{ width: 34, height: 34, mr: 1 }}
                    alt="Comment"
                    src={avatar}
                />
                <Box>
                    <Typography align="left" variant="body2">
                        {text}
                    </Typography>
                    <Typography align="left" variant="h5" component="div">
                        {name}
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};
export default Item;
