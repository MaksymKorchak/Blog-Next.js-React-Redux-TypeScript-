import React, {FC} from "react";
import {Post} from "../../interfaces";
import {PostContainer, PostBody, PostTitle, BtnContainer, Button} from "./FeedItemStyled";
import {useDispatch} from "react-redux";
import {deleteFeedPost} from "../../store/actions/actions";
import Link from "next/link";

export interface FeedItemProps {
    post: Post;
}

const FeedItem: FC<FeedItemProps> = ({post}) => {

    const {id, title, body} = post;
    const dispatch = useDispatch();

    const deletePostData = () => {
        const shoudRemove = window.confirm(`Do you really want to DELETE - ${title}`)
        if (shoudRemove) {
            dispatch(deleteFeedPost(id));
        }
    }

    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
            <BtnContainer>
                <Link href={`/posts/${id}`}><Button>Watch Post</Button></Link>
                <Button onClick={deletePostData}>Delete Post</Button>
            </BtnContainer>
        </PostContainer>
    )
}

export default FeedItem;