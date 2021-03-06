import React from 'react';
import styled from "styled-components"
import { InnerLayout } from '../styles/Layout';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design1 from "../images/img1.jpg"
import design2 from "../images/img2.jpg"
import design3 from "../images/img3.jpg"
// import design4 from "../images/img4.jpg"
const ServicesSection = () => {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"services"} />
                <div className="services">
                    <ServiceCard
                        image={design1}
                        title={"Web Design"}
                        paragraph={" Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={design2}
                            title={"Artificial Inteligence"}
                            paragraph={" Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        />
                    </div>
                    <ServiceCard
                        image={design3}
                        title={"Game Development"}
                        paragraph={" Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />

                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    );
};
const ServicesSectionStyled = styled.section`
.services{
    margin-top:5rem ;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:1.5rem;
    .mid-card{
        margin: 0 1.2rem;
    }
}
@media screen and (max-width:991px){
    .services{
        grid-template-columns: repeat(2,1fr);
        .mid-card{
            margin:0;
        }
    }
   
}
@media screen and (max-width:650px) {
    .services{
        grid-template-columns: repeat(1,1fr);
    }
}
`;
export default ServicesSection;