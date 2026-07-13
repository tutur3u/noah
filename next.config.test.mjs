import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "./next.config.ts";

test("Next.js denies framing for every route", async () => {
  assert.deepEqual(await nextConfig.headers?.(), [
    {
      source: "/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors 'none'",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
      ],
    },
  ]);
});
