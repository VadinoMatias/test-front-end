import {BASE_URL} from '../configs/general';

function findSearch(q) {
    return fetch(BASE_URL+`/items?q=${q}`)
    .then(results => {
        return results.json()
    });
}

function findItem(q) {
    return fetch(BASE_URL+`/items/${q}`)
    .then(results => {
        return results.json()
    })
}

export default {
    findItem,
    findSearch
};