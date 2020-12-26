import styled from 'styled-components';

export const Section = styled.section`
font-family:cursive;
margin:0 100px;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:20px;
@media (max-width: 993px) {
& {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:  481px) {
& {
        display: block;
    }
`;


