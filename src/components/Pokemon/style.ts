import styled from 'styled-components'
import pokeball from '../../assets/images/pokeball.svg'

export const Card = styled.div`
  width: 220px;
  height: 300px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #f2f2f2;
  position: relative;

  img {
    object-fit: contain;
    object-position: bottom center;
    width: 100%;
    height: 150px;
    background: #fff;
    border-radius: 10px; 
    cursor: pointer;
  }
`

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  max-height: 150px;
  width: 100%;

`
export const PokeName = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`
export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: capitalize;
  font-size: .6rem;
  position: absolute;
  top: 10px;
  left: 10px;
`
export const PokeType = styled.div`
  border-radius: 10px;
  padding: 2px 10px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const PokePrice = styled.div`
  padding: 10px;
  font-weight: 500;
`
export const BuyWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 24px;
  background: var(--main-color);
  border: 2px solid #004D40;
  border-radius: 6px;
  text-align: left;
  font-size: .875rem;
  font-weight: 600;
  color: #fff;
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  
  &::after{
    content: '';
    display: block;
    width: 37px;
    height: 37px;
    background: url(${pokeball});
    background-position: center;
    position: absolute;
    right: -20px;
  }

  &:hover{
    &::after{
      animation: rotate .3s forwards;
    }
  }

`