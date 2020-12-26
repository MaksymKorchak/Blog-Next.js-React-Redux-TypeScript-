import React, {FC} from "react";
import {Post} from "../../interfaces";
import FeedItem from "../FeedItem/FeedItem";
import {Section} from "./FeedStyled";


export interface FeedProps {
    data: Post[];
}

const Feed: FC<FeedProps> = ({data}) => {

    return (
     <Section>
         {data.map((post:Post)=>(
             <FeedItem key={post.id} post={post}/>
         ))}
     </Section>
    )
}

export default Feed;
