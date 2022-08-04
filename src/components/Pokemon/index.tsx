import { create } from 'domain';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { getPokemonData } from '../../api';
import { CartContext, CartType } from '../context/Cart';
import * as S from './style'

type PokeTypes = {
  slot: number,
  type: {
    name: string
  }
}

type PokemonType = {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  }
  types: PokeTypes[]
  price: number
}

type Props = {
  pokemon: {
    name: string
    url: string 
  }
}

const Pokemon: React.FC<Props> = ({pokemon}) => {
  const [creature, setCreature] = useState<PokemonType>()
  const {addToCart, cartItems} = useContext(CartContext) as CartType;

  const getPokemonInfo = async () => {
    const response = await getPokemonData(pokemon.name)
    const pokeData = response;
    pokeData.price = (response.weight * 7.5)
    setCreature(pokeData)
  }

  useEffect( () => {
    getPokemonInfo();
  }, [])

  useEffect(() => {
    console.log(creature?.name, creature?.types)
  }, [creature])

  const formatNumber = (value: number) =>{
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value/100)
  }

  function handleCart(){
    alert("CLICOU NO BUTAUM")
    if(creature){
      addToCart({
        ...creature, 
        price: creature.price,
        quantity: 1
      })
    }
  }

  return (
    <Fragment>
      {creature && 
        <S.Card>
          <img src={creature.sprites.front_default} alt={creature.name} />
          <S.PokemonInfo>
            <S.PokeName>
              {creature.name}
            </S.PokeName>
            <S.TypeWrapper>
              {creature.types.map(item => (
                <S.PokeType>{item.type.name}</S.PokeType>
              ))}
            </S.TypeWrapper>
            <S.PokePrice>
              {creature.price}
            </S.PokePrice>
          </S.PokemonInfo>
          <S.BuyWrapper>
            <button onClick={handleCart}>Add To Cart</button>
          </S.BuyWrapper>
        </S.Card>
      }
    </Fragment>
  );
}

export default Pokemon;