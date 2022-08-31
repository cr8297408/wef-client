let urlBack = 'http://localhost:3000/api/v1';

fetch(urlBack+'/users')
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