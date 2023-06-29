const prompt = require('prompt-sync')();

class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(
				(id === 'fe_dev' && password === 'password1234!')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'fe_dev') {
				onSuccess({name:'fe_dev', role: 'admin'});
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
    
    getData(role, onSuccess, onError) {
        setTimeout(() => {
			if (role === 'admin') {
				onSuccess({data:'good job!!'});
			} else {
				onError(new Error('permission error'));
			}
		}, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id : ');
const password = prompt('enter your password : ');
userStorage.loginUser(
	id,
	password,
	user => {
		userStorage.getRoles(
			user,
			userWithRole => {
				console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
                userStorage.getData(
                    userWithRole.role,
                    result => {
                        console.log(result.data);
                    },
                    error => {
                        console.log(error);
                    }
                )
			},
			error => {
				console.log(error);
			}
		);
	},
	error => {
		console.log(error);
	}
);