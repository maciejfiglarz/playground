import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { TablerIcon } from "@tabler/icons";

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
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

export type Likes = {
  like: boolean;
  value: number;
};

export type ReplyComment = {
  id: string;
  user: User;
  text: string;
  likes: Likes;
  createdAt: string;
  // voteUp: 0;
  // voteDown: 2;
  // video?: string;
  replies?: Comment[];
};


export type Comment = {
  id: string;
  user: User;
  text: string;
  likes: Likes;
  createdAt: string;
  // voteUp: 0;
  // voteDown: 2;
  // video?: string;
  replies?: Comment[];
};



// export interface PostData {
//   title?: string;
//   slug: string;
//   description: string;
//   type: string;
//   // imageUrl?: string;
//   image: string;
//   voteDown: number;
//   voteUp: number;
//   isActive: boolean;
//   isWaiting: boolean;
//   comments:[]
// }

export interface Report {
  id: string;
  text: string;
  user: User;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string | null;
  slug: string;
  description: string | null;
  type: string;
  image: string;
  voteDown: number;
  voteUp: number;
  isActive: boolean;
  isWaiting: boolean;
  comments: Comment[];
  user: User;
  prefix: string | null;
  youtubeID: string | null;
  createdAt: string;
  linkSiteUrl: string | null;
}

export interface Category {
  id: string;
  name: string;
  thumb: string;
  cover: string;
  slug: string;
  description?: string;
}


export type User = {
  id: string;
  email: string;
  login: string;
  avatar: string;
  cover: string;
};

export interface FormInputProps {
  // bug: KeyedObject;
  fullWidth?: boolean;
  size?: "small" | "medium" | undefined;
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
