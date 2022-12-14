import services from "utils/mockAdapter";

//imports project
import { User } from "types";
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

import background from "assets/images/categories/bg.png";

import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";
import { getCookie } from "utils/cookies";

//users
export let users: User[] = [
  {
    id: "5e86809283e28b96d2d38537",
    email: "test@test.pl",
    login: "Estela Deleon",
    avatar: avatar1,
    cover: background,
  },
  {
    id: "5e86",
    email: "tesdadwadwat@test.pl",
    login: "Rhett Rubio",
    avatar: avatar2,
    cover: background,
  },
  {
    id: "5e28b96d2d38537",
    email: "tesdawdawt@test.pl",
    login: "Arturo Marks",
    avatar: avatar3,
    cover: background,
  },
  {
    id: "5e86809283e27",
    email: "tesdawdawdawt@test.pl",
    login: "Keneth Lawrence",
    avatar: avatar4,
    cover: background,
  },
  {
    id: "5e866d2d38537",
    email: "tedawdawdst@test.pl",
    login: "Rhett Rubio",
    avatar: avatar5,
    cover: background,
  },
  {
    id: "5e883e28b96d2d38537",
    email: "testdawawdaw@test.pl",
    login: "Trelawney",
    avatar: avatar6,
    cover: background,
  },
  {
    id: "5e866d2d38537",
    email: "tedadwadwast@test.pl",
    login: "Ezra Lindsey",
    avatar: avatar7,
    cover: background,
  },
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onPost("/auth/login").reply((request) => {
  try {
    const { email } = JSON.parse(request.data);
    const user = users.find((_user) => _user.email === email);
    console.log("email", email, user);
    if (!user) {
      return [400, { message: "Podany email i hasło są nieprawidłowe" }];
    }
    // if (user.password !== password) {
    //   return [400, { message: "Błędne hasło" }];
    // }

    return [
      200,
      {
        ...user,
      },
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: "Server Error" }];
  }
});

services.onGet("/api/users").reply(200, [ ...users ]);

services.onGet(/\/api\/user\/\w+/).reply((request) => {
  try {
    const id = request.url?.replace("/api/user/", "");
    const category = users.find((_item) => _item.id === id);
    return [200, { ...category }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

services.onGet("/auth/user-details").reply((request) => {
  try {
    const userID = getCookie("user");
    const user = users.find((_user) => _user.id === userID);

    if (!user) {
      return [401, { message: "Użytkownik nie zalogowany" }];
    }

    return [
      200,
      {
        ...user
      }
    ];
  } catch (err) {
    return [500, { message: "Server Error" }];
  }
});
