import React from 'react'
import CocktailCard from './CocktailCard'
import Wrapper from '../assets/wrappers/CocktailList'

const CocktailList = ({drinks}) => {
    if(!drinks){
        return <h4 style={{textAlign:'center'}}>No matching cocktails found...</h4>
    }
    const formattedDrinks=drinks.map((drink)=>{
            const {idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic}=drink
            return {id:idDrink, name:strDrink, image:strDrinkThumb,info:strAlcoholic, glass:strGlass}
        })
  return (
    <Wrapper>
        {formattedDrinks.map((drink)=>{
            return <CocktailCard key={drink.id} {...drink}/>
            
        })}
        

    </Wrapper>
  )
}

export default CocktailList


