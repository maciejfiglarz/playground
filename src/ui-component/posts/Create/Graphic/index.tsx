import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     useQuery,
// } from 'react-query';

//project imports
import { TextField } from '@mui/material';

//material ui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import { styled } from '@mui/system';

//assets
import preview from './preview.jpg';
import ColorsSwitcher from './ColorSwitcher';
import Uploader from './Uploader';
import { useTheme } from '@mui/material/styles';

const Title = styled(Box)<{ color: string }>`
    color: ${(props) => props.color};
    padding: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`;
const Description = styled(Box)<{ color: string }>`
    color: ${(props) => props.color};
    padding: 10px;
    text-align: center;
`;

const CreatePost = () => {
    const theme = useTheme();
    const [isTopTitle, setIsTopTitle] = useState(false);
    const [topTitle, setTopTitle] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [currentBackgroundColor, setCurrentBackgroundColor] =
        useState('white');
    const [currentTextColor, setCurrentTextColor] = useState('black');

    return (
        <>
            <FormGroup sx={{ mb: 1 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={(e) => setIsTopTitle(e.target.checked)}
                            checked={isTopTitle}
                        />
                    }
                    label="Dodaj górny tytuł"
                />
            </FormGroup>
            {isTopTitle && (
                <TextField
                    id="outlined-multiline-flexible"
                    label="Górny tytuł"
                    multiline
                    rows={2}
                    fullWidth
                    sx={{ mb: 3 }}
                    value={topTitle}
                    onChange={(e) => setTopTitle(e.target.value)}
                />
            )}

            <TextField
                id="outlined-multiline-flexible"
                label="Tytuł"
                multiline
                rows={2}
                fullWidth
                sx={{ mb: 3 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
                id="outlined-multiline-flexible"
                label="Opis"
                multiline
                minRows={5}
                fullWidth
                sx={{ mb: 10 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Box
                sx={{
                    m: '0 auto 30px auto',
                    padding: 1.5,
                    backgroundColor: currentBackgroundColor,
                    position: 'relative',
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: 0.8
                }}
            >
                <Uploader />
                <ColorsSwitcher
                    currentBackgroundColor={currentBackgroundColor}
                    setCurrentBackgroundColor={setCurrentBackgroundColor}
                    currentTextColor={currentTextColor}
                    setCurrentTextColor={setCurrentTextColor}
                />
                {isTopTitle && topTitle && (
                    <Title color={currentTextColor}>{topTitle}</Title>
                )}
                <Box sx={{ textAlign: 'center', width: '100%' }}>
                    <img
                        style={{
                            width: '100%',
                            margin: '0 auto',
                            maxWidth: '600px'
                        }}
                        src={preview}
                    />
                </Box>

                {isTopTitle && topTitle && (
                    <Title color={currentTextColor}>{title}</Title>
                )}

                {description && (
                    <Description color={currentTextColor}>
                        {description}
                    </Description>
                )}
            </Box>
        </>
    );
};

export default CreatePost;
