
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GUUtut4y3V3a6ajN6Tl3r82flgKbwQST&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();


    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;   
}
