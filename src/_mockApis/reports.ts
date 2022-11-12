import services from "utils/mockAdapter";
import { Report } from "types";
import { v4 as UIDV4 } from "uuid";
import { users } from "./users";

//posts
let reports: Report[] = [
  {
    id: "5e8882f1f0c921605a9b",
    text: "Ten post się nie nadaje",
    user: users[0],
    createdAt: "2022-11-03T18:26:51.000Z",
  },
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services
  .onGet("/auth/report")
  .reply(200, { reports: reports.slice(0, 5), total: reports.length });

services.onGet(/\/auth\/report\/\w+/).reply((request) => {
  try {
    const id = request.url?.replace("/api/report/", "");
    const post = reports.find((item) => item.id === id);
    return [200, { ...post }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error1" }];
  }
});

services.onPost("/auth/report").reply((request) => {
  try {
    const { data } = JSON.parse(request.data);
    const { text } = data;
    const report = {
      id: UIDV4(),
      text,
      user: users[2],
      createdAt: "2022-11-03T18:26:51.000Z",
    };

    reports = [...reports, report];
    return [200, report];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error1" }];
  }
});
