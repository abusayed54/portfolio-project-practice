import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import Resume from './pages/Resume';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
      setChecked(false)
    } else {
      setTheme("light-theme")
      setChecked(true)
    }
  }
  return (
    <BrowserRouter>

      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              {...label}
              size={"medium"}
              checked={checked}
              onChange={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </div>
      <MainContentStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </MainContentStyle>
    </BrowserRouter>
  );
}

const MainContentStyle = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
transition: 0.3s ease-in-out;
@media screen and (max-width:1200px){
  margin-left:0;
}
.lines{
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
 
  .line-1,.line-2,.line-3,.line-4{
    width: 1px;
    min-height: 100vh;
    background:var(--border-color);
  }
}
`
export default App;
