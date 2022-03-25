import React from 'react';
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi I am <span>Abu Sayeed</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos aspernatur eaque quisquam repellendus maxime! Debitis, necessitatibus. Impedit, architecto ut?</p>
                <div className="icons">
                    <div className="icon i-facebook">
                        <FacebookIcon />
                    </div>
                    <div className="icon i-github">
                        <GitHubIcon />
                    </div>
                    <div className="icon i-youtube">
                        <YouTubeIcon />
                    </div>
                </div>
            </div>
        </HomePageStyled>
    );
};
const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;
.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons{
            display: flex;
           margin: 1rem;
            justify-content: center;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                cursor: pointer;
               
            }
            &:not(:last-child){
                margin-right:1rem;
            }
            svg{
                margin: 0.5rem;
            }
        }
   
}
`;

export default HomePage;