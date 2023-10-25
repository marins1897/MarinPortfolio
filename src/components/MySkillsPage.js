import React,  { lazy, Suspense }  from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, mediaQueries  } from './Themes';
import {Engineer,  Develope } from './AllSvgs';
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponents"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)` 
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

${mediaQueries(50)`
flex-direction:column;  
padding:8rem 0;
height:auto;
&>*:nth-child(5){
  margin-bottom:5rem;
}

`};
${mediaQueries(30)`

&>*:nth-child(5){
  margin-bottom:4rem;
}

`};
`

const Main = styled.div` 
border: 2px solid ${props  => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
margin-bottom: 0%;
line-height: 1.5;
cursor: pointer;
backdrop-filter: blur(3px);

${mediaQueries(60)`
height: 55vh;
margin-bottom: 5%;
`};

${mediaQueries(50)`
  width: 50vw;
  height: max-content;

`};

font-family: 'Ubuntu Mono',monospace;
display:flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color:   ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${mediaQueries(60)`
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(50)`
font-size:calc(1em + 2vw);
margin-bottom:1rem;
`};

${mediaQueries(30)`
            font-size:calc(1em + 1vw);
`};
${mediaQueries(25)`
            font-size:calc(0.8em + 1vw);
            svg{
              width:30px;
              height:30px;
            }
`};


${Main}:hover &{
    &>*{
        fill: ${props => props.theme.body};
    }
}

&>*:first-child{
    margin-right: 1rem;
}

`

const Description= styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6rem + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
        color: ${props => props.theme.body};
}

${mediaQueries(50)`
font-size: calc(0.8em + 1vw);


`};

${mediaQueries(30)`
          font-size:calc(0.7em + 1vw);

  

`};

${mediaQueries(25)`
          font-size:calc(0.5em + 1vw);

  

`};

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}

}
`


const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<Loading />}>
            <Box
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
    <LogoComponent theme='light' />
    <SocialIcons theme='light' />
    <PowerButton />
<ParticleComponent theme='light' />
              <Main>
                  <Title>
                     <Develope width={40} height={40} /> Web Developer
                  </Title>
                     <Description>
                     I enjoy bringing new ideas to life. It gives me new creative ideas and improves my logical thinking.
                     </Description>
                     <Description>
                     <strong>Skills</strong>
                     <p> HTML, CSS, Javascript, Typescript, React.js, React Native, Svelte, Next.js, Node.js, Express.js,
                        d3.js  </p>
                     </Description>
                     <Description>
                     <strong>Other Skills</strong>
                     <p>
                         
                            MySQL, MongoDB, Material UI, Three.js, jest, npm, yarn, git, API, OOP, DSA
                                                  
                     </p>
                     </Description>
              </Main>

              <Main>
                   <Title>
                   <Engineer width={40} height={40} /> Blockchain Engineer
                   </Title>
                   <Description>
                   It's a lot of fun to contribute to the creation of a decentralized future.
                     </Description>
                     <Description>
                     <strong>Skills</strong>
                     <p> Smart Contracts, dApps, Ethereum, Solidity, web3.js, ethers.js, Hyperledger Fabric, Golang
                     </p>
                     </Description>
                     <Description>
                     <strong>Other Skills</strong>
                     <p>
                         
                            DLT, Distributed Systems, HLF SDK, Docker, C, C++
                        
                         
                     </p>
                     </Description>
              </Main>
              <BigTitle text="MYSKILLS" top='79.5%' right="15%" />
            </Box>
            </Suspense>
        </ThemeProvider>
    );
};

export default MySkillsPage;
