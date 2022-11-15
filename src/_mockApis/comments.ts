import services from "utils/mockAdapter";
import { Comment } from "types";

import { v4 as UIDV4 } from "uuid";

import { users } from "./users";

//posts

export let comments: Comment[] = [
  {
    id: "b2339dgggac",
    user: {
      ...users[0],
    },
    text: "0It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    likes: {
      like: true,
      value: 1,
    },
    postID: "5e8882f1f0c9216397e05a9b",
    createdAt: "2022-11-03T18:26:51.000Z",
    replies: [
      {
        id: "b2339dggfesfsefsefsegac",
        user: {
          ...users[1],
        },

        text: "1Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may. Wicket do manner others seemed enable rather in. Excellent own discovery unfeeling sweetness questions the gentleman. Chapter shyness matters mr parlors if mention thought.",
        likes: {
          like: true,
          value: 88,
        },
        postID: "5e8882f1f0c9216397e05a9b",
        createdAt: "2022-11-03T18:26:51.000Z",
        replies: [
          {
            id: "25446547978423gdrgrdgrdgrd4574435",
            user: {
              ...users[1],
            },
            createdAt: "2022-11-03T18:26:51.000Z",
            text: "2Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am.",
            likes: {
              like: true,
              value: 6,
            },
            postID: "516397e05a9b",
            replies: [],
          },
        ],
      },
      {
        id: "254465479784234574435",
        user: {
          ...users[2],
        },

        text: "1Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.",
        likes: {
          like: true,
          value: 15,
        },
        postID: "5e8882f1f0c9216397e05a9b",
        replies: [],
        createdAt: "2022-11-03T18:26:51.000Z",
      },
    ],
  },
  {
    id: "b2339d45436565431gc",
    user: {
      ...users[1],
    },
    text: "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.",
    likes: {
      like: true,
      value: 6,
    },
    postID: "5e8882f1f0c9",
    createdAt: "2022-11-03T18:26:51.000Z",
    replies: [
      {
        id: "254465479780574435",
        user: {
          ...users[3],
        },
        text: "In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.",
        likes: {
          like: true,
          value: 9,
        },
        postID: "5e8882f1f0c9",
        replies: [],
        createdAt: "2022-11-03T18:26:51.000Z",
      },
    ],
  },
  {
    id: "b2339dgggrggrd4435gac",
    user: {
      ...users[4],
    },
    text: "Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.",
    likes: {
      like: true,
      value: 2,
    },
    postID: "516397e05a9b",
    createdAt: "2022-11-03T18:26:51.000Z",
    replies: [
      {
        id: "b2339dggdgd45353ggac",
        user: {
          ...users[3],
        },
        createdAt: "2022-11-03T18:26:51.000Z",
        text: "Do am he horrible distance marriage so although. Afraid assure square so happen mr an before. His many same been well can high that. Forfeited did law eagerness allowance improving assurance bed. Had saw put seven joy short first. Pronounce so enjoyment my resembled in forfeited sportsman. Which vexed did began son abode short may. Interested astonished he at cultivated or me. Nor brought one invited she produce her.",
        likes: {
          like: true,
          value: 0,
        },
        replies: [],
        postID: "516397e05a9b",
      },
      {
        id: "25446547978423gdrgrdgrdgrd4574435",
        user: {
          ...users[1],
        },
        createdAt: "2022-11-03T18:26:51.000Z",
        text: "Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am.",
        likes: {
          like: true,
          value: 6,
        },
        replies: [],
        postID: "516397e05a9b",
      },
    ],
  },
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onGet("/api/comments").reply(200, [...comments]);

services.onPost("/comment/add").reply((request) => {
  // try {
  const data = JSON.parse(request.data);
  const { userID, postID, text } = data;
  console.log("text", text);
  const user = users.find((user) => user.id === userID);
  if (!user) {
    return [500, { message: "Nie znaleziono autora" }];
  }

  const newComment: Comment = {
    id: UIDV4(),
    user,
    postID,
    text,
    likes: {
      like: true,
      value: 3,
    },
    replies: [],
    createdAt: "2022-11-03T18:26:51.000Z",
  };

  return [200, newComment];
  // } catch (err) {
  //   console.error(err);
  //   return [500, { message: "Internal server error1" }];
  // }
});
