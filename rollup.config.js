import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser" 
import { isDev, files } from "./.build/Rollup.js"

export default [
    {
        input: [
            ...files("src/ts"),
            ...files("src/ts/pages")
        ],
        output: {
            dir: "public/js",
            format: "esm",
            sourcemap: isDev()
        },
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            !isDev() ? terser() : null
        ]
    }
] 