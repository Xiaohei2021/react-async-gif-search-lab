import React from 'react';

 const GifList =props =>{
   
    return(
        <div>
            {props.gifs.map(gif =>
               <div> 
                    <img src={gif.images.original.url} alt=""/>
                </div>
                )}

        </div>
    )


}

export default GifList