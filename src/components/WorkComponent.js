import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import {motion} from 'framer-motion';
import { mediaQueries } from "./Themes";

const Box = styled(motion.div)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 22.5rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(3px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 5;


&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}

${mediaQueries(50)`
width:calc(60vw);

`};
${mediaQueries(30)`

height:18rem;

`};

${mediaQueries(25)`

height:14rem;
padding:0.8rem;
backdrop-filter: none;

`};
`

const Image = styled.div`
background-image:  ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: 100% 100%;
border: 1px solid transparent;
background-position: center center;

${mediaQueries(25)`
    
height:70%;


`};

${Box}:hover &{
    border:1px solid  ${props => props.theme.body};
    
}
`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla',sans-serif;
font-weight: 700;
${mediaQueries(40)`
font-size:calc(0.8em + 1vw);

`};

${mediaQueries(25)`

font-size:calc(0.6em + 1vw);



`};

border-bottom: 1px solid  ${props => props.theme.text};

${Box}:hover &{
    border-bottom:1px solid  ${props => props.theme.body};
    
}
`

const HashDescriptions = styled.div`
padding: 0.5rem 0;
${mediaQueries(25)`
    
font-size:calc(0.5em + 1vw);



`};
`

const Description = styled.span`
padding-right:0.5rem;

${mediaQueries(25)`
    
font-size:calc(0.5em + 1vw);



`};
`




const Footer = styled.footer`
display: flex;
justify-content: space-between;

`

const Link = styled(NavLink)`
background-color: ${props =>props.theme.text};
color: ${props =>props.theme.body};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 50px 50px 50px 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.body};
    color: ${props =>props.theme.text};
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.body};
    }
}
`

const Container = styled(motion.div)``

const Item = {
    hidden:{ scale : 0},
    show: { scale: 1,
      transition : {
        type: 'spring',
        duration: 0.5,
      }
    }
  }

const WorkComponent = (props) => {
    const {name,description, demo, github, imgSrc} = props.work;
    return(
    <Container variants={Item}>
        <Box>
             <Image img={imgSrc} />
             <Title> {name} </Title>
             <HashDescriptions>
                 {
                     description?.map((de, id) => {
                         return <Description key={id}> {de} </Description>
                        })
                 }
             </HashDescriptions>
        
             <Footer>
                {demo && (
                <Link to={`${demo}`} target="_blank">
                    Visit
                </Link> )}
                {!demo && <div></div>}
                <Git to={`${github}`} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>


        </Box>
        </Container>
    );
};

export default WorkComponent;