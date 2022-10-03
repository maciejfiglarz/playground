import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { TablerIcon } from '@tabler/icons';

export type OverrideIcon =
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
          muiName: string;
      })
    | TablerIcon
    | React.ReactElement
    | any;

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

export type NavItemType = {
    id: string;
    title: string;
    icon: OverrideIcon;
    url: string;
};

export interface Profile {
    id: string;
    avatar: string;
    name: string;
    time: string;
}

export type Likes = {
    like: boolean;
    value: number;
};

export type ReplyComment = {
    id: string;
    profile: Profile;
    data: CommentData;
};
export type CommentData = {
    name?: string;
    text?: string;
    likes?: Likes;
    // video?: string;
    replies?: ReplyComment[];
};

export interface PostData {
    title?: string;
    description: string;
    imageUrl?: string;
    image: string;
    comments?: Comment[];
    likes?: Likes;
}

export interface Post {
    id?: string;
    data: PostData;
    profile: Profile;
}

export interface Category {
    id: string;
    name: string;
    thumb: string;
    cover: string;
    slug: string;
    description?: string;
}

export type Comment = {
    id: string;
    profile: Profile;
    data: CommentData;
};

export type User = {
    id: string;
    email: string;
    password: string;
    name: string;
};

export interface FormInputProps {
    // bug: KeyedObject;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | undefined;
    label: string;
    name: string;
    required?: boolean;
    InputProps?: {
        label: string;
        startAdornment?: React.ReactNode;
    };
}

export interface StringColorProps {
    id?: string;
    label?: string;
    color?: string;
    primary?: string;
    secondary?: string;
}

export interface JWTData {
    userId: string;
}

/** ---- Common Functions types ---- */

export type StringBoolFunc = (s: string) => boolean;
export type StringNumFunc = (s: string) => number;
export type NumbColorFunc = (n: number) => StringColorProps | undefined;
export type ChangeEventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;
