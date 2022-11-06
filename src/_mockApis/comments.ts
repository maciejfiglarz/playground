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
let comments: Comment[] = [
  {
    id: "b2339dac",
    profile: {
      ...users[0],
    },
    data: {
      name: "",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },
  {
    id: "cebcabd6-6b49-4474-ac48-a978d1aa40d8",
    profile: {
      ...users[1],
    },
    data: {
      name: "",
      text: "A look at the massacre at a post office in France.",
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },

  {
    id: "80932c52-1bb5-42e7-a985-35f4c1fec7e1",
    profile: {
      ...users[2],
    },
    data: {
      name: "",
      text: "The war on terror has changed the way we understand and define terrorism. Here is a look at the defining moments in the war on terrorism.",
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },

  {
    id: "242dce94-6be2-4cff-a66b-bc3a55dde8c6",
    profile: {
      ...users[3],
    },
    data: {
      name: "",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },

  {
    id: "5bfc6043-cec2-4670-a79e-720b2612c764",
    profile: {
      ...users[4],
    },
    data: {
      name: "",
      text: "How can we keep our country safe? And how can we keep going?",
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },
  {
    id: "5bfc6043-cec2-4670-a79e-720b2612c764",
    profile: {
      ...users[5],
    },
    data: {
      name: "",
      text: 'I had no idea the war was growing so quickly. My spies report that the empire of the north is preparing for a new offensive. If we do not act swiftly, the dwarves will soon be killing our beloved friends.',
      likes: {
        like: true,
        value: 65,
      },
      replies: [],
    },
  },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar2,
  //         login: 'Estela Deleon',
  //         time: '1 hour ago'
  //     },
  //     data: {
  //         text:'The American Civil War was fought from 1861 to 1865. This historical war is the most extensively studied U.S. war. It is also the war that most Americans are aware of.',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar3,
  //         login: 'Rhett Rubio',
  //         time: '15 min ago '
  //     },
  //     data: {
  //         name: '',
  //         text: 'A look at the massacre at a post office in France.',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar4,
  //         login: 'Eleanor Rivera',
  //         time: '1 hour ago'
  //     },
  //     data: {
  //         text: 'I had no idea the war was growing so quickly. My spies report that the empire of the north is preparing for a new offensive. If we do not act swiftly, the dwarves will soon be killing our beloved friends.',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar5,
  //         login: 'Arturo Marks',
  //         time: '15 min ago '
  //     },
  //     data: {
  //         name: '',
  //         text: 'The war on terror has changed the way we understand and define terrorism. Here is a look at the defining moments in the war on terrorism.',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar6,
  //         login: 'Keneth Lawrence',
  //         time: '1 hour ago'
  //     },
  //     data: {
  //         text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // },
  // {
  //     id: '#2COMMENT_JONE_DOE',
  //     profile: {
  //         id: '#52JONE_DOE',
  //         avatar: avatar7,
  //         login: 'Ezra Lindsey',
  //         time: '1 hour ago'
  //     },
  //     data: {
  //         text:  'How can we keep our country safe? And how can we keep going?',
  //         likes: {
  //             like: true,
  //             value: 65
  //         },
  //         replies: []
  //     }
  // }
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onGet("/api/comments").reply(200, [...comments]);
