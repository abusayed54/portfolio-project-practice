import React from 'react';
import styled from "styled-components"
const ServiceCard = ({ image, title, paragraph }) => {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img width={"100px"} src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    );
};
const ServiceCardStyled = styled.div`
background-color: var(--background-dark-color-2);
border-left: 1px solid var(--border-color);
border-top: 8px solid var(--border-color);
border-right: 1px solid var(--border-color);
border-bottom: 1px solid var(--border-color);
&:hover{
    border-top: 8px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
}
.container{
    padding: 1.2rem;
    h4{
        color: var(--white-color);
        font-size: 1.6rem;
        padding: 1rem 0;
        position: relative;
        &::after{
            content: "";
            width: 2rem;
            background-color: var(--border-color);
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 10px;

        }
    }
    p{
        padding: 0.8rem 0;
    }
}
`;
export default ServiceCard;