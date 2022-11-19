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
    description:"Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old."
  },
  {
    id: "5e86",
    email: "tesdadwadwat@test.pl",
    login: "Rhett Rubio",
    avatar: avatar2,
    cover: background,
    description:"As collected deficient objection by it discovery sincerity curiosity. Quiet decay who round three world whole has mrs man. Built the china there tried jokes which gay why. Assure in adieus wicket it is. But spoke round point and one joy. Offending her moonlight men sweetness see unwilling. Often of it tears whole oh balls share an."
  },
  {
    id: "5e28b96d2d38537",
    email: "tesdawdawt@test.pl",
    login: "Arturo Marks",
    avatar: avatar3,
    cover: background,
    description:"Sex and neglected principle ask rapturous consulted. Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing an insensible motionless if introduced ye. Now give nor both come near many late."
  },
  {
    id: "5e86809283e27",
    email: "tesdawdawdawt@test.pl",
    login: "Keneth Lawrence",
    avatar: avatar4,
    cover: background,
    description:"Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources."
  },
  {
    id: "5e866d2d38537",
    email: "tedawdawdst@test.pl",
    login: "Rhett Rubio",
    avatar: avatar5,
    cover: background,
    description:"Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford parish settle easily garret."
  },
  {
    id: "5e883e28b96d2d38537",
    email: "testdawawdaw@test.pl",
    login: "Trelawney",
    avatar: avatar6,
    cover: background,
    description:"Greatest properly off ham exercise all. Unsatiable invitation its possession nor off. All difficulty estimating unreserved increasing the solicitude. Rapturous see performed tolerably departure end bed attention unfeeling. On unpleasing principles alteration of. Be at performed preferred determine collected. Him nay acuteness discourse listening estimable our law. Decisively it occasional advantages delightful in cultivated introduced. Like law mean form are sang loud lady put."
  },
  {
    id: "5e866d2d38537",
    email: "tedadwadwast@test.pl",
    login: "Ezra Lindsey",
    avatar: avatar7,
    cover: background,
    description:"Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed."
  },
];

const delay = (timeout: number) =>
  new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onPost("/auth/login").reply(async (request) => {
  try {
    await delay(500);
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

// services.onPost("/api/users").reply(async (request) => {
//   try {
//     delay(500);


//   }catch(e){
//     return [500, { message: "Internal server error" }];
//   }

// });

services.onGet("/api/users").reply(200, { users });

services.onGet(/\/api\/user\/\w+/).reply(async (request) => {
  try {
    delay(2500);
    const id = request.url?.replace("/api/user/", "");
    const user = users.find((_item) => _item.id === id);
    return [200, { ...user }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

services.onGet("/auth/user-details").reply(async (request) => {
  try {
    delay(500);
    const userID = getCookie("user");
    const user = users.find((_user) => _user.id === userID);

    if (!user) {
      return [401, { message: "Użytkownik nie zalogowany" }];
    }

    return [
      200,
      {
        ...user,
      },
    ];
  } catch (err) {
    return [500, { message: "Server Error" }];
  }
});
