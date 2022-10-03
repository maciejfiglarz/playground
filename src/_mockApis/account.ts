import services from 'utils/mockAdapter';

//imports project
import { User } from 'types';
// import { JWTData } from 'types';

// constant

// import { v4 as UIDV4 } from 'uuid';

// import image1 from 'assets/images/users/1.jpg';
// import image2 from 'assets/images/users/2.jpg';
// import image3 from 'assets/images/users/3.jpg';
// import image4 from 'assets/images/users/4.jpg';
// import image5 from 'assets/images/users/5.jpg';
// import image6 from 'assets/images/users/6.jpg';
// import image7 from 'assets/images/users/7.jpg';
// import image8 from 'assets/images/users/8.jpg';
// import image9 from 'assets/images/users/9.jpg';
// import image10 from 'assets/images/users/10.jpg';

// import avatar1 from 'assets/images/users/avatar-1.png';
// import avatar2 from 'assets/images/users/avatar-2.png';
// import avatar3 from 'assets/images/users/avatar-3.png';
// import avatar4 from 'assets/images/users/avatar-4.png';
// import avatar5 from 'assets/images/users/avatar-5.png';
// import avatar6 from 'assets/images/users/avatar-6.png';
// import avatar7 from 'assets/images/users/avatar-7.png';

//users
let users: User[] = [
    {
        id: '5e86809283e28b96d2d38537',
        email: 'test@test.pl',
        password: 'test',
        name: 'User'
    }
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onPost('/api/account/login').reply((request) => {
    try {
        const { email, password } = JSON.parse(request.data);
        const user = users.find((_user) => _user.email === email);

        if (!user) {
            return [400, { message: 'Podany email i hasło są nieprawidłowe' }];
        }
        if (user.password !== password) {
            return [400, { message: 'Błędne hasło' }];
        }

        return [
            200,
            {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            }
        ];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/account/login-token').reply((request) => {
    try {
        const { token } = JSON.parse(request.data);
        const user = users.find((_user) => _user.id === token);

        if (!user) {
            return [400, { message: 'Błąd autoryzacji!' }];
        }
        return [
            200,
            {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            }
        ];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Server Error' }];
    }
});

services.onGet('/api/users').reply(200, { users });

services.onGet('/api/account/me').reply((request) => {
    try {
        const Authorization = request.headers?.Authorization;

        if (!Authorization) {
            return [401, { message: 'Token Missing' }];
        }

        return [
            200,
            {
                user: {
                    id: 'user.id',
                    email: 'user.email'
                }
            }
        ];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});
