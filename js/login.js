let urlBack = 'https://wefapisena.herokuapp.com/api/v1';

let form = document.getElementById('form')
	form.addEventListener('submit', e => {
		e.preventDefault()
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;

		const options = {
			method: 'POST',
			body: `{"email": "${email}" ,"password":"${password}"}`,
			headers:{
				'Content-Type': 'application/json'
			}
		};

		console.log(options.body)
		
		fetch(`${urlBack}/auth/signIn`, options)
			.then(response => response.json())
			.then(data => redirectValidate(data))
			.catch(err => console.error(err));

		})

function redirectValidate(response) {
	console.log(response);
	if (response.data) {
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