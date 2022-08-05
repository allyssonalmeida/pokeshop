import React, { Fragment, useEffect, useState } from 'react';
import { getAllPokemon } from '../api';
import Pokemon from '../components/Pokemon';
import Modal from "react-modal";

import * as S from './style';

type PokemonType = {
  name: string
  url: string
}

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false);

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


  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  return (
    <Fragment>
      <S.List>
        {
          pokemonList.map((poke) => (
            <li key={poke.name}>
              <Pokemon pokemon={poke} onClick={toggleModal} />
            </li>
          ))
        }
      </S.List>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
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