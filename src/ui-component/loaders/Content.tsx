import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&::after': {
                    content: '""',
                    background: 'white',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.8,
                    zIndex: 100
                }
            }}
        >
            <CircularProgress sx={{ zIndex: 101 }} />
        </Box>
    );
};
export default Loader;
