import services from "utils/mockAdapter";
import { Category } from "types";

import cover from "assets/images/categories/bg.png";

import thumb1 from "./categories/1.webp";
import thumb2 from "./categories/2.webp";
import thumb3 from "./categories/3.webp";
import thumb4 from "./categories/4.webp";
import thumb5 from "./categories/5.webp";
import thumb6 from "./categories/6.webp";
import thumb7 from "./categories/7.webp";
import thumb8 from "./categories/8.webp";
import thumb9 from "./categories/9.webp";
import thumb10 from "./categories/10.webp";

import thumb11 from "./categories/11.webp";
import thumb12 from "./categories/12.webp";
import thumb13 from "./categories/13.webp";
import thumb14 from "./categories/14.webp";
import thumb15 from "./categories/15.webp";
import thumb16 from "./categories/16.webp";
import thumb17 from "./categories/17.webp";
import thumb18 from "./categories/18.webp";
import thumb19 from "./categories/19.webp";
import thumb20 from "./categories/20.webp";

let categories: Category[] = [
  {
    id: "5e8882f1f0c9216397e05a9b",
    slug: "wiadomosci",
    name: "Wiadomości ze świata i z polski",
    description:
      "I had no idea the war was growing so quickly. My spies report that the empire of the north is preparing for a new offensive. If we do not act swiftly, the dwarves will soon be killing our beloved friends.",
    cover: cover,
    thumb: thumb1,
  },
  {
    id: "162a18945b60",
    slug: "sport",
    name: "Sport",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb2,
  },
  {
    id: "1626565a18945b60",
    slug: "business",
    name: "Biznes",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb3,
  },
  {
    id: "162655b60",
    slug: "culture",
    name: "Kultura",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb4,
  },
  {
    id: "35353162655b60",
    slug: "wideo",
    name: "Wideo",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb5,
  },
  {
    id: "162656465655b60",
    slug: "technology",
    name: "Technologia",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb6,
  },

  {
    id: "164552655b60545454",
    slug: "travel",
    name: "Podróże",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb7,
  },

  {
    id: "1645526557678674",
    slug: "crypto",
    name: "Kryptowaluty",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb8,
  },

  {
    id: "160545454",
    slug: "music",
    name: "Muzyka",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb10,
  },

  {
    id: "1645b60545454",
    slug: "series",
    name: "Filmy i seriale",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb19,
  },

  {
    id: "164552655b76767560545454",
    slug: "monety",
    name: "Monety",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb11,
  },

  {
    id: "1xxx55b767676565560545454",
    slug: "programowanie",
    name: "Programowanie",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb12,
  },
  {
    id: "164552655b75656566767560545454",
    slug: "zwierzeta",
    name: "Zwierzęta",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb13,
  },
  {
    id: "16455254",
    slug: "pyszne-przepisy",
    name: "Pyszne przepisy",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb15,
  },
  {
    id: "1645bbbb5254",
    slug: "sushi",
    name: "Wszyscy lubią Sushi",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb16,
  },
  {
    id: "1644dfregrgr55254",
    slug: "zloto",
    name: "Nie wszystko złoto co się świeci",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb17,
  },
  {
    id: "1646664df",
    slug: "przyslowie",
    name: "Najlepsze przysłowia",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb18,
  },
  {
    id: "1644df54654654",
    slug: "cytaty",
    name: "Najlepsze cytaty w historii świata",
    description:
      "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb20,
  },
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onGet(/\/api\/category\/\w+/).reply((request) => {
  try {
    const id = request.url?.replace("/api/category/", "");
    const category = categories.find((_item) => _item.id === id);
    return [200, { ...category }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error1" }];
  }
});
console.log(categories)
services.onGet("/api/categories").reply(200, [...categories]);
