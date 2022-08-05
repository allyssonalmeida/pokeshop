import React, { Fragment, useEffect, useState } from 'react';
import { getAllPokemon, getPokedexEntry, getPokemonData } from '../api';
import Pokemon from '../components/Pokemon';
import Modal from "react-modal";

import * as S from './style';

type PokemonType = {
  name: string
  url: string
}
type PokeTypes = {
  slot: number,
  type: {
    name: string
  }
}

type DescriptionType = {
  flavor_text: string
}

type StatsType = {
  base_stat: number
  stat: {     
    name: string
  }
}

type PokedexType = {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  }
  types: PokeTypes[]
  description: DescriptionType[]
  stats: StatsType[]
}



const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [pokedex, setPokedex] = useState<PokedexType>()
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    if(window.innerWidth < 520){
      setIsMobile(true)
    }
  }, [])

  useEffect(() => {
    console.log(pokemonList)  
  }, [pokemonList])


  const toggleModal = async(creature?: string) => {
    if(creature){
      const response = await getPokemonData(creature)
      const flavor_text_entries = await getPokedexEntry(creature)
      setPokedex({...response, description: flavor_text_entries})
    }
    setIsOpen(!isOpen);
  }
  
  return (
    <Fragment>
      {
      isMobile &&
            <S.Pagination>
            {previousPage && 
              <S.Button onClick={getPreviousPage} left="0px">
                ⮜⮜ Previous Page
              </S.Button>}
            {nextPage && 
              <S.Button onClick={getNextPage} right="0px">
                Next Page ⮞⮞
              </S.Button>}
          </S.Pagination>
      }
      <S.List>
        {
          pokemonList.map((poke) => (
            <li key={poke.name}>
              <Pokemon pokemon={poke} onClick={() => {toggleModal(poke.name)}} />
            </li>
          ))
        }
      </S.List>
      <Modal
        isOpen={isOpen}
        className="modal"
        closeTimeoutMS={0}
      >
        <div className="modal-content">
          <div className="modal-image">
            <img src={pokedex?.sprites.front_default} alt={pokedex?.name} />
          </div>
          <div className="modal-description">
            <div className="modal-title">
              <span>{pokedex?.name}</span>
              <strong>{pokedex?.name}</strong>
            </div>
            <div className="modal-entry">
              <p>{pokedex?.description[1].flavor_text}</p>
            </div>
            <div className="modal-stats">
              {pokedex?.stats.map((item) => (
                <div>
                  <strong>{item.stat.name}</strong>
                  <input type="range" className="status-bar"  value={item.base_stat} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={()=>{toggleModal()}}>&times;</button>
        </div>
      </Modal>
      <S.Pagination>
        {previousPage && 
          <S.Button onClick={getPreviousPage} left="0px">
            ⮜⮜ Previous Page
          </S.Button>}
        {nextPage && 
          <S.Button onClick={getNextPage} right="0px">
            Next Page ⮞⮞
          </S.Button>}
      </S.Pagination>
    </Fragment>
  );
}

export default Home;