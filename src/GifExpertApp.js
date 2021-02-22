import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    /*const handleAdd = () => {
        setCategories([...categories, 'Boruto']);//Se utiliza el operador spread para mantener el estado anterior y se le suma el nuevo elemento
        //setCategories( cats => [...cats, 'Boruto]); se utiliza un callback al que se le asigna el estado anterior mas el nuevo.
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                        key={category} 
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}
