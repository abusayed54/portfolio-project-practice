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
display: flex;

}
`;
export default ReviewsSection;