
export const getAllPokemon = async (limit = 12, offset = 0) => {
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