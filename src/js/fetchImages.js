import axios from 'axios';

export const fetchImages = async (inputValue, pageNr) => {
  return fetch(
    `https://pixabay.com/api/?key=34440201-5499953839d306eec21c3a246&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
