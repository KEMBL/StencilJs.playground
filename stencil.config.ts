import { Config } from "@stencil/core";

// More: https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      // dev
      type: "www"
    },
    // { // production
    //   type: 'www',
    //   dir: '/stencil',
    //   baseUrl: '/stencil',
    //   buildDir: '/stencil/build',
    // }
  ]
};
