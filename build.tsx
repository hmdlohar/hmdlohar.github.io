import { cp, mkdir } from "node:fs/promises";
import { Page } from "./src/page";

await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });
await Bun.write("dist/index.html", "<!doctype html>" + (await (<Page />).toString()));
console.log("built dist/index.html");

// `bun build.tsx --serve`: local preview of dist/ (CSS comes from the tailwind --watch in `bun run dev`)
if (process.argv.includes("--serve")) {
  const server = Bun.serve({
    port: 3000,
    async fetch(req) {
      let path = new URL(req.url).pathname;
      if (path.endsWith("/")) path += "index.html";
      // public/ first, so edits there show without a rebuild (--watch only sees imported modules)
      for (const dir of ["public", "dist"]) {
        const file = Bun.file(dir + path);
        if (await file.exists()) return new Response(file);
      }
      return new Response("Not found", { status: 404 });
    },
  });
  console.log(`serving ${server.url}`);
}
