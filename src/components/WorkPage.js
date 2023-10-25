import React, {lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';

import img from "../assets/Images/rey-seven-_nm_mZ4Cs2I-unsplash.jpg";

import { mediaQueries } from "./Themes";
import { Work } from '../data/WorkData';
import WorkComponent from './WorkComponent';
import Loading from "../subComponents/Loading";
import {motion} from 'framer-motion';
import { FormControl, FormGroup} from "@material-ui/core";
import WorkTabs from '../material/WorkTabs';

const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponents"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));


const MainContainer = styled(motion.div)`
background-image: url(${img}) ;
backgorund-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;
min-height : 100vh;

`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
min-height : 100vh;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;

${mediaQueries(30)`
padding-top: 7rem;


`};
`

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
${mediaQueries(50)`
grid-template-columns: 100%;



`};
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



const WorkPage = () => {
    const [numbers, setNumbers] = useState(0);

    const [activeWorkFilter, setActiveWorkFilter] = useState(() => {
      const activeFilter = window.sessionStorage.getItem('activeWorkFilter');
      return activeFilter 
            ? activeFilter 
            : 'all';
    });

    const handleWorkFilter = (event, filter) => {
      setActiveWorkFilter(filter);
      window.sessionStorage.setItem('activeWorkFilter', filter);
    };


    useEffect(() => {
          let num = (window.innerHeight - 70)/30;
          setNumbers(parseInt(num));
    }, []);

    const filterWorkByType = (data, filter) => {
      if (filter === 'all') {
        return data;
      }
      return data.filter(work => work.type === filter);
    };

    const filteredWork = filterWorkByType(Work, activeWorkFilter);


    return (
      <Suspense fallback={<Loading />}>
        <MainContainer 
        variants={container} 
        initial='hidden' 
        animate='show' 
        exit={{
               opacity:0, 
               transition: {duration: 0.5 }
        }}>
              <Container>
                  <LogoComponent />
                  <PowerButton />
                  <SocialIcons />
                  <AnchorComponent numbers={numbers} />
                  <FormControl component="fieldset" style={{ top : '10vh' , left : '2rem', zIndex : 999, margin : '2vh 0'}}>
                        <FormGroup aria-label="position" row style={{ width : '100%'}}>
                          <WorkTabs handleWorkFilter={handleWorkFilter}
                                            activeWorkFilter={activeWorkFilter}
                          />
                        </FormGroup>
                      </FormControl>  
                      
                   <Center>
                     <Grid variants={container} initial="hidden" animate="show" >                     
                     {
                            filteredWork.map((work) => {
                               return <WorkComponent key={work.id} work={work}/>
                            })
                        }                                              
                     </Grid>
                   </Center>
                   
                   <BigTitle text="WORK" top='7%' left="5%" />


              </Container>
        </MainContainer>
        </Suspense>
     
    );
};

export default WorkPage;