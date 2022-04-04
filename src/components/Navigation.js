import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Me from '../images/myimg.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="me">
                <img src={Me} alt="" />
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        Resume
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        Portfolio
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        Blogs
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        contact
                    </NavLink>
                </li>

            </ul>
            <footer className="footer">
                <p>@2022 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    );
};
const NavigationStyled = styled.nav`
background-color: var(--sidebar-dark-color);
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 2px solid var(--border-color);
.me{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 0.5rem 0;
    img{
        width: 60%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}
.nav-items{
    width: 100%;
    text-align: center;
    .active{
        background-color: var(--primary-color);
    }
    li{
        display: block;
        a{
            display: block;
            padding: 0.45rem 0;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            &:hover{
                cursor: pointer;
            }
            &::before{
                content:"";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--primary-color);
                transition: all 0.4s cubic-bezier(1,-0.2,.25,.95);
                z-index: 3;
                opacity: 0.21;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}
footer{
    width: 100%;
    border-top: 1px solid var(--border-color);
    
    p{
        padding: 1rem 0;
        font-size: 1.1rem;
        display: block;
        text-align: center;
    }
}
`;
export default Navigation;