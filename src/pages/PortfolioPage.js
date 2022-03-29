import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layout';
import portfolios from '../data/portfolios';
import Menu from '../components/Menu';

const PortfolioPage = () => {
    const [menuItem, setMenuItem] = useState(portfolios)
    return (
        <MainLayout>
            <Title title={"Portfolio"} span={"Portfolio"} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    );
};

export default PortfolioPage;