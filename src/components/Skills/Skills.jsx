import React, { useState } from 'react';
//import './Skills.css';
import styled, { keyframes } from 'styled-components';
import data from './languages.json'
import ConfigIcon from './ConfigIcon';

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Section = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 3px #fff;
  position: relative;

  &::after {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    width: ${(props) => (props.animate ? '100%' : '0%')};
    transition: width 0.5s linear;
  }

`

const Right = styled.div`
  flex: 1;
`

const Skills = () => {
  
  const [animateItem, setAnimateItem] = useState(null);

  const handleClick = (item) => {
    if ( animateItem === item.name) {
      setAnimateItem(null);
    }
    else {
      setAnimateItem(item.name);
    }
    
  }

  const itemMatch = (item) => {
    if (item.name === animateItem) {
      return true;
    }
    else {
      return false;
    }
  }
  
  return (
    <Container>
      <Section id='skills'>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item.name} animate={animateItem === item.name} onClick={() => handleClick(item)}>{item.name}</ListItem>
            ))}
          </List>
        </Left>

        <Right>
              {data.map((item) => {
                {
                  itemMatch(item) ? (
                    item.icon.map((icons) => {
                      <ConfigIcon>
                        { icons }
                      </ConfigIcon>
                    })
                  ) : (null)
                }
              })}
        </Right>
      </Section>
    </Container>
  )
}

export default Skills
