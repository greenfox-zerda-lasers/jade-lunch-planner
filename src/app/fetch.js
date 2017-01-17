'use strict';

var FetchObj = function(){
  this.url = 'http://localhost:3600/';

  // this.response = new Response('.....', {
	// ok: false,
	// status: 404,
	// url: '/'
  // });

  this.getData = function(){
    return fetch(this.url + 'decode/all')
    .then(
      function(response) {
        if (!response.ok) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        }

        return response.json();
      }).then(function(data){
        data.forEach(function(value){
          console.log('vals: ', value.text);
        });
        console.log(data);
        return data;
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  this.sendData = function(data) {
    return fetch(this.url + 'decode/', {
        method  : 'post',
        headers : new Headers({
            'Content-Type': 'application/json'
        }),
        body    : JSON.stringify(data)
    }
  ).then(function(response){
      return response.json();
    }).then(function(j){
      console.log(j);
    });
  }

  this.delData = function(data_id) {
    console.log(data_id);
    return fetch(this.url + 'delete/' + data_id, {
      method  : 'delete',
    }).then(function(response){
      return response.json();
    }).then(function(j){
      console.log(j);
    });
  }

// }).then( response => {
//     return response.json(); // server returned valid JSON
// }).then( parsed_result => {
//     console.log(parsed_result);
// });


}
