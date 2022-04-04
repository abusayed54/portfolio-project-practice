import React from 'react';
import styled from "styled-components"
import { InnerLayout } from '../styles/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

const ReviewsSection = () => {
    return (
        <ReviewsStyled>
            <Title title={"Reviews"} span={"Reviews"} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
                    <ReviewItem text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet"} />

                </div>
            </InnerLayout>
        </ReviewsStyled>
    );
};
const ReviewsStyled = styled.section`
.reviews{
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 1.5rem;
@media screen and (max-width: 650px){
        grid-template-columns: repeat(1,1fr);
}
}
`;
export default ReviewsSection;