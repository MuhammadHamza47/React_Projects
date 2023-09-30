import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

function GamePlay() {
  return (
    <TopSection>
        <div className='top_section'>
        <TotalScore/>
      <NumberSelector/>
        </div> 
        <RoleDice/>
    </TopSection>
  )
}

export default GamePlay

const TopSection = styled.main`
padding-top: 60px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`
