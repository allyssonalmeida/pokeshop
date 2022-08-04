import React, { Fragment, useEffect, useState } from 'react';
import { getPokemonData } from '../../api';
import * as styled from './style'

type PokeTypes = {
  slot: number,
  type: {
    name: string
  }
}

type PokemonType = {
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  }
  types: PokeTypes[]
  price?: number
}

type Props = {
  pokemon: {
    name: string
    url: string 
  }
}

const Pokemon: React.FC<Props> = ({pokemon}) => {
  const [creature, setCreature] = useState<PokemonType>()

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

  return (
    <Fragment>
      {creature && 
        <styled.Card>
          <img src={creature.sprites.front_default} alt={creature.name} />
          <styled.PokemonInfo>
            <styled.PokeName>
              {creature.name}
            </styled.PokeName>
            <styled.TypeWrapper>
              {creature.types.map(item => (
                <styled.PokeType>{item.type.name}</styled.PokeType>
              ))}
            </styled.TypeWrapper>
            <styled.PokePrice>
              {creature.price}
            </styled.PokePrice>
          </styled.PokemonInfo>
          <styled.BuyWrapper>
            <button>Add To Cart</button>
          </styled.BuyWrapper>
        </styled.Card>
      }
    </Fragment>
  );
}

export default Pokemon;