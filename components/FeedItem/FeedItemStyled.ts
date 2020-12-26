import styled from "styled-components";

export const PostContainer = styled.div`
border:1px solid grey;
border-radius:10px;
padding:20px;
height:300px;
overflow:hidden;


&:hover{
box-shadow:0px 0px 20px 2px grey;
cursor:pointer;
}
`
export const PostBody = styled.p`
 display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`
export const PostTitle = styled.h3`
color:red;
text-transform:uppercase;
color:teal;
text-align:center;
`

export const BtnContainer = styled.div`
display:flex;
justify-content:center;
`
export const Button = styled.button`
font-size:16px;
padding:10px;
margin:10px;
outline:none;
border:none;

&:hover:first-child{
box-sizing:border-box;
color:teal;
border:2px solid teal;
cursor:pointer;
background:none;
}
&:hover:nth-child(2){
box-sizing:border-box;
color:red;
border:2px solid red;
cursor:pointer;
background:none;
}
`