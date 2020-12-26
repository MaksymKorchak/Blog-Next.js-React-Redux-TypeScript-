import React, {useEffect} from "react";
import {getFeedPosts} from "../store/actions/actions";
import {State} from '../interfaces';
import Layout from "../components/Layout";
import {useDispatch, useSelector} from 'react-redux';
import Feed from "../components/Feed/Feed";

export default function MainPage() {

    const posts = useSelector<State, State['posts']>((State) => State.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeedPosts());
    }, [posts])

    return (
        <Layout title="Home page | all Posts">
            {posts ? <Feed data={posts}/> : ''}
        </Layout>
    )
}
