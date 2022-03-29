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
    display: flex;
    justify-content: space-between;
    .mid-card{
        margin: 0 1.2rem;
    }
}
`;
export default ServicesSection;