import {useDispatch, useSelector} from "react-redux";
import {State} from "../../interfaces";
import React, {useEffect} from "react";
import {getFeedPost} from "../../store/actions/actions";
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import FeedItemInfo from "../../components/FeedItemInfo/FeedItemInfo";

export default function PostPage() {
    const post = useSelector<State, State['post']>((State) => State.post);

    const dispatch = useDispatch();
    const postId = Number(useRouter().query.id);

    useEffect(() => {
        dispatch(getFeedPost(postId));
    }, [postId])

    return (
        <Layout title={"Post Details"}>
            <FeedItemInfo post={post}/>
        </Layout>
    )
};