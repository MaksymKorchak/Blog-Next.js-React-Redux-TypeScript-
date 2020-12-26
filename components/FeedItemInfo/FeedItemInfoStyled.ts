import styled from "styled-components";

export const DIV = styled.div`
font-family:cursive;
margin:0 auto;
display:flex;
flex-direction:column;
width:500px;
text-align:center;
`;

export const INPUT = styled.input`
       font-family:cursive;
     color:teal;
    text-align:center;
    font-size:24px;
    font-weight:bold;
    margin-bottom:5px;

`;
export const TEXTAREA = styled.textarea`
    font-family:cursive;
    font-size:16px;
    min-height:200px;
   line-height:1.5rem;
    margin-bottom:10px;
    padding:10px;
`;
export const SPAN = styled.span`
    color:red;
    padding:10px;
    font-size:20px;
    
   `;
export const BUTTON = styled.button`
    font-size:16px;
    padding:10px;
    font-weight:bold;
    border:none;
    outline:none;
    background:lightgrey;
    border-radius:20px;
    width:150px;
    margin:0 auto;
    margin-bottom:10px;
    
    &:hover{
    background:teal;
    color:white;
    cursor:pointer;
    }
   `;
export const CommentField = styled.section`
max-width:500px;
display:flex;
flex-direction:column;
text-align:center;
margin:0 auto;
`;
export const CommentFieldTitle = styled.h3`
text-transform:uppercase;
color:grey;
`;
export const CommentTextarea = styled.textarea`
border:3px solid green;
height:50px;
margin-bottom:10px;
`;
