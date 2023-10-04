import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Assets/FoodyZone.png";
import SearchResult from "./SearchResult";

export const BASE_URL = "http://localhost:9000"

const Herosection = () => {

    const [data, setData] = useState(null);
    const [filterdData, setFilterdData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState("all");

    

    useEffect(()=>{
        const fetchFoodData = async () =>{
            setLoading(true);
            try {
                const responce = await fetch(BASE_URL);
                
                const json = await responce.json();
                
                setData(json);
                setFilterdData(json);
                setLoading(false);  
            } catch (error) {
                setError("Unable to fetch data");
            }
            
        };
        fetchFoodData();
    }, []); 

    const searchFood = (e)=>{
      const searchValue = e.target.value;
      console.log(searchValue);

      if(searchValue === ""){
        setFilterdData(null);
      }

      const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterdData(filter);
    };

    const filterFood = (type)=>{
      if(type === "all"){
        setFilterdData(data);
        setSelectedBtn("all"); 
        return;
      }


      const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilterdData(filter);
      setSelectedBtn(type)
    };

    const filterBtns = [
      {
        name: "All",
        type: "all",
      },
      {
        name: "Breakfast",
        type: "breakfast",
      },
      {
        name: "Lunch",
        type: "lunch",
      },
      {
        name: "Dinner",
        type: "Dinner",
      }
    ]

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading.....</div> 
  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" onChange={searchFood} placeholder="search food..." />
        </div>
      </TopContainer>

      <FilterContainer>
        {filterBtns.map((value)=>(
          <Button isSelected={selectedBtn === value.type} key={value.name} onClick={()=> filterFood(value.type) }>{value.name}</Button>
            
          ))}
      </FilterContainer>
    </Container>
    <SearchResult data={filterdData}/>
    </>
  );
};

export default Herosection;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      color: white;
      border: 1px solid red;
      border-radius: 6px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder{
        color: wheat;
      }
    }
  }

  @media (0< width <600px){
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 35px;
`;

export const Button = styled.button`
  background-color: ${({isSelected}) => isSelected? "#ce0f0f" : "#FF4343"};
  outline:1px solid ${({isSelected}) => isSelected? "white" : "#FF4343"};
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #ce0f0f;
  }
`;

