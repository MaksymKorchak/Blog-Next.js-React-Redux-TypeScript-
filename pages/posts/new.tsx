import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {BUTTON, DIV, INPUT, SPAN, TEXTAREA} from "../../components/FeedItemInfo/FeedItemInfoStyled";
import {useDispatch} from "react-redux";
import {createFeedPost} from "../../store/actions/actions";

const newPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const dispatch = useDispatch();

    const addPost = () => {
        if(!title || !body){
            alert("Post can't br EMPTY!");
        }else{
            dispatch(createFeedPost(title, body));
            setTitle('');
            setBody('');
            alert("Success!");
        }
    }

    return (
        <Layout title={'Creating New Post'}>
            <DIV>
                <SPAN>Here you can CREATE new post</SPAN>
                <INPUT placeholder={'...title'} type="text" value={title || ''} onChange={(event) => setTitle(event.target.value)}/>
                <TEXTAREA placeholder={'...post body'} value={body || ''} onChange={(event) => setBody(event.target.value)}/>
                <BUTTON onClick={addPost}>Save Changes</BUTTON>
            </DIV>
        </Layout>
    )
}
export default newPost;