import React from 'react';
import styled from 'styled-components'
import ImageSection from '../components/ImageSection';
import ReviewsSection from '../components/ReviewsSection';
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import { MainLayout } from '../styles/Layout';

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}></Title>
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled>



        </MainLayout>
    );
};
const AboutStyled = styled.section`

`;

export default AboutPage;