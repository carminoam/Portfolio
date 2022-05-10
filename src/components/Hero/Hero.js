import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h2>Noam Carmi</h2>
          <h4>Full Stack Developer</h4>
        </SectionTitle>
        <SectionText>
          Welcome to my portfolio, here I am going to present some personal and professional information about me 
          and also display all the projects I have built during my career.<br/>
          Feel free to come in and explore, if you have any question or you want to work together so contact me.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;