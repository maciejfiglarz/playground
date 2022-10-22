import services from "utils/mockAdapter";
import { Category } from "types";

import cover from "assets/images/categories/bg.png";
import thumb from "assets/images/categories/thumb.png";

//posts
let categories: Category[] = [
  {
    id: "5e8882f1f0c9216397e05a9b",
    slug: "wiadomosci",
    name: "Wiadomości",
    description:
      "I had no idea the war was growing so quickly. My spies report that the empire of the north is preparing for a new offensive. If we do not act swiftly, the dwarves will soon be killing our beloved friends.",
    cover: cover,
    thumb: thumb,
  },
  {
    id: "162a18945b60",
    slug: "sport",
    name: "Sport",
    description:
     "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    cover: cover,
    thumb: thumb,
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
