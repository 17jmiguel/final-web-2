export async function servicioCanciones(){

    const URI="https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/top-tracks?market=US"
    const TOKEN="Bearer BQCpfFhGcJw2rY_988G5GtdN1uqdP9ROhVKrCK2J5095BCldjm7SZku7a04t5IySDQX5Cv9bXMpzrAn4CBtrWR6WkN1BajDEUGDvxRATp8eBynQlX3-UTXdGPv0K9cPa5lTE3CGmcxAUk_L5SjF5UNYRzQ3hTAj_Lgj6R4mL0f-t3a4xJMs8tFt7HzHB_3QmcKk"
    const PETICION={

        method:"GET",
        headers:{Authorization:TOKEN}
        
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones
}