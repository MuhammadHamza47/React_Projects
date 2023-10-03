import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from './Herosection';

const SearchResult= ({data: foods}) => {
  return (
    <FoodContainer>
        <FoodCards> 
            {foods?.map((food) =>
            <FoodCard key={food.name}>
                <div className="food_img">
                    <img src={BASE_URL + food.image} alt="" />
                </div>
            </FoodCard>)}
        </FoodCards>
      </FoodContainer>
  )
}

export default SearchResult

const FoodContainer = styled.section`
height: calc(100vh - 200px);
background-image: url("/bg.png");
background-size: cover; 
`;

const FoodCards = styled.div``;

const FoodCard = styled.div`

`;

