import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.190.0/http/file_server.ts";

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    return serveDir(req, {
      fsRoot: "./dist",
      urlRoot: "",
      showDirListing: false,
      indexFile: "index.html",
      etag: true,
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});
