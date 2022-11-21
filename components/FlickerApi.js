export function searchPhotos(keyword) {
  const apiKey = "8a67ea6102e401ad62ded664a49689ec";
  const coordinate = "&lat=40.93&lon=-73.88";
  const photosSearchURL =
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
    apiKey +
    coordinate +
    "&format=json&extras=url_m,description&per_page=500&text=" +
    keyword +
    "&nojsoncallback=1&safe_search=3&radius=32";

  return fetch(photosSearchURL)
    .then((response) => response.json())
    .then((jsonData) => {
      const results = jsonData["photos"];
      const photos = results["photo"];
      return photos;
    })
    .catch((err) => console.error(err));
}
