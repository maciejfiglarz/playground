import { useState } from 'react';
//projects import
import { CommentData, Profile } from 'types';
import Avatar from 'ui-component/extended/Avatar';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    // ButtonBase,
    Grid,
    Card,
    ButtonBase,
    // Collapse,
    // FormHelperText,
    // Grid,
    // InputAdornment,
    Menu,
    MenuItem,
    Stack,
    // TextField,
    Typography
    // useMediaQuery
} from '@mui/material';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';

export interface ReplyCommentProps {
    reply: { id: string; profile: Profile; data: CommentData };
    toggleReply: () => void;
    // commentId: string;
    // handleReplayLikes: (i: string, j: string, k: string) => void;
    // onReply: () => void;
    // postId: string;
}

const ReplyComment = ({ reply ,toggleReply }: ReplyCommentProps) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<
        Element | ((element: Element) => Element) | null | undefined
    >(null);
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement> | undefined
    ) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* {Object.keys(replies).length > 0 && (

     )} */}
            <Grid item xs={12}>
                <Box sx={{ pl: 6.25 }}>
                    <Card
                        sx={{
                            background:
                                theme.palette.mode === 'dark'
                                    ? theme.palette.dark.main
                                    : theme.palette.grey[50],
                            padding: '16px 16px 8px',
                            mt: 1.25
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    wrap="nowrap"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Grid item>
                                        <Avatar
                                            sx={{ width: 24, height: 24 }}
                                            size="sm"
                                            alt="User 1"
                                            src={
                                                reply.profile &&
                                                reply.profile.avatar
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs zeroMinWidth>
                                        <Grid
                                            container
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <Grid item>
                                                <Typography
                                                    align="left"
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {reply.profile.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    align="left"
                                                    variant="caption"
                                                >
                                                    <FiberManualRecordIcon
                                                        sx={{
                                                            width: '10px',
                                                            height: '10px',
                                                            opacity: 0.5,
                                                            m: '0 5px'
                                                        }}
                                                    />{' '}
                                                    {reply.profile.time}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <ButtonBase
                                            sx={{ borderRadius: '12px' }}
                                            onClick={handleClick}
                                        >
                                            <Avatar
                                                variant="rounded"
                                                size="badge"
                                                sx={{
                                                    ...theme.typography
                                                        .commonAvatar,
                                                    ...theme.typography
                                                        .smallAvatar,
                                                    background:
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? theme.palette.dark
                                                                  .main
                                                            : theme.palette
                                                                  .secondary
                                                                  .light,
                                                    color:
                                                        theme.palette.mode ===
                                                        'dark'
                                                            ? theme.palette.dark
                                                                  .light
                                                            : theme.palette
                                                                  .secondary
                                                                  .dark,
                                                    zIndex: 1,
                                                    transition:
                                                        'all .2s ease-in-out',
                                                    '&[aria-controls="menu-list-grow"],&:hover':
                                                        {
                                                            background:
                                                                theme.palette
                                                                    .secondary
                                                                    .main,
                                                            color: theme.palette
                                                                .secondary.light
                                                        }
                                                }}
                                            >
                                                <MoreVertTwoToneIcon fontSize="small" />
                                            </Avatar>
                                        </ButtonBase>
                                        <Menu
                                            id="menu-comment-reply"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography align="left" variant="body2">
                                    {reply.data.text}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{
                                        color:
                                            theme.palette.mode === 'dark'
                                                ? 'grey.700'
                                                : 'grey.800'
                                    }}
                                >
                                    <Button
                                        onClick={() =>{}}
                                            // handleReplayLikes(
                                            //     postId,
                                            //     commentId,
                                            //     id
                                            // )
                                        
                                        variant="text"
                                        color="inherit"
                                        size="small"
                                        startIcon={
                                            <ThumbUpAltTwoToneIcon
                                                color={
                                                    reply.data.likes &&
                                                    reply.data.likes.like
                                                        ? 'secondary'
                                                        : 'inherit'
                                                }
                                            />
                                        }
                                    >
                                        {reply.data.likes &&
                                        reply.data.likes.value
                                            ? reply.data.likes.value
                                            : 0}{' '}
                                        likes
                                    </Button>
                                    <Button
                                        variant="text"
                                        onClick={toggleReply}
                                        size="small"
                                        color="inherit"
                                        startIcon={
                                            <ReplyTwoToneIcon color="primary" />
                                        }
                                    >
                                        odpowiedz
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Grid>
        </>
    );
};

export default ReplyComment;
