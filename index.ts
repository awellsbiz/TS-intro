import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// to get a notification when the promise is complete we chain on .then(with a callbback function)
axios.get(url).then((response) => {
  console.log(response.data);
});
