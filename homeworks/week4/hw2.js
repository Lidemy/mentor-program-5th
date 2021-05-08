const request = require('request');

const action = process.argv[2]
const parameter = process.argv[3]

switch (action) {
  case 'list':
    listbooks();
    break;
  case 'read':
    readbooks(parameter);
    break;
  case 'delete':
    deletebooks(parameter);
    break;
  case 'create':
    createbooks(parameter);
    break;
  case 'update':
    updatebooks(parameter);
    break;
  default:
    console.log('可用參數:list, read, delete, create, update');
}
i
function listbooks() {
  request.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=20',
  function (error,response,body) {
    let data;
    try {
      data = JSON.parse(body);
  } catch (err) {
    console.log('抓取錯誤',err);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id + ' ' + data[i].name)
 }
 },
);
}

function readbooks(id) {
  request.get('https://lidemy-book-store.herokuapp.com/books/:id',
  function (error,response,body) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      console.log('抓取錯誤',err);
    return
   } console.log(data.id + '' + data.name)
  });
}

function deletebooks(id) {
 request.delete('https://lidemy-book-store.herokuapp.com/books/:id',
  function (error) {
    if (err) return console.log('刪除失敗');
    return console.og('刪除成功')
  });
}

function createbooks(name) {
  request.post(
  {url:'https://lidemy-book-store.herokuapp.com/books',
   form:{name}},
  function (error) {
    if (err) return console.log('新增失敗',err);
    return console.og('新增成功')
  });
}

function updatebooks(id, name) {
  request.patch(
  {url:'https://lidemy-book-store.herokuapp.com/books/:id',
   form:{newname,}},
  function (error) {
    if (err) return console.log('更新失敗',err);
    return console.og('更新成功')
  });
}
