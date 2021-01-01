import { Server } from "https://code4sabae.github.io/js/Server.js";

class MyServer extends Server {
  api(path, req) {
    if (req && req["data"]) {
      Deno.writeTextFileSync("data/test.json", JSON.stringify(req.data));
      Deno.writeTextFileSync("data/" + new Date().getTime() + ".json", JSON.stringify(req.data));
      return { res: "ok" };
    }
    const json = JSON.parse(Deno.readTextFileSync("data/test.json"));
    return json;
  }
}
new MyServer(8882);
