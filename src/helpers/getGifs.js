//Dentro de los helpers van funciones que solo realizan una accion separada del comportamiento logico del componente

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mK7ymx9cI968vZowiGj9tXllGpkcCrYV`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {//Se realiza una mutacion del arreglo
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}