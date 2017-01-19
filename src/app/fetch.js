'use strict';

import { port } from '../../server/server';


const FetchObj = () => {
  this.url = `http://localhost:${port}/`;

  this.getData = () => {
    return fetch(`${this.url}decode/all`)
    .then((response) => {
      if (!response.ok) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
      data.forEach((value) => {
        console.log('vals: ', value.text);
      });
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  };

  this.sendData = (data) => {
    return fetch(`${this.url}decode/`,
      { method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
      },
      ).then((response) => {
        return response.json();
      }).then((j) => {
        console.log(j);
      });
  };

  this.delData = (dataId) => {
    console.log(dataId);
    return fetch(`${this.url}delete/${dataId}`, {
      method: 'DELETE',
    }).then((response) => {
      return response.json();
    }).then((j) => {
      console.log(j);
    });
  };

// }).then( response => {
//     return response.json(); // server returned valid JSON
// }).then( parsed_result => {
//     console.log(parsed_result);
// });


}
