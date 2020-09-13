
const apiKey = 'BaqXs5y8EgtiqQmeYlAplCpxfgRgVCci';
const baseUrl  = `https://api.giphy.com/v1/gifs/search`;

export const getGifs = async(query, limit = 10) => {

    const url = `${baseUrl}?q=${query}&limit=${limit}&api_key=${apiKey}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}
