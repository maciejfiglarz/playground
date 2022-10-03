//material ui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
// import { useTheme } from '@mui/material/styles';

const Uploader = () => {
    // const theme = useTheme();
    return (
        <Stack
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                transform: 'translateY(-100%)',
                // backgroundColor: theme.palette.primary.main
            }}
            direction="row"
            spacing={2}
        >
            <Button size="small" startIcon={<CloudUploadIcon />}>
                Z dysku
            </Button>
            <Button size="small" startIcon={<LinkIcon />}>
                Ze schowka
            </Button>
        </Stack>
    );
};

export default Uploader;
