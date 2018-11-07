'use strict';
/*eslint-env jquery*/
const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/codey-james';

    const getItems = (callback) => {
        const url = BASE_URL + '/items';
        $.getJSON(url, callback);
    };
    const createItem = function(name, callback){
        const newItem = JSON.stringify({ name, });
        const url = BASE_URL + '/items';
        $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data : newItem,
            success : callback
            //error: errorcallback
        });
    };

    return {
        getItems,
        createItem
    };
}());