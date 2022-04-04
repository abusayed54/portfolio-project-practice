import React from 'react';
import styled from 'styled-components';
import { InnerLayout, MainLayout } from '../styles/Layout';
import SmallTitle from './SmallTitle';
import Title from './Title';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from './ResumeItem';


const ResumeContent = () => {
    const briefCase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeContentStyled>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle title={"Educational Qualification"} icon={briefCase} />
                </div>
                <div className="resume-contents">
                    <ResumeItem year={"2018 - 2022"} title={"Computer Science Degree"} subTitle={"Sussex University"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />
                    <ResumeItem year={"2015 - 2017"} title={"A - Levels"} subTitle={"Computer Science"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />
                    <ResumeItem year={"2015 - 2017"} title={"High School"} subTitle={"Google Inc."} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />

                </div>
                <div className="small-title utility-small-title">
                    <SmallTitle title={"Educational Qualification"} icon={school} />
                </div>
                <div className="resume-contents">
                    <ResumeItem year={"2015 - 2020"} title={"Computer Science Teacher"} subTitle={"Sussex University"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />
                    <ResumeItem year={"2015 - present"} title={"Full Stack Developer"} subTitle={"Microsoft Studios"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />
                    <ResumeItem year={"2010 - 2017"} title={"User Interface Designer"} subTitle={"Google Inc."} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam."} />

                </div>
            </InnerLayout>
        </ResumeContentStyled>
    );
};

const ResumeContentStyled = styled.div`
.small-title{
    padding-bottom: 2rem;
}
.resume-contents{
    border-left:2px solid var(--border-color);
}
.utility-small-title{
    margin-top: 3rem;
}
`;

export default ResumeContent;