const prompt = require('prompt-sync')();

class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === 'fe_dev' && password === 'password1234!') ||
					(id === 'coder' && password === 'coder1234!') ||
					(id === 'updaun' && password === 'updaun1234!')
				) {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'fe_dev') {
					resolve({name: 'fe_dev', role: 'admin'});
				} else if (user === 'coder') {
					resolve({name: 'coder', role: 'user'});
				} else {
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}

	getData(role) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (role === 'admin') {
					resolve({data: 'good job!!'});
				} else {
					reject(new Error('permission error'));
				}
			}, 1000);
		});
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id : ');
const password = prompt('enter your password : ');
(async () => {
	try {
		const user = await userStorage.loginUser(id, password);
	} catch (error) {
        
	}
})();
