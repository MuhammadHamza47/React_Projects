import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Assets/FoodyZone.png";
import SearchResult from "./SearchResult";

export const BASE_URL = "http://localhost:9000"

const Herosection = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

    useEffect(()=>{
        const fetchFoodData = async () =>{
            setLoading(true);
            try {
                const responce = await fetch(BASE_URL);
                
                const json = await responce.json();
                
                setData(json);
                setLoading(false);  
            } catch (error) {
                setError("Unable to fetch date");
            }
            
        };
        fetchFoodData();
    }, []); 

    console.log(data);

    // const temp = [
    //     {
    //         "name": "Boilded Egg",
    //         "price": 10,
    //         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //         "image": "/images/egg.png",
    //         "type": "breakfast"
    //     }
    // ]


    if (error) return <div>{error}</div>
    if (loading) return <div>Loading.....</div> 
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="" placeholder="search food..." />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <SearchResult data={data}/>
    </Container>
  );
};

export default Herosection;

const Container = styled.div`
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
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 30px;
`;

const Button = styled.button`
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;

