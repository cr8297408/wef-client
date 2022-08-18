let form = document.getElementById('form')
	form.addEventListener('submit', e => {
		e.preventDefault()
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		// fetch('http://localhost:3001/api/v1/auth/signIn', {
		// 	method: 'POST',
		// 	body: {
		// 		email,
		// 		password
		// 	}
		// }).then(response => response.json())
		// 	.then(data => console.log(data))

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
