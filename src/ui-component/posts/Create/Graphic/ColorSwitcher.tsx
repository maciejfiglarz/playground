//material ui
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type Props = {
    currentBackgroundColor: string;
    setCurrentBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
    currentTextColor: string;
    setCurrentTextColor: React.Dispatch<React.SetStateAction<string>>;
};

// type SchematTextColors = {
//     [key: string]: string[];
// };

// const schematTextColors: SchematTextColors = {
//     black: ['white', '#ffb23e', '#F02000'],
//     white: ['#000000', '#c9000f']
// };

const Wrapper = styled(Box)(() => ({
    display: 'flex'
}));

// const Title = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//     fontSize: 10,
//     display: 'inline-block',
//     color: 'white',
//     padding: '1px 7px',
//     fontWeight: 600,
//     top: 2,
//     position:"relative"
// }));

// const List = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     padding: 5,
//     display: 'flex'
// }));

const ListItem = styled(Box)<{ color: string }>`
    background-color: ${(props) => props.color};
    width: 15px;
    height: 15px;
    cursor: pointer;
`;

const ColorSwitcher = ({
    currentBackgroundColor,
    setCurrentBackgroundColor,
    currentTextColor,
    setCurrentTextColor
}: Props) => {
    // const onChangeColor = (type: string, value: string) => {
    //     if (type === 'background') {
    //         setCurrentBackgroundColor(value);
    //         setCurrentTextColor(value === 'white' ? 'black' : 'white');
    //         console.log('val1', value, value === 'white' ? 'black' : 'white');
    //     } else {
    //         setCurrentTextColor(value);
    //     }
    // };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                transform: 'translateY(-100%)'
            }}
        >
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Button size="small">
                        Tekst
                        <ListItem
                            sx={{ ml: 0.7 }}
                            color={currentTextColor}
                        ></ListItem>
                    </Button>
                    <Button size="small">
                        Tło
                        <ListItem
                            sx={{ ml: 0.7 }}
                            color={currentBackgroundColor}
                        ></ListItem>
                    </Button>
                </Stack>
                {/* <Box>
                    <Title>Tekst</Title>
                    <List sx={{ mr: 4 }}>
                        {schematTextColors[currentBackgroundColor].map(
                            (color: string) => (
                                <ListItem
                                    onClick={() => onChangeColor('text', color)}
                                    color={color}
                                />
                            )
                        )}
                    </List>
                </Box>
                <Box>
                    <Title>Tło</Title>
                    <List sx={{ mr: 1 }}>
                        <ListItem
                            onClick={() => onChangeColor('background', 'black')}
                            color="black"
                        />
                        <ListItem
                            color="white"
                            onClick={() => onChangeColor('background', 'white')}
                        />
                    </List>
                </Box> */}
            </Wrapper>
        </Box>
    );
};
export default ColorSwitcher;
