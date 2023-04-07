import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser" 
import { isDev, files } from "./.build/Rollup.js"

export default files("src/ts").map(el => {
    return {
        input: el,
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
})