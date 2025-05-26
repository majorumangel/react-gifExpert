import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h2>{ category + ":" }</h2>

            {/*leyenda de "cargando" con un && lógico:*/}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

        {/* en React, para referenciar una class de css se usa className  */}
                <div className="card-grid"> 
                    {
                        images.map( ( image ) => (
                            <GifItem 
                                key={ image.id } 
                                { ...image }
                            />
                        ))
                    }
                </div>

        </>
  )
}
