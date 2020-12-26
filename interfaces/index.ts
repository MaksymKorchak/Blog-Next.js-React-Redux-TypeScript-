import {ReactNode} from "react";
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ONE_POST = 'GET_ONE_POST';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export interface LayoutProps {
    children?: ReactNode;
    title?: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface State {
    posts: Post[];
    post: Post | {};
}

export interface Comments {
    id: number,
    postId: number;
    body: string;
}

export interface AllPosts {
    type: typeof GET_ALL_POSTS;
    payload: Post[];
}

export interface PostInfo {
    type: typeof GET_ONE_POST;
    payload: Post;
}

export interface CreatePost {
    type: typeof CREATE_NEW_POST;
}

export interface EditPost {
    type: typeof EDIT_POST;
}

export interface DeletePost {
    type: typeof DELETE_POST;
}

export interface CreatePostComment {
    type: typeof CREATE_POST_COMMENT;
}
