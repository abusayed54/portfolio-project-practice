import React from 'react';
import ResumeContent from '../components/ResumeContent';
import Skills from '../components/Skills';
import { MainLayout } from '../styles/Layout';


const Resume = () => {
    return (
        <MainLayout>
            <Skills />
            <ResumeContent />
        </MainLayout>
    );
};

export default Resume;