// fetch helper
export const fetchData = async (url, config) => {
    try {
      const response = await fetch(url, config);
    
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      return { data, error: null };
    } catch (error) {
      console.log("Error caught! " + error.message);
      return { data: null, error };
    }
}
// function to get the entire collection
export const getArt = () => {
    return fetchData('https://api.artic.edu/api/v1/artworks')
}
// function to get artworks by its ID
export const getArtById = () => {
    return fetchData(`https://api.artic.edu/api/v1/artworks/${id}`)
}
// search for a product
export const searchArt = (query) => {

}