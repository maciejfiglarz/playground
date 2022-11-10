import services from "utils/mockAdapter";
import { Comment } from "types";

import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";

import { users } from "./users";

//posts

export let comments: Comment[] = [
  {
    id: "b2339dgggac",
    user: {
      ...users[0],
    },
    data: {
      name: "",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: {
        like: true,
        value: 1,
      },
      replies: [
        {
          id: "b2339dgggac",
          user: {
            ...users[1],
          },
          data: {
            name: "",
            text: "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may. Wicket do manner others seemed enable rather in. Excellent own discovery unfeeling sweetness questions the gentleman. Chapter shyness matters mr parlors if mention thought.",
            likes: {
              like: true,
              value: 88,
            },
          },
        },
        {
          id: "254465479784234574435",
          user: {
            ...users[2],
          },
          data: {
            name: "",
            text: "Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.",
            likes: {
              like: true,
              value: 15,
            },
          },
        },
      ],
    },
  },
  {
    id: "b2339d45436565431gc",
    user: {
      ...users[1],
    },
    data: {
      name: "",
      text: "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.",
      likes: {
        like: true,
        value: 6,
      },
      replies: [
        {
          id: "254465479780574435",
          user: {
            ...users[3],
          },
          data: {
            name: "",
            text: "In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.",
            likes: {
              like: true,
              value:9,
            },
          },
        },
      ],
    },
    
  },
  {
    id: "b2339dgggrggrd4435gac",
    user: {
      ...users[4],
    },
    data: {
      name: "",
      text: "Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.",
      likes: {
        like: true,
        value:2,
      },
      replies: [
        {
          id: "b2339dggdgd45353ggac",
          user: {
            ...users[3],
          },
          data: {
            name: "",
            text: "Do am he horrible distance marriage so although. Afraid assure square so happen mr an before. His many same been well can high that. Forfeited did law eagerness allowance improving assurance bed. Had saw put seven joy short first. Pronounce so enjoyment my resembled in forfeited sportsman. Which vexed did began son abode short may. Interested astonished he at cultivated or me. Nor brought one invited she produce her.",
            likes: {
              like: true,
              value: 0,
            },
          },
        },
        {
          id: "25446547978423gdrgrdgrdgrd4574435",
          user: {
            ...users[1],
          },
          data: {
            name: "",
            text: "Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am.",
            likes: {
              like: true,
              value: 6,
            },
          },
        },
      ],
    },
  },
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onGet("/api/comments").reply(200, [...comments]);
