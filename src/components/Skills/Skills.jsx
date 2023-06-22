import React from 'react';
import styled, { keyframes } from 'styled-components';

const data = [
  "Front End",
  "Back End",
  "Frameworks",
  "Toolkits",
  "Database",
]

const gradientChange = keyframes`
  
`

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
  -webkit-text-stroke: 1px #fff;
  position: relative;

  &::after {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    width: 0%;
  }

  &:hover::after {
    animation: loadingText 0.5s linear both;
  }

  @keyframes loadingText {
    to {
      width: 100%;
    }
  }

`
const Right = styled.div`
  flex: 1;
`

const Skills = () => {
  return (
    <Container>
      <Section id='skills'>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>

        <Right>

        </Right>
      </Section>
    </Container>
  )
}

export default Skills
