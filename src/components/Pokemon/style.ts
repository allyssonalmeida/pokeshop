import styled from 'styled-components'

export const Card = styled.div`
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
    width: 100%;
    height: 150px;
  }
`

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  max-height: 150px;
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
  gap: 20px;
  text-transform: capitalize;
`
export const PokeType = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 2px 10px;
  font-weight: bold;
`
export const PokePrice = styled.div`
  padding: 10px;
  font-weight: 500;
`
export const BuyWrapper = styled.div`
  display: flex;
  justify-content: center;
`
