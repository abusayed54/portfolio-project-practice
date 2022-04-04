import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layout';
import portfolios from '../data/portfolios';
import Menu from '../components/Menu';
import Button from '../components/Button';

const allButtons = ["All", ...portfolios.map(item => item.category)]

const PortfolioPage = () => {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(allButtons);


    const filter = (button) => {
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData);
    }

    return (
        <MainLayout>
            <Title title={"Portfolio"} span={"Portfolio"} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    );
};

export default PortfolioPage;