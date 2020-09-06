import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [nodeResolve(), typescript(), isProduction && terser()],
};
