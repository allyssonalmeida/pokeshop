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
  onClick: () => void
}

const Pokemon: React.FC<Props> = ({pokemon, onClick}) => {
  const [creature, setCreature] = useState<PokemonType>()
  const {addToCart} = useContext(CartContext) as CartType;

  const getPokemonInfo = async () => {
    const response = await getPokemonData(pokemon.name)
    const pokeData = response;
    pokeData.price = (response.weight * 2 * 115.5)
    setCreature(pokeData)
  }

  useEffect( () => {
    getPokemonInfo();
  }, [])

  useEffect(() => {
    console.log(creature?.name, creature?.types)
  }, [creature])

  const toggleModal = () => {
    onClick()
  }

  const formatNumber = (value: number) =>{
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value/100)
  }

  function handleCart(){
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
          <img
            src={creature.sprites.front_default}
            alt={creature.name}
            onClick={toggleModal}
          />
          <S.PokemonInfo>
            <S.PokeName>
              {creature.name}
            </S.PokeName>
            <S.TypeWrapper>
              {creature.types.map(item => (
                <S.PokeType className={item.type.name}>{item.type.name}</S.PokeType>
              ))}
            </S.TypeWrapper>
            <S.PokePrice>
              {formatNumber(creature.price)}
            </S.PokePrice>
          </S.PokemonInfo>
          <S.BuyWrapper>
            <S.BuyButton onClick={handleCart}>I Choose you!</S.BuyButton>
          </S.BuyWrapper>
        </S.Card>
      }
    </Fragment>
  );
}

export default Pokemon;