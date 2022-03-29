import React from 'react';
import styled from "styled-components"
const ReviewItem = ({ text }) => {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    );
};
const ReviewItemStyled = styled.div`
height: auto;
padding: 1rem 1rem;
border-left: 6px solid var(--border-color);
display: flex;
align-items: center;
background-color: var(--background-dark-color-2);
position: relative;
width:50;
&:not(:first-child){
    margin-left:2rem ;
}
&::after{
    content: "";
    position: absolute;
    left:4rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color:var(--background-dark-color-2) transparent transparent var(--background-dark-color-2);
}
p{
    padding: 1rem 0;
}
`;

export default ReviewItem;