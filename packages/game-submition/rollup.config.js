import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    input: "src/client.js",
    output: {
      dir: "public",
      format: "iife",
    },
    plugins: [nodeResolve(), commonjs(), isProduction && terser()],
  },
  {
    input: "src/server.js",
    output: {
      dir: "public",
      format: "cjs",
    },
    plugins: [nodeResolve(), commonjs(), isProduction && terser()],
  },
];
