import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>

      <Sidebar />
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
