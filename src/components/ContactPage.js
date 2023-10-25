import React, {lazy, Suspense } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme, mediaQueries} from './Themes';
import Loading from "../subComponents/Loading";
import { motion } from 'framer-motion';

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponents"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const SERVICE_ID = "service_1ubdntd";
const TEMPLATE_ID = "template_q0zyfwh";
const USER_ID = "pJ8c9pQlU-OmZFeTd";

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
height:400vh;
position: relative;
display: flex;
align-items: center;

justify-content: center;
` 


const Form = styled(motion.div)`

    width: 100%;
    height: 40vh;
    background-color:${props => props.theme.text};
    color:  ${props => props.theme.body};
    padding: 1.5rem 2rem;
   
    border-radius: 0px 50px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    
    transition: all 0.9s ease ;

    align-items:center;
   
    display: block;	
	

    &:hover{
        background-color: ${props => props.theme.body};
        color:${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        }


`



const Main = styled(motion.ul)`

position: fixed;
top: 12rem;
left:15%;
right: 12%;
height: 40vh;
display: flex;
color:${props => props.theme.body};
border: 1px solid ${props => props.theme.body};
align-items:center;
justify-content: center;


`



const Input = styled.input`
	padding: 1rem;
	color: ${props => props.theme.body};
	background: rgb(255, 206, 206);
	border: none;
	border-radius: 20px;
	width: 97%;
	margin-bottom: 2em;
    transition: all 1.2s ease ;

    ${Form}:hover &{
        background-color: rgb(255, 149, 149);
        color:${props => props.theme.text};
        border: 1px solid ${props => props.theme.body};
        }
`;

const Button = styled.button` 

background-color: ${props => props.theme.body};
    color:${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
padding: 0.3rem;
border-radius: 10%;

width: 25rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;
transition: all 1.5s ease ;
left: 20%;
right: 20%;
cursor:pointer;

${mediaQueries(50)`
        
width: 15rem;

`};
${mediaQueries(40)`
       
width: 10rem;

`};
${mediaQueries(30)`
        
width: 5rem;

`};

${Form}:hover &{
    background-color: ${props => props.theme.text};
    color:${props => props.theme.body};
    border: 1px solid ${props => props.theme.body};
    }

&:hover{
 
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}
`

const container = {
  hidden : {opacity: 0},
  show: {
    opacity: 1,

    transition:{
      staggerChildren : 0.4,
      duration: 0.4,
    }
  }
};

const Item = {
  hidden:{ scale : 0},
  show: { scale: 1,
    transition : {
      type: 'spring',
      duration: 0.4,
    }
  }
}




const ContactPage = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          background: 'rgb(95, 212, 110)',
         
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
          background: 'rgb(44, 44, 44)',
        })
      });
    event.target.reset()
  };


return (
    <ThemeProvider theme={darkTheme}>
       <Suspense fallback={<Loading />}>
    <Box  
    key="contact"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
    
    <LogoComponent theme='dark'/>
    <SocialIcons theme='dark'/>
    <PowerButton />
        <Main variants={container} initial='hidden' animate='show' > 
      <Form variants={Item} > <form onSubmit={handleOnSubmit}>
          
        <Input
          id='form-input-control-email'
          control='input'
          label='Email'
          name='user_email'
          placeholder='Your Email…'
          required
          icon='mail'
          iconPosition='left'
        />
       
    
        <Input
          id='form-input-control-last-name'
          control='input'
          label='Name'
          name='user_name'
          placeholder='Your Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
       
       
        <Input
          id='form-textarea-control-opinion'
          control='textarea'
          label='Message'
          name='user_message'
          placeholder='Your Message…'
          required
        />
        
        <Button type='submit' >Submit</Button>
        </form>
      </Form>
     </Main>
     <BigTitle text="CONTACT" top='7%' right="5%" />
    
    </Box>
    </Suspense>
    </ThemeProvider>
  );
}
export default ContactPage;

