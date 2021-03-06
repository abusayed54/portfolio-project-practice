import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-color-2: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #fff;
    --font-light-color: #a4acc4;  
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color:#191D2B;
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --sidebar-background-color: #191D2B;
    
} */
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 1.2rem;
            list-style: none;
            text-decoration: none;
            font-family: 'Nunito', sans-serif;
            font-size: 1.2rem;
        }
        .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #F1F1F1;
    --background-dark-color-2: #191D2B;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;  
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color:#E4E4E4;
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --sidebar-background-color: #191D2B;
    --title-visual-color: rgba(0,0,0,0.2);
        }
        .dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-color-2: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #fff;
    --font-light-color: #a4acc4;  
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color:#191D2B;
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --sidebar-background-color: #191D2B;
    --title-visual-color: rgba(25,29,43,44);
        }
        body{
            background-color: var(--background-dark-color);
            color:var(--font-light-color) ;
            transition: .5s ease-out;
        }
        a{
            font-family: inherit;
            color: inherit;
            font-size: inherit;
            font-size: 1rem;
        }
        h1{
            font-size: 4rem;
            color: var(--white-color);
            span{
                font-size: 4rem;
            }
        }
        span{
            color: var(--primary-color);
        }
        h6{
            color:var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

//Flotting Toogler
.light-dark-mode{
  position: fixed;
  right: 0;
  top:35%;
  background-color: var(--background-light-color-2);
  width: 6.5rem;
  height: 2.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--white-color);
  }
}
@media screen and (max-width:400px) {
    .light-dark-mode{
        display: none;
    }
}

//Nav Toogler
.hamburger-menu{
        position: absolute;
        right: 5%;
        display: none;
        top:3%;
        z-index: 15;
    svg{
        color: var(--background-light-color);
        font-size: 3rem;
    }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
@media screen and (max-width:1200px){
    .hamburger-menu{
        display: block;
    }
}
//Global Media Queries


`;

export default GlobalStyles;