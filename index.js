const axios = require('axios')

const urlApi = 'https://swapi.dev/api/people/'

async function retornaApi(id){
    const result = await axios.get(urlApi + id);
    console.log(result.data)
}

retornaApi(3)