import React from 'react';
import styled from 'styled-components';
import image from '../images/resume.jpg'
import PrimaryButton from './PrimaryButton';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={image} alt="Resume" />
            </div>
            <div className="right-content">

                <h4>I am <span>Abu Sayeed</span></h4>

                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius sunt possimus minima non repellendus ratione. Hic, corporis laudantium? Vitae, optio,
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Abu Sayeed</p>
                        <p>: 22</p>
                        <p>: Bangladeshi</p>
                        <p>: English, French, Bengali</p>
                        <p>: Naogaon, Rajshahi</p>
                        <p>: React Developer</p>
                    </div>
                </div>
                <PrimaryButton title={"Download CV"}></PrimaryButton>
            </div>
        </ImageSectionStyled>
    );
};

const ImageSectionStyled = styled.div`
margin-top: 5 rem;
display: flex;
.left-content{
    width: 100%;
    height: 60vh;
    img{
        width:90%;
        height: 100%;
        object-fit: cover;
    }
}
.right-content{
    h4{
        font-size: 2rem;
        color: var(--white-color);
        text-transform: uppercase;
        span{
            font-size: 2rem;
        }
    }
    .paragraph{
        padding: 1rem 0;

    }
    .about-info{
        display: flex;
        .info-title{
                padding-right: 3rem;
        }
        .info-title, .info{
            p{
                padding: 0.3rem 0;
            }
        }
    }
}
`;

export default ImageSection;