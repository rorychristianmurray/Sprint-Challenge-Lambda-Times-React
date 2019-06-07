import React from 'react';
import { HeaderStyle } from './StyledComponents'
import { DateStyle } from './StyledComponents'
import { DateSpan } from './StyledComponents'
import { AitchOne } from './StyledComponents'
import { TempSpan } from './StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <DateSpan><DateStyle>SMARCH 32, 2018</DateStyle></DateSpan>
      <AitchOne>Lambda Times</AitchOne>
      <TempSpan>98°</TempSpan>
    </HeaderStyle>
  )
}

export default Header