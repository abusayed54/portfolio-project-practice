import React from 'react';
import styled from 'styled-components'
const Title = ({ title, span }) => {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span> </h2>
        </TitleStyled>
    );
};
const TitleStyled = styled.div`
position: relative;
margin-bottom: 2rem;
h2{
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width:496px){
            font-size: 2.8rem;
        }
    @media screen and (max-width:370px){
            font-size: 2rem;
        }
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        width: 7.4rem;
        height: .33rem;
        background-color: var(--background-light-color-2);
        border-radius: 15px;
    }
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 3.5rem;
        height: .33rem;
        left:0;
        background-color: var(--primary-color);
        border-radius: 15px;
    }
    span{
        font-weight:900;
        color:var(--title-visual-color);
        font-size: 5rem;
        position: absolute;
        left:0;
        top: 10%;
        z-index: -1;
        @media screen and (max-width:620px){
            font-size: 4rem;
        }
        @media screen and (max-width:496px){
            font-size: 3rem;
        }
    }
}
`;
export default Title;