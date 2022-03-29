import React from 'react';
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../components/ContactItem';
const ContactsPage = () => {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (

        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactsPageStyled>
                <InnerLayout className={"contact-section"}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className='form'>
                            <div className="form-field">
                                <label htmlFor="name">Enter Your Name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter Your Name*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter Your Subject*</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Enter Your Message</label>
                                <textarea name="text-area" id="text-area" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={"Send Email"} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem icon={phone}
                            title={"Phone"}
                            contact1={"+8801792230738"}
                            contact2={"77 88 25 45 568"}
                        />
                        <ContactItem icon={email}
                            title={"Email"}
                            contact1={"abusayed444460@gmail.com"}
                            contact2={"77 88 25 45 568"}
                        />
                        <ContactItem icon={location}
                            title={"Address"}
                            contact1={"Fazilpur, Mohadevpur"}
                            contact2={"77 88 25 45 568"}
                        />
                    </div>
                </InnerLayout>
            </ContactsPageStyled>
        </MainLayout>
    );
};
const ContactsPageStyled = styled.div`
 .contact-section{
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 2rem; 
.right-content{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100px;
}
.contact-title{
    h4{
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;

    }
}
.form{
    width: 100%;
    .form-field{
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label{
        position: absolute;
        left: 20px;
        top: -19px;
        display: inline-block;
        background-color: var(--background-dark-color);
        padding: 0 0.5rem;
        color: inherit;
        }
        input{
            border: 1px solid var(--border-color);
            outline: none;
            background: transparent;
            height: 50px;
            padding: 0 15px;
            width: 100%;
            color: inherit;
        }
        textarea{
            background-color: transparent;
            border:  1px solid var(--border-color);
            outline: none;
            width: 100%;
            color: inherit;
            padding:0.8rem 1rem ;
        }
    }
}
 }
 `;
export default ContactsPage;