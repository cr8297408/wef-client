let form = document.getElementById('form')
	form.addEventListener('submit', e => {
		e.preventDefault()
		let email = document.getElementById('email').value;
		let name = document.getElementById('name').value;
		let user = document.getElementById('user').value;
		let phone = document.getElementById('phone').value;
		let password = document.getElementById('password').value;

		const options = {
			method: 'POST',
			body: `{"email": "${email}" ,"password":"${password}"}`,
			headers:{
				'Content-Type': 'application/json'
			}
		};

		console.log(options.body)
		
		fetch('http://localhost:3001/api/v1/auth/signUp', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	})
