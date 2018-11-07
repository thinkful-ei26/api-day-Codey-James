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
    const updateItem = (id, updateData, callback) => {
        $.ajax({
            url: `${BASE_URL}/items/${id}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(updateData),
            success: callback,
            //error: errorcallback
        })
    }

    return {
        getItems,
        createItem,
        updateItem,
    };
}());