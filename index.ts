import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// to get a notification when the promise is complete we chain on .then(with a callbback function)
axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `this is the id: ${id} | this is the title: ${title} | Has it been competed? ${completed}`
  );
};
