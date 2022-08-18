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
		
		fetch('http://localhost:3001/api/v1/auth/signIn', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	})
