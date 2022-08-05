
export const getAllPokemon = async (limit = 8, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const json = await response.json()
  console.log(json)
  return json
}

export const getPokemonData = async (pokemon: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const json = await response.json()
  return json
}

export const getPokedexEntry = async (pokemon: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
  const {flavor_text_entries} = await response.json()
  return flavor_text_entries
}