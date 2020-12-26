import React, {useState, useEffect} from "react";
import {
    BUTTON,
    CommentField,
    CommentFieldTitle,
    CommentTextarea,
    DIV,
    INPUT,
    SPAN,
    TEXTAREA
} from "./FeedItemInfoStyled";
import {useDispatch} from "react-redux";
import {createFeedPostComment, updateFeedPost} from "../../store/actions/actions";

const FeedItemInfo = ({post}: any) => {
    const {id, title, body, comments} = post;
    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState<string>(title);
    const [newBody, setNewBody] = useState<string>(body);
    const [newComment, setNewComment] = useState<string>('');


    useEffect(() => {
        setNewTitle(title);
        setNewBody(body);
    }, [title, body]);

    const updatePost = () => {
        if (newTitle && newBody) {
            dispatch(updateFeedPost(id, newTitle, newBody));
            alert("Success!");
        }
    }
    const addCommentToPost = () => {
        if (newComment) {
            dispatch(createFeedPostComment(id,newComment));
            setNewComment('');
        }
    }
    return (
        <>
            <DIV>
                <SPAN>Here you can CHANGE post details</SPAN>
                <INPUT type="text" value={newTitle || ''} onChange={(event) => setNewTitle(event.target.value)}/>
                <TEXTAREA value={newBody || ''} onChange={(event) => setNewBody(event.target.value)}/>
                <BUTTON onClick={updatePost}>Save Changes</BUTTON>
            </DIV>
            <CommentField>
                <CommentFieldTitle>Comments &darr;</CommentFieldTitle>
                {comments ? comments.map((comment: any, index: number) => {
                        return (
                            <div key={comment.id}>
                                <hr/>
                                <h3>{index + 1} - {comment.body}</h3>
                            </div>
                        )
                    })
                    : ''}
                <CommentTextarea value={newComment} placeholder={`Add comment to Post - ${title}`}
                                 onChange={(event) => setNewComment(event.target.value)}
                />
                <BUTTON onClick={addCommentToPost}>Send Comment</BUTTON>
            </CommentField>
        </>
    )
}
export default FeedItemInfo;