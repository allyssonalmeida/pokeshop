import React, { Fragment, useEffect, useState } from 'react';
import { getAllPokemon } from '../api';
import Pokemon from '../components/Pokemon';

import * as styled from './style';

type PokemonType = {
  name: string
  url: string
}

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0)
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<string | null>(null)

  const getPokemon = async () => {
    const {results, next, previous} = await getAllPokemon()
    setPokemonList(results)
    setNextPage(next)
    setPreviousPage(previous)
  }

  const getNextPage = async () => {
    if(nextPage){
      const response = await fetch(nextPage)
      const {next, previous, results} = await response.json()
      setNextPage(next)
      setPreviousPage(previous)
      setPokemonList(results)
    }
  } 
  
  const getPreviousPage = async () => {
    if(previousPage){
      const response = await fetch(previousPage)
      const {next, previous, results} = await response.json()
      setNextPage(next)
      setPreviousPage(previous)
      setPokemonList(results)
    }
  } 

  useEffect(() => {
    getPokemon();  
  }, [])
  
  return (
    <Fragment>
      <styled.List>
        {
          pokemonList.map((poke) => (
            <li key={poke.name}>
              <Pokemon pokemon={poke} />
            </li>
          ))
        }
      </styled.List>
      <styled.Pagination>
        {previousPage && <button onClick={getPreviousPage}>Previous Page</button>}
        {nextPage && <button onClick={getNextPage}>Next Page</button>}
      </styled.Pagination>
    </Fragment>
  );
}

export default Home;