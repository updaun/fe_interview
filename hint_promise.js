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
        return none;
	}

	getData(role) {
		return none;
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id : ');
const password = prompt('enter your password : ');
userStorage.loginUser(id, password)
	.then(user => userStorage.getRoles(user))
	
