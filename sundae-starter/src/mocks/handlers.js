import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      { imageName: "Chocolate", imagePath: "/images/chocolate.png" },
      { imageName: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];
