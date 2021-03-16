export const api = {
    posts:{
        GETPOST : (offset, limit) => `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit})`,
    },
    detail:{
        GETDETAILS : (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
    }
} 