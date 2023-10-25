import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components';

/** particle config files */
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';



const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
 `

const ParticleComponent = (props) => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };

    return (
        <Box>
           <Particles style={{position:'absolute', top:0}} 
                    options={props.theme === "light" ? configLight  : configDark} 
                    id='particles1'
                    init={particlesInit}/>
        </Box>
    );
};

export default ParticleComponent;