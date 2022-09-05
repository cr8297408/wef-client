let urlBack = 'https://wefapisena.herokuapp.com/api/v1';

let form = document.getElementById('form')
	form.addEventListener('submit', e => {
		e.preventDefault()
		let email = document.getElementById('email').value;
		let name = document.getElementById('name').value;
		let user = document.getElementById('user').value;
		let phone = document.getElementById('phone').value;
		let password = document.getElementById('password').value;
		let repeatPassword = document.getElementById('repeatPassword').value;

		if(password !== repeatPassword){
			document.getElementById("error").classList.add("mostrar");
			setTimeout(function () {
				document.getElementById("error").classList.remove("mostrar")
			}, 3500)
    	return false;
		}

		const options = {
			method: 'POST',
			body: `{
				"email": "${email}",
				"password":"${password}",
				"user": "${user}",
				"phone": "${phone}",
				"name": "${name}"
}`,
			headers:{
				'Content-Type': 'application/json'
			}
		};
		
		fetch(`${urlBack}/auth/signUp`, options)
			.then(response => response.json())
			.then(response => {
				verifyRegister(response);
				console.log(response);
			})
			.catch(err => console.error(err));
	})

function verifyRegister(response) {
	if (response.status !== 400) {
		window.location.href = "http://127.0.0.1:5500/app/views/users.html";
	}
	else {
		let divError = document.getElementById("error");
		divError.innerHTML = response.message;
		divError.classList.add("mostrar");
			setTimeout(function () {
				document.getElementById("error").classList.remove("mostrar")
		}, 6500)
	}
}