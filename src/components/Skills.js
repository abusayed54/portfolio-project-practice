import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from '../components/Title'
import ProgressBar from './ProgressBar';
const Skills = () => {
    return (
        <SkillsStyled>
            <Title title={"My Skills"} span={"My Skills"} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={"HTML5"}
                        width={"70%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"CSS3"}
                        width={"90%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"JAVASCRIPT"}
                        width={"85%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"JAVA"}
                        width={"60%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"Python"}
                        width={"95%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"REACT JS"}
                        width={"75%"}
                        text={"70%"}
                    />
                    <ProgressBar
                        title={"UNITY"}
                        width={"75%"}
                        text={"70%"}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    );
};
const SkillsStyled = styled.section`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap:2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width:700px){
        grid-template-columns: repeat(1,1fr);
    }
}
`;
export default Skills;