const outputDir = "src/api/orval";

export default {
  petstore: {
    output: {
      mode: "split",
      target: outputDir,
      schemas: "src/model",
      client: "swr",
      mock: {
        type: "msw",
        delay: 0,
      },
      override: {
        mutator: {
          path: "./src/api/custom-instance.ts",
          name: "customInstance",
          default: true,
        },
      },
    },
    input: {
      target: "./src/api/openapi.yml",
    },
    hooks: {
      afterAllFilesWrite: `pnpm dlx prettier --write ${outputDir}/**/*.{ts,tsx}`,
    },
  },
};
