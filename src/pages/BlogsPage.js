import React from 'react';
import blogs from '../data/blogs';
import styled from 'styled-components';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layout';
const BlogsPage = () => {
    return (
        <MainLayout>
            <BlogsPageStyled>
                <Title title={'Blogs'} span={"Blogs"} />
                <InnerLayout className={"blog"}>

                    {
                        blogs.map((blog) => {
                            return <div key={blog.id} className="content-wrapper">
                                <div className="image">
                                    <img width={"300px"} height={"280px"} src={blog.image} alt="" />
                                </div>
                                <div className="title">
                                    <a href={blog.link}>{blog.title}</a>
                                </div>

                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsPageStyled>
        </MainLayout>
    );
};

const BlogsPageStyled = styled.div`
.blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    padding: 1rem 1rem;
    
  
    .content-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      
    }
    .image{
        width: 100%;
        height:70%;
        overflow: hidden;
        img{
            width: 100%;
           object-fit: cover;
           transition: all 0.8s ease-in-out;
           &:hover{
               cursor: pointer;
               transform: scale(1.5) rotate(5deg);
           }
        }
    }
    .title{
        position: absolute;
        top: 90%;
        a{
        font-size: 1.5rem;
        padding: .5rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            color:var(--primary-color);
        }
        }
    }
}
`;
export default BlogsPage;