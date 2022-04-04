import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components'

const Menu = ({ menuItem }) => {

    return (
        <MenuItemStyled>
            {
                menuItem.map(item => {
                    return <div className='grid-item' key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHubIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <PinterestIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    );
};

const MenuItemStyled = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap:2rem;
@media screen and (max-width:920px){
    grid-template-columns: repeat(2,1fr);
}
@media screen and (max-width:600px){
    grid-template-columns: repeat(1,1fr);
}
.grid-item{
    .portfolio-content{
        display: block;
        position: relative;
        h6{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.84rem;
        }
        img{
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }
        ul{
            display: none;
        }
    }
}
`;
export default Menu;