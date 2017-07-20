import axios from 'axios'

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";


export function topStories() {
  return axios.get('/topstories.json').then(({data}) => {
    // console.log('data', data);
    return Promise.all(data.map(id => {
      return item(id);
    }));
  });
}

export function item(id) {
  // console.log('id', id);
  return axios.get(`/item/${id}.json`)
    //    .then((response) => {
    // console.log('response', response);
    //      return response.data
    //    })
       .then(({data}) => data);
}

export function maxItem() {
  return axios.get('/maxitem.json')
              .then(({data}) => item(data));
}
