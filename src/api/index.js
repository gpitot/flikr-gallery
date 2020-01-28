import axios from "axios";
import config from "./config";

const { FLIKR_SECRET } = config;
const BASE =
  "https://www.flickr.com/services/rest/?method=flickr.photos.search";

//request photos from flikr
const loadPhotos = ({ query, limit = 20 }) => {
  return new Promise((resolve, reject) => {
    if (query === null) return resolve([]);
    const url = `${BASE}&api_key=${FLIKR_SECRET}&tags=${query}&per_page=${limit}&format=json&nojsoncallback=1`;
    console.log(url);
    axios
      .get(url)
      .then(response => {
        console.log(response);
        return resolve(response.data.photos.photo);
      })
      .catch(err => reject([]));
  });
};

export { loadPhotos };
