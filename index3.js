const express = require('express');
const app = express();


// #42. GET /api/greet にアクセスされたら JSON を返す
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello!' });
});


// #45. GET /api/itemsにアクセスされたらJSONを返す
app.get('/api/items', (req, res) => {
  const items = ["apple", "banana", "orange"];
  res.json( items );
});


// サーバ起動
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
