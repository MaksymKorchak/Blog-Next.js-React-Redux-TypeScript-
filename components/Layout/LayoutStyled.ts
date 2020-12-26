import styled from "styled-components";

export const NAV = styled.nav`
font-family:cursive;
box-sizing:border-box;
display:flex;
justify-content:center;
width:100%;
height:70px;
background:grey;
color:white;
margin-bottom:30px;
padding:20px;

`

export const A = styled.a`
color:white;
text-transform:uppercase;
margin: 0 20px;
font-weight:bold;
font-size:20px;

&:hover{
color:black;
cursor:pointer;
border-bottom:2px solid teal;
}

`