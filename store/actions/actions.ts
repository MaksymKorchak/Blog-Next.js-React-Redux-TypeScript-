import {
    AllPosts,
    CREATE_NEW_POST,
    CREATE_POST_COMMENT,
    CreatePost,
    CreatePostComment,
    DELETE_POST,
    DeletePost,
    EDIT_POST,
    EditPost,
    GET_ALL_POSTS,
    GET_ONE_POST,
    Post,
    PostInfo
} from '../../interfaces';
import axios from "axios";

const apiUrl: string = 'https://simple-blog-api.crew.red';

export const getAllPosts = (payload: Post[]): AllPosts => ({
    type: GET_ALL_POSTS,
    payload,
})
export const getPost = (payload: Post): PostInfo => ({
    type: GET_ONE_POST,
    payload
})
export const editPost = (): EditPost => ({
    type: EDIT_POST
})
export const deletePost = (): DeletePost => ({
    type: DELETE_POST
})
export const createPost = (): CreatePost => ({
    type: CREATE_NEW_POST
})
export const createPostComment = (): CreatePostComment => ({
    type: CREATE_POST_COMMENT
})
export const getFeedPosts = () => (dispatch: any) => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
        (resp.status === 200) ? dispatch(getAllPosts(resp.data)) : console.log('Something going wrong')
    })
}

export const getFeedPost = (id: number) => (dispatch: any) => {
    if (id) {
        axios.get(`${apiUrl}/posts/${id}`, {
            params: {
                _embed: 'comments',
            }
        }).then((resp) => {
            (resp.status === 200) ? dispatch(getPost(resp.data)) : console.log('Something going wrong')
        }).catch((err) => console.log(err));
    }
};

export const createFeedPost = (title: string, body: string) => (dispatch: any) => {
    if (title && body) {
        axios.post(`${apiUrl}/posts`, {
            title,
            body
        }).then((resp) => {
            (resp.status === 201) ? dispatch(createPost()) : console.log('Something going wrong')
        }).catch((err) => console.log(err));
    }
}

export const updateFeedPost = (id: number, title: string, body: string) => (dispatch: any) => {
    if (id && title && body) {
        axios.put(`${apiUrl}/posts/${id}`, {
            title,
            body
        }).then((resp) => {
            (resp.status === 200) ? dispatch(editPost()) : console.log('Something going wrong')
        }).catch((err) => console.log(err));
    }
}

export const deleteFeedPost = (id: number) => (dispatch: any) => {
    if (id) {
        axios.delete(`${apiUrl}/posts/${id}`)
            .then((resp) => {
                (resp.status === 200) ? (dispatch(deletePost()) && dispatch(getFeedPosts())) : console.log('Something going wrong')
            }).catch((err) => console.log(err));
    }
}

export const createFeedPostComment = (postId: number, body: string) => (dispatch: any) => {
    if (postId && body) {
        axios.post(`${apiUrl}/comments`, {
            postId,
            body
        }).then((resp)=>{
            (resp.status === 201) ? (dispatch(createPostComment() && dispatch(getFeedPost(postId)))) : console.log('Something going wrong')
        }).catch((err) => console.log(err));
    }
}