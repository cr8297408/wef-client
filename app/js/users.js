let url = 'http://127.0.0.1:3001/api/v1/users';

fetch(url)
    .then(response => response.json())
    .then(data => viewData(data.data))
    .catch(err => console.log(err));

const viewData = (data) => {
    let body = '';
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].user}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].phone}</td></tr>`   
    }
    document.getElementById('users').innerHTML = body;
}