import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(()=>{//Use efect se utiliza para condicionar funcionalidades en el codigo
        getGifs(category)
            .then(setImages)
    },[category])//Si el segundo parametro esta vacio, solo ejecuta la instruccion dentro una vez// Se agrega category para que si cambia, re renderize el componente

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
                {
                    images.map((img) => ( //Se desestructura el arreglo para acceder a los datos
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}