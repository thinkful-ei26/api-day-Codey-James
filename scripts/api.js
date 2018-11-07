
const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/codey-james';

    const getItems = (callback) => {
        const url = BASE_URL + '/items';
        $.getJSON(url, callback)
    }

    return {
        getItems
    };
}());