import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//project imports
import Avatar from 'ui-component/extended/Avatar';
import Comment from './Comment';
// import AnimateButton from 'ui-component/extended/AnimateButton';
import {
    Post,
    CommentData,
    FormInputProps
    // Comment as CommentType
} from 'types';

//material ui
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/MainCard';
import {
    Button,
    ButtonBase,
    // CardMedia,
    // Collapse,
    // FormHelperText,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

//assets
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const validationSchema = yup.object().shape({
    name: yup.string().required('To pole nie może zostać puste!')
});

const SinglePost = ({ id, profile, data }: Post) => {
    const theme = useTheme();
    const { title, description, image, comments } = data;
    const { avatar, name: profilName } = profile;
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    // const [openComments, setOpenComments] = useState<CommentType[]>();

    const matchesXS = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: React.SyntheticEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorSharedEl, setAnchorSharedEl] = useState<Element | null>(null);

    const handleSharedClick = (event: React.MouseEvent) => {
        setAnchorSharedEl(event.currentTarget);
    };

    const handleSharedClose = () => {
        setAnchorSharedEl(null);
    };

    const methods = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { handleSubmit, control } = methods;

    let commentsResult: React.ReactElement[] = [];

    if (comments && comments.length > 0) {
        commentsResult = comments.map((comment) => (
            <Comment
                // postId={id}
                comment={comment}
                key={comment.id}
                user={comment.profile}
                // replyAdd={replyAdd}
                // handleCommentLikes={handleCommentLikes}
                // handleReplayLikes={handleReplayLikes}
            />
        ));
    }

    // ==============================|| COMMENT TEXTFIELD ||============================== //

    const FormInput = ({
        // bug,
        label,
        size,
        fullWidth = true,
        name,
        required,
        ...others
    }: FormInputProps) => {
        // let isError = false;
        // let errorMessage = '';
        // if (bug && Object.prototype.hasOwnProperty.call(bug, name)) {
        //     isError = true;
        //     errorMessage = bug[name].message;
        // }

        return (
            <>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    // ref={(el) => (ref.current[0] = el)}
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <TextField
                            label={label}
                            fullWidth={fullWidth}
                            type="text"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    // rules={{
                    //     required: 'To pole nie może zostać puste!'
                    // }}
                />
            </>
        );
    };

    const onSubmit = async (comment: CommentData) => {
        // handleChangeComment();
        // const commentId = uniqueId('#COMMENT_');
        // const newComment: Reply = {
        //     id: commentId,
        //     profile,
        //     data: {
        //         comment: comment.name,
        //         likes: {
        //             like: false,
        //             value: 0
        //         },
        //         replies: []
        //     }
        // };
        // commentAdd(id, newComment);
        // reset({ name: '' });
    };

    return (
        <MainCard border={true} sx={{ marginBottom: 5 }}>
            {/* {id} {profileId}
            {time} {name} */}
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Grid
                        container
                        wrap="nowrap"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>
                            <Avatar alt="User 1" src={avatar} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography
                                        align="left"
                                        variant="h5"
                                        component="div"
                                    >
                                        {profilName}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography align="left" variant="caption">
                                        <FiberManualRecordIcon
                                            sx={{
                                                width: '10px',
                                                height: '10px',
                                                opacity: 0.5,
                                                m: '0 5px'
                                            }}
                                        />{' '}
                                        {profile.time}
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
                                        ...theme.typography.commonAvatar,
                                        ...theme.typography.smallAvatar,
                                        background:
                                            theme.palette.mode === 'dark'
                                                ? theme.palette.dark.main
                                                : theme.palette.secondary.light,
                                        color:
                                            theme.palette.mode === 'dark'
                                                ? theme.palette.dark.light
                                                : theme.palette.secondary.dark,
                                        zIndex: 1,
                                        transition: 'all .2s ease-in-out',
                                        '&[aria-controls="menu-list-grow"],&:hover':
                                            {
                                                background:
                                                    theme.palette.secondary
                                                        .main,
                                                color: theme.palette.secondary
                                                    .light
                                            }
                                    }}
                                >
                                    <MoreVertTwoToneIcon fontSize="small" />
                                </Avatar>
                            </ButtonBase>
                            <Menu
                                id="menu-post"
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
                                <MenuItem onClick={handleClose}>Zgłoś</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>

                    {/* post - content */}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            ...theme.typography.body1,
                            margin: '15px 0'
                        }}
                        // sx={{
                        //     '& > p': {
                        //         ...theme.typography.body1,
                        //         mb: 0
                        //     }
                        // }}
                    >
                        {description}
                    </Grid>
                    <img style={{ width: '100%' }} src={image} alt={title} />

                    {/* post - comment, likes and replay history */}
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={2}
                            sx={{
                                mt: 0,
                                color:
                                    theme.palette.mode === 'dark'
                                        ? 'grey.700'
                                        : 'grey.800'
                            }}
                        >
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="text"
                                        // onClick={() => handlePostLikes(id)}
                                        color="inherit"
                                        size="small"
                                        startIcon={
                                            <ThumbUpAltTwoToneIcon
                                                color={
                                                    data &&
                                                    data.likes &&
                                                    data.likes.like
                                                        ? 'primary'
                                                        : 'inherit'
                                                }
                                            />
                                        }
                                    >
                                        {data && data.likes && data.likes.value
                                            ? data.likes.value
                                            : 0}
                                        <Typography
                                            color="inherit"
                                            sx={{
                                                fontWeight: 500,
                                                ml: 0.5,
                                                display: {
                                                    xs: 'none',
                                                    sm: 'block'
                                                }
                                            }}
                                        >
                                            likes
                                        </Typography>
                                    </Button>
                                    <Button
                                        // onClick={handleChangeComment}
                                        size="small"
                                        variant="text"
                                        color="inherit"
                                        startIcon={
                                            <ChatBubbleTwoToneIcon color="secondary" />
                                        }
                                    >
                                        {data.comments
                                            ? data.comments.length
                                            : 0}{' '}
                                        comments
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={handleSharedClick}
                                    size="large"
                                >
                                    <ShareTwoToneIcon
                                        sx={{ width: '1rem', height: '1rem' }}
                                    />
                                </IconButton>
                                <Menu
                                    id="menu-post"
                                    anchorEl={anchorSharedEl}
                                    keepMounted
                                    open={Boolean(anchorSharedEl)}
                                    onClose={handleSharedClose}
                                    variant="selectedMenu"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            marginRight: '14px',
                                            fontSize: '1.25rem'
                                        }
                                    }}
                                >
                                    <MenuItem onClick={handleSharedClose}>
                                        <FacebookIcon fontSize="inherit" />{' '}
                                        Udostepnij na Facebooku
                                    </MenuItem>
                                    <MenuItem onClick={handleSharedClose}>
                                        <TwitterIcon fontSize="inherit" />{' '}
                                        Udostepnij na Twitterze
                                    </MenuItem>
                                    <MenuItem onClick={handleSharedClose}>
                                        <ContentCopyTwoToneIcon fontSize="inherit" />{' '}
                                        Kopiuj link
                                    </MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* add new comment */}
                    <Grid item xs={12} sx={{ pt: 2 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid
                                    item
                                    sx={{
                                        display: { xs: 'none', sm: 'block' }
                                    }}
                                >
                                    <Avatar
                                        sx={{ mt: 0.75 }}
                                        alt="User 1"
                                        src={profile.avatar}
                                        size="xs"
                                    />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <FormProvider {...methods}>
                                        <FormInput
                                            fullWidth
                                            name="name"
                                            label="Treść komentarza..."
                                            size={
                                                matchesXS ? 'small' : 'medium'
                                            }
                                            // bug={errors}
                                        />
                                    </FormProvider>
                                </Grid>
                                <Grid item>
                                    {/* <AnimateButton> */}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        // size={matchesXS ? 'small' : 'large'}
                                        sx={{ mt: 0.5 }}
                                    >
                                        Dodaj
                                    </Button>
                                    {/* </AnimateButton> */}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                {commentsResult}
            </Grid>
        </MainCard>
    );
};

export default SinglePost;
