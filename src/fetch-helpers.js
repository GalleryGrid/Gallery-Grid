// fetch helper
export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
    
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
export const getArt = (page) => {
    return fetchData(`https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,description&page=${page}&limit=12`)
}
// function to get artworks by its ID
export const getArtById = (id) => {
    return fetchData(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,description,artist_display,date_display`)
}
// search for a product
export const searchArt = (query) => {
  return fetchData(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&fields=id,title,image_id,description,artist_display,date_display`);
}