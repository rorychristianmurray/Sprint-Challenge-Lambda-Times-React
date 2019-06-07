import React from 'react';
import { TopBarWrapper } from './StyledComponents'
import { TopBarContainer } from './StyledComponents'
import { TopBarContainerLeft } from './StyledComponents'
import { ContainerLeftSpan } from './StyledComponents'
import { TopBarContainerCenter } from './StyledComponents'
import { ContainerCenterSpan } from './StyledComponents'
import { TopBarContainerRight } from './StyledComponents'
import { ContainerRightSpan } from './StyledComponents'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;