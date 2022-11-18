import services from "utils/mockAdapter";
import { Post, Comment } from "types";
import { v4 as UIDV4 } from "uuid";
import { users } from "./users";

import { comments } from "./comments";

import image1 from "assets/images/posts/1.jpg";
import image2 from "assets/images/posts/2.jpg";
import image3 from "assets/images/posts/3.jpg";
import image4 from "assets/images/posts/4.jpg";
import image5 from "assets/images/posts/5.jpg";
import image6 from "assets/images/posts/6.jpg";
import image7 from "assets/images/posts/7.jpg";
import image8 from "assets/images/posts/8.jpg";
import image9 from "assets/images/posts/9.jpg";
import image10 from "assets/images/posts/10.jpg";

import graphic1 from "assets/images/graphics/1.png";
import graphic2 from "assets/images/graphics/2.png";
import graphic3 from "assets/images/graphics/3.png";
import graphic4 from "assets/images/graphics/4.png";
import graphic5 from "assets/images/graphics/5.png";
import graphic6 from "assets/images/graphics/6.png";
import graphic7 from "assets/images/graphics/7.png";
import graphic8 from "assets/images/graphics/8.png";
import graphic9 from "assets/images/graphics/9.png";
import graphic10 from "assets/images/graphics/10.png";
import graphic11 from "assets/images/graphics/11.png";
import graphic12 from "assets/images/graphics/12.png";
import graphic13 from "assets/images/graphics/13.png";
import graphic14 from "assets/images/graphics/14.png";

const imagesCollection = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const graphicsCollection = [
  graphic1,
  graphic2,
  graphic3,
  graphic4,
  graphic5,
  graphic6,
  graphic7,
  graphic8,
  graphic9,
  graphic10,
  graphic11,
  graphic12,
  graphic13,
  graphic14,
];

const randomElement = <A>(array: any): any =>
  array[Math.floor(Math.random() * array.length)];

//posts
let posts: Post[] = [
  {
    id: "5e8882f1f0c9216397e05a9b",

    title: "Best Make POST You Will Read This Year (in 2015)",
    description:
      "Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected. He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched. Improved so strictly produced answered elegance is. Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he. Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner.",
    slug: "",

    linkSiteUrl: null,

    image: randomElement(imagesCollection),
    type: "post",
    youtubeID: null,
    prefix: null,
    // comments: [randomElement(comments)],
    comments: [comments[0]],
    voteDown: 10,
    voteUp: 20,
    isActive: true,
    isWaiting: false,
    user: users[0],
    createdAt: "2022-11-03T18:26:51.000Z",
  },
  {
    id: "a9b",

    title: null,
    description: null,
    slug: "",

    linkSiteUrl: null,

    image: randomElement(graphicsCollection),

    type: "graphic",
    youtubeID: null,
    prefix: null,
    comments: [],
    voteDown: 10,
    voteUp: 20,
    isActive: true,
    isWaiting: false,
    user: users[0],
    createdAt: "2022-11-03T18:26:51.000Z",
  },
  {
    id: "516397e05a9b",

    title: "Best Make POST You Will Read This Year (in 2015)",
    description:
      "The Second World War was one of the deadliest conflicts in history. This post shows what it was like to be a soldier during the war.",
    slug: "",

    linkSiteUrl: null,

    image: image2,

    type: "post",
    youtubeID: "TmJWmYUHJo8",
    prefix: null,
    comments: [randomElement(comments)],
    voteDown: 10,
    voteUp: 20,
    isActive: true,
    isWaiting: false,
    user: users[0],
    createdAt: "2022-11-03T18:26:51.000Z",
  },
  {
    id: "5e8882f1f0c9",

    title:
      "Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected",
    description:
      "Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.",
    slug: "",
    linkSiteUrl: "https://www.randomtextgenerator.com",

    image: image3,
    type: "link",
    youtubeID: null,
    prefix: null,
    comments: [randomElement(comments)],
    voteDown: 10,
    voteUp: 20,
    isActive: true,
    isWaiting: false,
    user: users[0],
    createdAt: "2022-11-03T18:26:51.000Z",
  },
];

const delay = (timeout: number) =>
  new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services
  .onGet("/api/posts")
  .reply(200, { posts: posts.slice(0, 5), total: posts.length });

services.onGet(/\/api\/post\/\w+/).reply(async (request) => {
  try {
    delay(500);
    const id = request.url?.replace("/api/post/", "");
    const post = posts.find((item) => item.id === id);
    return [200, { ...post }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error1" }];
  }
});

services.onPost("/api/posts/add").reply(async (request) => {
  try {
    delay(500);
    const { data } = JSON.parse(request.data);
    const { title, description, author } = data;
    const post = {
      id: "5e8882f1f0c9216397e05a9b",

      title: "Best Make POST You Will Read This Year (in 2015)",
      description:
        "The Second World War was one of the deadliest conflicts in history. This post shows what it was like to be a soldier during the war.",
      slug: "",

      linkTitle: null,
      linkDescription: null,
      linkSiteUrl: null,

      image: image1,

      type: "post",

      comments: [],
      voteDown: 10,
      voteUp: 20,
      isActive: true,
      isWaiting: false,
      user: users[0],
      createdAt: "2022-11-03T18:26:51.000Z",
    };

    // posts = [...posts, post];
    return [200, post];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error1" }];
  }
});
