
import styled from 'styled-components'
// import dice1 from '../Assets/dice1.png'

const RoleDice = ({currentDice, roleDice}) =>{
  return (
    <DiceContainer>
     <div className='dice' onClick={roleDice}>
      <img src={`image/dice${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
.dice{
  cursor: pointer;
}
p{
  font-size: 25px;
}
  
`
